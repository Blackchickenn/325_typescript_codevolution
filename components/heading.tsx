import { GreetProps } from "./greet.type";

type HeadingProps = {
  children: string;
  name: GreetProps;
};

const Heading: React.FC<HeadingProps> = ({ children, name }) => {
  return (
    <>
      <h3>{children}</h3>
      <h2>Just some another passed {name}</h2>
    </>
  );
};
export default Heading;
