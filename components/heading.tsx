import { GreetProps } from "./greet.type";

type HeadingProps = {
  children: string;
};

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <>
      <h3>{children}</h3>
    </>
  );
};
export default Heading;
