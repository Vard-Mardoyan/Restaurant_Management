import React, { useState, useEffect } from "react";

import slide17 from "../../assets/video/testvideo8.mp4";

import "./Header.css";

// const img = [
// 	// <img key={slide1} src={slide1} alt="slide2" />,

// ];
export const Header = () => {
	// const [activeIndex, setActiveIndex] = useState(0);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setActiveIndex((current) => {
	// 			const res = current === img.length - 1 ? 0 : current + 1;
	// 			return res;
	// 		});
	// 	}, 5000);

	// 	return () => clearInterval(interval);
	// }, []);

	// const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
	// const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

	return (
		<div className="slider">
			{/* <div className="slider-img slider-img-prev" key={prevImgIndex}>
			{Math.floor(Math.random() * img[prevImgIndex])}	
			////{img[prevImgIndex]}
			</div>
			<div className="slider-img" key={activeIndex}>
				{img[activeIndex]}
			</div>
			<div className="slider-img slider-img-next" key={nextImgIndex}>
				{img[nextImgIndex]} */}
			{/* </div> */}
			<video
				autoPlay
				loop
				muted
				style={{
					position: "absolute",
					width: "100%",
					height: "355px",
					objectFit: "cover",
				}}
			>
				<source key={slide17} src={slide17} type="video/mp4" />
			</video>
			,
		</div>
	);
};
