import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from '../components/Loader/Loader.jsx';
import sprite from '../assets/sprite.svg';
import axios from 'axios';

const BestSelling = () => {
	const [pictures, setPictures] = useState([]);
	const [limit, setLimit] = useState(3);
	const [isLoading, setLoading] = useState(false);

	const fetchPictures = async limit => {
		const URL = `https://fakestoreapi.com/products?limit=${limit}`;
		try {
			if (limit < 21) {
				setLoading(true);
				const response = await axios.get(`${URL}`);
				setPictures(response.data);
				setLoading(false);
			} else {
				Notify.info('There are no more records to display!');
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
			<div className="flex w-full flex-col items-center justify-center bg-white px-[10px]  pb-[99px] pt-20 2xl:pt-[114px] ">
				<h2 className="text-center font-roboto_slab text-[36px] font-medium text-green800 tab&2xl:text-[64px]">
					Best selling
				</h2>
				<p className="pb-10 pt-[37px] text-center font-poppins text-[22px] font-medium text-green800 2xl:pb-20">
					Get in on the trend with our curated selection of best-selling styles.
				</p>
				<ul className="mb-20 flex flex-wrap justify-center gap-[43px]">
					{pictures.map(picture => (
						<li
							key={picture.id}
							className="flex w-full max-w-[430px] flex-col items-center"
						>
							<div className="mb-3 w-full tab&2xl:mb-[51px] tab&2xl:h-[566px] tab&2xl:w-[430px]">
								{isLoading === true ? (
									<Loader />
								) : (
									<img
										className="block w-full bg-white object-contain tab&2xl:h-[566px] tab&2xl:w-[430px]"
										src={picture.image}
										alt={picture.title}
									></img>
								)}
							</div>
							<p className="mb-2 w-[303px] text-center font-poppins text-[22px] font-semibold text-gray400">
								{picture.title}
							</p>
							<div className="flex items-center justify-center font-poppins text-[22px] font-medium text-gray200  ">
								<p className="mr-[39px]">${picture.price}</p>
								<div className="mr-[48px] h-[27px] border-[1px] text-[22px] font-medium text-gray200"></div>
								<p className="mr-[9px]">{picture.rating.rate}</p>
								<svg className="h-6 w-6">
									<use href={`${sprite}#icon-star`}></use>
								</svg>
							</div>
						</li>
					))}
				</ul>

				{limit < 21 && (
					<button
						id="fetch"
						onClick={() => setLimit(limit + 6)}
						className="relative flex h-[65px] w-[224px] items-center rounded-[3px] border-[2px] border-green800 pl-[55px] font-poppins text-[22px] font-medium text-green800"
					>
						See all
						<svg className="absolute right-[55px] top-[20px] z-10 h-[23px] w-[23px] animate-pulse fill-green800">
							{<use href={`${sprite}#icon-arrow-right`}></use>}
						</svg>
					</button>
				)}
			</div>
		</>
	);
};

export default BestSelling;
