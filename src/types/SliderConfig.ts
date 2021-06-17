export type SliderTypes = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide: number;
  responsive: [
    {
      breakpoint: number;
      settings: {
        slidesToShow: number;
        slidesToScroll: number;
        initialSlide: number;
      };
    },
    {
      breakpoint: number;
      settings: {
        slidesToShow: number;
        slidesToScroll: number;
      };
    }
  ];
};
