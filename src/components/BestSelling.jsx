import { useState, useEffect } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import Loader from "../components/Loader/Loader.jsx";
import sprite from "../assets/sprite.svg";
import axios from "axios";

const BestSelling = () => {
  const [pictures, setPictures] = useState([]);
  const [limit, setLimit] = useState(3);
  const [isLoading, setLoading] = useState(false);

  const fetchPictures = async (limit) => {
    const URL = `https://fakestoreapi.com/products?limit=${limit}`;
    try {
      if (limit < 21) {
        setLoading(true);
        const response = await axios.get(`${URL}`);
        setPictures(response.data);
        setLoading(false);
      } else {
        Notify.info("There are no more records to display!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPictures(limit);
  }, [limit]);

  return (
    <>
      <div className="bg-white pt-20  w-full px-[10px] 2xl:pt-[114px] flex flex-col  justify-center items-center pb-[99px] ">
        <h2 className="font-roboto_slab font-medium text-[36px] tab&2xl:text-[64px] text-green800 text-center">
          Best selling
        </h2>
        <p className="font-poppins font-medium text-[22px] text-green800 text-center pt-[37px] pb-10 2xl:pb-20">
          Get in on the trend with our curated selection of best-selling styles.
        </p>
        <ul className="flex flex-wrap gap-[43px] mb-20 justify-center">
          {pictures.map((picture) => (
            <li
              key={picture.id}
              className="w-full max-w-[430px] flex items-center flex-col"
            >
              <div className="tab&2xl:w-[430px] tab&2xl:h-[566px] mb-3 tab&2xl:mb-[51px] w-full">
                {isLoading === true ? (
                  <Loader />
                ) : (
                  <img
                    className="tab&2xl:w-[430px] tab&2xl:h-[566px] object-contain block bg-white w-full"
                    src={picture.image}
                    alt={picture.title}
                  ></img>
                )}
              </div>
              <p className="font-poppins text-[22px] text-gray400 font-semibold text-center mb-2 w-[303px]">
                {picture.title}
              </p>
              <div className="font-poppins text-[22px] text-gray200 font-medium flex items-center justify-center  ">
                <p className="mr-[39px]">${picture.price}</p>
                <div className="h-[27px] mr-[48px] border-[1px] text-[22px] text-gray200 font-medium"></div>
                <p className="mr-[9px]">{picture.rating.rate}</p>
                <svg className="w-6 h-6">
                  <use href={`${sprite}#icon-star`}></use>
                </svg>
              </div>
            </li>
          ))}
        </ul>

        {limit < 21 && (
          <button
            id="fetch"
            onClick={() => setLimit(limit + 3)}
            className="flex items-center pl-[55px] relative w-[224px] h-[65px] border-[2px] rounded-[3px] border-green800 font-poppins text-[22px] font-medium text-green800"
          >
            See all
            <svg className="w-[23px] h-[23px] absolute right-[55px] top-[20px] z-10 fill-green800 animate-pulse">
              {<use href={`${sprite}#icon-arrow-right`}></use>}
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default BestSelling;
