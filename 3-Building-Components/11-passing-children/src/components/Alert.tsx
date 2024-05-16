import  { ReactNode } from "react";

interface AlertsProp {
  //text: string
  children: ReactNode;
}

const Alert = ({ children }: AlertsProp) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
