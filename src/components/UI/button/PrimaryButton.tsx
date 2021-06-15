import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: string;
};

const PrimaryButton: React.VFC<Props> = (props) => {
  return (
    <Link to="top_anime">
      <button className="whiteFont bg-yellow-500 px-6 py-2 link rounded focus:outline-none">
        {props.children}
      </button>
    </Link>
  );
};

export default PrimaryButton;
