import { useState } from "react";

const LoggedIn = () => {
  const [isLogged, setIsLogged] = useState(true);
  const handleLogIn = () => {
    setIsLogged(false);
  };
  const handleLogOut = () => {
    setIsLogged(true);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <div>User is {isLogged ? "logged in Marcel" : "logged out"}</div>
    </div>
  );
};
export default LoggedIn;
