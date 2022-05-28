import { GreetProps } from "./greet.type";

const Greet: React.FC<GreetProps> = ({ name, count, isLogged }) => {
  return (
    <div>
      <h2>
        {isLogged
          ? `Welcome ${name} here I am trying to learn ${count} typescript`
          : "You are not logged"}
      </h2>
    </div>
  );
};

export default Greet;
