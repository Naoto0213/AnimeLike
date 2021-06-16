import React from "react";
import Cards from "../../UI/animeCards/Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type Props = {
  children: string;
};

const TopAnime: React.VFC<Props> = ({ children }) => {
  const settings = {
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
    <>
      <p className="text-center blackFont text-2xl">{children}</p>

      <div className="mt-12 px-12 md:px-16 lg:px-32 xl:px-64 2xl:px-96">
        <Slider {...settings}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Slider>
      </div>
    </>
  );
};

export default TopAnime;
