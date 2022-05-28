import { useState } from "react";

type UserProps = {
  name: string;
  email: string;
};

const User: React.FC<UserProps> = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const handleLogIn = () => {
    setUser({
      name: "Marcelko",
      email: "Marcelko@something.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Logged In</button>
      <button onClick={handleLogOut}>Logged Out</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default User;
