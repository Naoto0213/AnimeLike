import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: string;
  link: string;
};

const PrimaryButton: React.VFC<Props> = (props) => {
  const link = props.link;
  return (
    <Link to={link}>
      <button className="whiteFont bg-yellow-500 px-6 py-2 link rounded focus:outline-none">
        {props.children}
      </button>
    </Link>
  );
};

export default PrimaryButton;
