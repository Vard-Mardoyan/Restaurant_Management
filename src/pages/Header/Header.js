import React, { useState, useEffect } from "react";
import slide1 from "./1.jpg";
import slide2 from "./11.jpg";
import slide3 from "./12.jpg";

import "./Header.css";

const img = [
	<img key={slide1} src={slide1} alt="slide1" />,
	<img key={slide2} src={slide2} alt="slide2" />,
	<img key={slide3} src={slide3} alt="slide3" />,
];
export const Header = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((current) => {
				const res = current === img.length - 1 ? 0 : current + 1;
				return res;
			});
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
	const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

	return (
		<div className="slider">
			<div className="slider-img slider-img-prev" key={prevImgIndex}>
				{img[prevImgIndex]}
			</div>
			<div className="slider-img" key={activeIndex}>
				{img[activeIndex]}
			</div>
			<div className="slider-img slider-img-next" key={nextImgIndex}>
				{img[nextImgIndex]}
			</div>
		</div>
	);
};