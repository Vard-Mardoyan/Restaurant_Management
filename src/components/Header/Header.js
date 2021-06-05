import React, { useState, useEffect } from "react";
import slide2 from "../../assets/image-header/70.jpg";
import slide3 from "../../assets/image-header/58.jpg";
import slide4 from "../../assets/image-header/59.jpg";
import slide5 from "../../assets/image-header/60.jpg";
import slide6 from "../../assets/image-header/61.jpg";
import slide7 from "../../assets/image-header/62.jpg";
import slide8 from "../../assets/image-header/63.jpg";
import slide9 from "../../assets/image-header/64.jpg";
import slide1 from "../../assets/image-header/65.jpg";
import slide10 from "../../assets/image-header/50.jpg";
import slide11 from "../../assets/image-header/51.jpg";
import slide12 from "../../assets/image-header/52.jpg";
import slide13 from "../../assets/image-header/53.jpg";
import slide14 from "../../assets/image-header/54.jpg";
import slide15 from "../../assets/image-header/55.jpg";
import slide16 from "../../assets/image-header/6.jpg";
import slide17 from "../video/testvideo.mp4";

import "./Header.css";

const img = [
	// <img key={slide1} src={slide1} alt="slide2" />,
	// <img key={slide2} src={slide2} alt="slide2" />,
	// <img key={slide3} src={slide3} alt="slide3" />,
	// <img key={slide4} src={slide4} alt="slide3" />,
	// <img key={slide5} src={slide5} alt="slide3" />,
	// <img key={slide6} src={slide6} alt="slide3" />,
	// <img key={slide7} src={slide7} alt="slide3" />,
	// <img key={slide8} src={slide8} alt="slide3" />,
	// <img key={slide9} src={slide9} alt="slide3" />,
	// <img key={slide10} src={slide10} alt="slide3" />,
	// <img key={slide11} src={slide11} alt="slide3" />,
	// <img key={slide12} src={slide12} alt="slide3" />,
	// <img key={slide13} src={slide13} alt="slide3" />,
	// <img key={slide14} src={slide14} alt="slide3" />,
	// <img key={slide15} src={slide15} alt="slide3" />,
	// <img key={slide16} src={slide16} alt="slide3" />,

	// <img key={slide18} src={slide18} alt="slide3" />,
	// <img key={slide19} src={slide19} alt="slide3" />,
	// <img key={slide20} src={slide20} alt="slide3" />,
	// <img key={slide21} src={slide21} alt="slide3" />,
];
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
				{img[prevImgIndex]}
			</div>
			<div className="slider-img" key={activeIndex}>
				{img[activeIndex]}
			</div>
			<div className="slider-img slider-img-next" key={nextImgIndex}>
				{img[nextImgIndex]} */}
			{/* </div> */}
			<video autoPlay loop muted 
			style={{
				position:'absolute',
			width:'100%',
		height:'600px',
		objectFit:'cover',
	}}>
		<source key={slide17} src={slide17} type="video/mp4" />
	</video>,
		</div>
	);
};
