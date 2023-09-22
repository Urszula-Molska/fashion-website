import image from "../assets/pexels-dima-valkov.png";
import sprite from "../assets/sprite.svg";
import line from "../assets/Line 2.svg";

const BestSelling = () => {
  return (
    <>
      <div className="bg-white pt-[114px] flex flex-col justify-center items-center pb-[99px]">
        <h2 className="font-roboto_slab font-medium text-[64px] text-green800 text-center">
          Best selling
        </h2>
        <p className="font-poppins font-medium text-[22px] text-green800 text-center pt-[37px] pb-20">
          Get in on the trend with our curated selection of best-selling styles.
        </p>
        <ul className="flex flex-wrap gap-[43px] mb-20 ">
          <li className="w-[430px] h-[566px] bg-green400">
            <img
              className="w-full object-contain block mb-[51px]"
              src={image}
              alt="picture of product"
            ></img>
            <p className="font-poppins text-[22px] text-gray400 font-semibold text-center mb-2">
              product description
            </p>
            <div className="font-poppins text-[22px] text-gray200 font-medium flex items-center justify-center  ">
              <p className="mr-[39px]">$38.99</p>
              <div className="h-[27px] mr-[48px] border-[1px] text-[22px] text-gray200 font-medium"></div>
              <p className="mr-[9px]">5.0</p>
              <svg className="w-6 h-6">
                <use href={`${sprite}#icon-star`}></use>
              </svg>
            </div>
          </li>
          <li className="w-[430px] h-[566px] bg-green400">
            <img
              className="w-full object-cover block mb-[51px]"
              src={image}
              alt="picture of product"
              li
            ></img>
            <p className="font-poppins text-[22px] text-gray400 font-semibold text-center">
              product description
            </p>
          </li>
          <li className="w-[430px] h-[566px] bg-green400">
            <img
              className="w-full object-cover block mb-[51px]"
              src={image}
              alt="picture of product"
            ></img>
            <p>product description</p>
          </li>
        </ul>
        <button className=" mt-20 flex items-center pl-[55px] relative w-[224px] h-[65px] border-[2px] rounded-[3px] border-green800 font-poppins text-[22px] font-medium text-green800">
          See all
          <svg className="w-[23px] h-[23px] absolute right-[55px] top-[20px] z-10 fill-green800">
            {<use href={`${sprite}#icon-arrow-right`}></use>}
          </svg>
        </button>
      </div>
    </>
  );
};

export default BestSelling;
