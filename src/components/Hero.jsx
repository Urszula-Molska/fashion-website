import image from "../assets/pexels-dima-valkov.png";
import sprite from "../assets/sprite.svg";
const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap tab:flex-col tab: items-center justify-center 2xl:flex-nowrap pb-[80px] 2xl:pb-[166px] mx-auto 2xl:w-[1377px] w-full">
        <div className="flex flex-col tab:relative mob:place-items-center mob:w-full">
          <div className="w-full h-auto tab&2xl:w-[649px] mb-[27px] tab&2xl:mb-[27px] mob:whitespace-normal mob:max-w-[340px] mob:px-5">
            <h1 className="text-green800 font-rufina text-[46px] tab&2xl:text-[86px] font-bold leading-tight ">
              Discover and Find Your Own Fashion!
            </h1>
          </div>
          <div className="tab&2xl:w-[565px] mob:max-w-[340px] mob:px-5">
            <p className="text-green600 font-poppins font-medium text-[20px] tab&2xl:text-2xl leading-[220%] tab:mb-10">
              Explore our curated collection of stylish clothing and accessories
              tailored to your unique taste.
            </p>
          </div>
          <button
            className=" mob:px-6 py-3 mob:mb-5 mob:text-[18px] tab:absolute tab:z-20 tab:top-[500px] tab:left-[-30px]  cursor-pointer mt-[30px] tab&2xl:mt-[54px] blockfont-poppins text-[20px]
             text-white font-medium text-center tab&2xl:w-[258px] tab&2xl:h-[74px] bg-green800 rounded-[3px] 
            drop-shadow-buttonShadow"
          >
            EXPLORE NOW
          </button>
        </div>
        <div
          className=" relative  tab&2xl:w-[570px]  tab&2xl:h-[717px] shrink-0 bg-green400 rounded-tl-[141px] rounded-tr-[45px] rounded-bl-[82px] 
        rounded-br-[150px] 2xl:ml-[160px] mob:max-w-[570px] w-full"
        >
          <img
            src={image}
            alt="lady in a green jacket"
            className=" shrink-0 tab&2xl:w-[570px] tab&2xl:h-[717px] mob:max-w-full "
          ></img>
          <div
            className="absolute right-0 top-[155px] z-10 w-1/5 h-auto max-h-[110px] max-w-[119px]"
            style={{ right: "3%", top: "22%" }}
          >
            <svg className="w-full ">
              <use href={`${sprite}#icon-dots`}></use>
            </svg>
          </div>
          <div
            className="absolute  z-10 w-1/5 h-auto mob:max-w-full max-h-[110px] max-w-[119px]"
            style={{ left: "4%", bottom: "12%" }}
          >
            <svg className="w-full">
              <use href={`${sprite}#icon-dots`}></use>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
