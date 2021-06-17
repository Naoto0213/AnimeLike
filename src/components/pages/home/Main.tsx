import React from "react";
import PrimaryButton from "../../UI/button/PrimaryButton";
import TopAnime from "../../common/Slide/TopAnime";
import {
  TOP_SLIDER_CARD,
  TopSliderCardType,
} from "../../../config/TOP_SLIDER_CARD";

const Main: React.VFC = () => {
  return (
    <>
      <div className=" py-12 flex flex-col items-center justify-center mt-14">
        <div className="text-center blackFont text-xl mb-8">
          友達と好きなアニメで盛り上がろう
        </div>
        <PrimaryButton link="login">ログイン</PrimaryButton>
      </div>
      <div className="bg-gray-100 py-1">
        {TOP_SLIDER_CARD.map((items: TopSliderCardType) => {
          return (
            <div className="mt-16">
              <TopAnime link={items.link}>{items.title}</TopAnime>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
