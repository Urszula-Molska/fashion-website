import image from '../assets/pexels-dima-valkov.png';
import sprite from '../assets/sprite.svg';
const Hero = () => {
	return (
		<>
			<div className="tab: mx-auto flex w-full flex-wrap items-center justify-center pb-[80px] 2xl:w-[1377px] 2xl:flex-nowrap 2xl:pb-[166px] tab:flex-col">
				<div className="flex flex-col tab:relative mob:w-full mob:place-items-center">
					<div className="mb-[27px] h-auto w-full tab&2xl:mb-[27px] tab&2xl:w-[649px] mob:max-w-[340px] mob:whitespace-normal mob:px-5">
						<h1 className="font-rufina text-[46px] font-bold leading-tight text-green800 tab&2xl:text-[86px] ">
							Discover and Find Your Own Fashion!
						</h1>
					</div>
					<div className="tab&2xl:w-[565px] mob:max-w-[340px] mob:px-5">
						<p className="font-poppins text-[20px] font-medium leading-[220%] text-green600 tab&2xl:text-2xl tab:mb-10">
							Explore our curated collection of stylish clothing and accessories
							tailored to your unique taste.
						</p>
					</div>
					<button
						className="blockfont-poppins mt-[30px] cursor-pointer rounded-[3px] bg-green800 py-3 text-center text-[20px]  font-medium text-white drop-shadow-buttonShadow tab&2xl:mt-[54px] tab&2xl:h-[74px]
             tab&2xl:w-[258px] tab:absolute tab:left-[-30px] tab:top-[500px] tab:z-20 mob:mb-5 mob:px-6 
            mob:text-[18px]"
					>
						EXPLORE NOW
					</button>
				</div>
				<div
					className="relative w-full shrink-0 rounded-bl-[82px] rounded-br-[150px] rounded-tl-[141px] rounded-tr-[45px] 
        bg-green400 2xl:ml-[160px] tab&2xl:h-[717px] tab&2xl:w-[570px] mob:max-w-[570px]"
				>
					<img
						src={image}
						alt="lady in a green jacket"
						className="shrink-0 tab&2xl:h-[717px] tab&2xl:w-[570px] mob:max-w-full "
					></img>
					<div
						className="absolute right-0 top-[155px] z-10 h-auto max-h-[110px] w-1/5 max-w-[119px]"
						style={{ right: '3%', top: '22%' }}
					>
						<svg className="w-full ">
							<use href={`${sprite}#icon-dots`}></use>
						</svg>
					</div>
					<div
						className="absolute z-10 h-auto max-h-[110px] w-1/5 max-w-[119px] mob:max-w-full"
						style={{ left: '4%', bottom: '12%' }}
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
