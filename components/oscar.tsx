import React from "react";

type OscarProps = {
  children: JSX.Element;
};

const Oscar: React.FC<OscarProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Oscar;
