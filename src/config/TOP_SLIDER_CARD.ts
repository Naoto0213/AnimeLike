import { Links } from "./Links";

export type TopSliderCardType = {
  title: string;
  link: string;
};

export const TOP_SLIDER_CARD = [
  {
    title: "人気アニメ",
    link: Links.POPULAR,
  },
  {
    title: "新着アニメ",
    link: Links.NEW_ANIME,
  },
  {
    title: "あなたへのおすすめ",
    link: Links.RECOMMENDED,
  },
  {
    title: "今期のアニメ",
    link: Links.NOW_ANIME,
  },
];
