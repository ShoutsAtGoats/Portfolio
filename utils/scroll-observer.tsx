import React, { useCallback, useEffect, useState } from "react";
type Props = {
  children?: React.ReactNode;
};

interface ScrollValue {
  scrollY: number;
}

const defaultState = {
  scrollY: 0,
};

export const ScrollContext = React.createContext<ScrollValue>(defaultState);

const ScrollObserver: React.FC<Props> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    console.log("scrolling", window.scrollY);
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
