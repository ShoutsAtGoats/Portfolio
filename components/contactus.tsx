import React, { useState, useCallback } from "react";
import Image from "next/image";
import axios, { Axios } from "axios";
// import ReCAPTCHA from "react-google-recaptcha";

const ContactUs: React.FC = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    companyName: "",
    email: "",
    message: "",
  });

  const handleOnChange = useCallback(
    (e: { persist: () => void; target: { id: any; value: any } }) => {
      e.persist();
      setInputs((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
      }));
      setStatus({
        ...status,
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      });
    },
    []
  );

  const handleServerResponse = useCallback((ok: any, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        companyName: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      });
    }
  }, []);

  const handleSubmit = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      // recaptchaRef.current.execute();
      axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
        data: inputs,
      }).then((_response) => {
        handleServerResponse(true, "Thank you, your message  has been sent!");
      });
    },
    [inputs, handleServerResponse]
  );

  return (
    <div className='bg-black text-white flex flex-col justify-center pt-10 min-h-screen'>
      <div className='flex-1 flex flex-col justify-center items-center pt=10 lg:pt-6'>
        <div className='pb-10'>
          <Image
            src='/assets/devLogoWhite.png'
            width={178 / 3}
            height={114 / 3}
            alt='logo'
          />
        </div>
        <h2 className='text-4xl font-bold'>Contact:</h2>
        <form
          action='https://formspree.io/f/xzbwbpep'
          method='POST'
          className='flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]'
        >
          {status.info.error && (
            <div
              className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
              role='alert'
            >
              <strong className='font-bold'>Error</strong>: {""}
              <span className='block sm:inline'>{status.info.msg}</span>
            </div>
          )}
          {status.submitted ? (
            <div
              className='text-white text-xl font-bold px-4 py-3 rounded relative'
              role='alert'
            >
              {" "}
              Your message has been successfully sent. We will contact you
              shortly!
            </div>
          ) : (
            <>
              <input
                id='companyName'
                name='companyName'
                required
                maxLength={128}
                type='text'
                placeholder='Company Name'
                className='bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2'
                onChange={handleOnChange}
                value={inputs.companyName}
              />
              <input
                id='email'
                name='email'
                required
                type='email'
                maxLength={128}
                placeholder='Your Email'
                className='bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2'
                onChange={handleOnChange}
                value={inputs.email}
              />
              <textarea
                id='message'
                name='message'
                required
                maxLength={1048576}
                placeholder='Additional Information'
                className='bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2 min-h-[16em]'
                onChange={handleOnChange}
                value={inputs.message}
              />
              <button
                type='submit'
                onClick={handleSubmit}
                className='text-center bg-white text-black border-2 border-black rounded-3xl px-8 py-2'
              >
                {!status.submitting
                  ? !status.submitted
                    ? "Submit"
                    : "Submitted"
                  : "Submitting..."}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
