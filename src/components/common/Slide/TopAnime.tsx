import React from "react";
import Cards from "../../UI/animeCards/Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderTypes } from "../../../types/SliderConfig";
import { Link } from "react-router-dom";

export type Props = {
  children: string;
  link: string;
};

const TopAnime: React.VFC<Props> = ({ children, link }) => {
  // Slickの設定
  const settings: SliderTypes = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-12 md:px-16 lg:px-32 xl:px-64 2xl:px-96">
      <div className="text-center">
        <p className="inline-block blackFont text-2xl border-b-2 border-yellow-500 ">
          {children}
        </p>
        <Link to={link}>
          <p className="text-yellow-700 font-bold text-xs text-right link pr-4">
            全て見る
          </p>
        </Link>
      </div>
      <div className="mt-3 ">
        <Slider {...settings}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Slider>
      </div>
    </div>
  );
};

export default TopAnime;
