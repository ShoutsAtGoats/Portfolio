import { Card, CardContent, CardWrapper } from "./card";

export const GithubCard: React.FC = () => (
  <CardWrapper numOfPages={1}>
    <CardContent>
      <Card
        page={0}
        renderContent={({ progress }) => (
          <div className='bg-red-500 absolute w-3/4 rounded-lg p-8'>
            <div className='text-3xl md:text-5xl lg:text-6xl tracking-tight font-semibold aspect-[1.6/1]'>
              <div className='leading-[1.15]'>Placeholder card</div>
            </div>
          </div>
        )}
      />
    </CardContent>
  </CardWrapper>
);
