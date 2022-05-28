import { PersonProps } from "./person.type";
const Person: React.FC<PersonProps> = ({ name: { firstName, lastName } }) => {
  return (
    <div>
      {firstName}
      {lastName}
    </div>
  );
};

export default Person;
