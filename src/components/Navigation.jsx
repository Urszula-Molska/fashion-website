import { Link } from "react-router-dom";

import sprite from "../assets/sprite.svg";

export const Navigation = () => {
  return (
    <>
      <header className="flex items-center justify-between ">
        <div className="font-elephant text-[40px] text-green800 mr=[377px] mt-[55px]">
          Rivo
        </div>
        <nav>
          <ul className="flex font-poppins text-[22px] text-green800 mt-[63px]">
            <li className="mr-[57px]">HOME</li>
            <li className="mr-[52px]">SHOP</li>
            <li className="mr-[47px]">FEATURES</li>
            <li className="">CONTACT</li>
          </ul>
        </nav>
        <div className="flex items-center">
          <div className="mr-[57px] m-auto h-[32px] w-[32px] mt-[71px] ">
            <svg>
              <use href={`${sprite}#icon-suitcase`}></use>
            </svg>
          </div>
          <button className="text-[20px] text-green800 text-center border-green800  w-[142px] h-[52px] border-2 rounded-[3px] mt-[54px]">
            LOGIN
          </button>
        </div>
      </header>
    </>
  );
};
export default Navigation;
