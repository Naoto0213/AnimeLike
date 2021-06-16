import React from "react";
import PrimaryButton from "../../UI/button/PrimaryButton";

const Main: React.VFC = () => {
  return (
    <>
      <div className="bg-gray-100 py-12 flex flex-col items-center justify-center mb-10">
        <div className="text-center blackFont text-xl mb-8">
          好きなアニメをいつでも管理
        </div>
        <PrimaryButton>人気アニメをみる</PrimaryButton>
      </div>
    </>
  );
};

export default Main;
