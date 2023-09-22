import image from "../assets/pexels-dima-valkov.png";
import sprite from "../assets/sprite.svg";

const Hero = () => {
  return (
    <>
      <div className="flex pb-[166px] mx-auto 2xl:w-[1377px] w-full">
        <div className="flex flex-col">
          <div className="w-[649px] mb-[27px]">
            <h1 className="text-green800 font-rufina text-[86px] font-bold leading-tight">
              Discover and Find Your Own Fashion!
            </h1>
          </div>
          <div className="w-[565px] ">
            <p className="text-green600 font-poppins font-medium text-2xl leading-[220%]">
              Explore our curated collection of stylish clothing and accessories
              tailored to your unique taste.
            </p>
          </div>
          <button
            className=" mt-[54px] blockfont-poppins text-[20px] text-white font-medium text-center w-[258px] h-[74px] bg-green800 rounded-[3px] drop-shadow-buttonShadow;
 "
          >
            EXPLORE NOW
          </button>
        </div>
        <div
          className="relative w-[570px] h-[717px] shrink-0 bg-green400 rounded-tl-[141px] rounded-tr-[45px] rounded-bl-[82px] 
        rounded-br-[150px] ml-[160px]"
        >
          <img
            src={image}
            alt="lady in a green jacket"
            className=" shrink-0 w-[570px] h-[717px]"
          ></img>
          <div className="absolute right-3 top-[155px] z-10">
            <svg className="h-[110px] w-[119px]">
              <use href={`${sprite}#icon-dots`}></use>
            </svg>
          </div>
          <div className="absolute left-6 bottom-[83px] z-10">
            <svg className=" h-[110px] w-[119px]">
              <use href={`${sprite}#icon-dots`}></use>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
