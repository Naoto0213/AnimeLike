import React from "react";
import FavoriteButton from "../button/FavoriteButton";
import { Link } from "react-router-dom";

const Cards: React.VFC = () => {
  return (
    <div className=" bg-gray-200 rounded border-gray-200 border-4 mx-2 link">
      <Link to="/" className="link">
        <img src="./test.jpg" alt="Anime" />
        <div className="flex flex-col">
          <div className="pt-3 px-3 blackFont text-sm ">
            <p>ハンターハンター</p>
            <div className="flex justify-between">
              <p className="text-xs my-1 border-transparent hover:border-black">
                詳しくみる
              </p>
              <FavoriteButton />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
