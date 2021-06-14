import React, { useState, useEffect } from "react";
import "./RandomizedImages.css";
import { FiArrowLeft, FiArrowRight} from "react-icons/fi";
import { RANDOM_FOOD } from "../../service/random-food";

import formatCurrency from "format-currency";


export const RandomizedImages = () => {
  const [data, setData] = useState(RANDOM_FOOD);
  const [activeIndex, setActiveIndex] = useState(0);
	const [date, setDate] = useState(new Date());

  useEffect(() => {
    setData(data);
  }, [data]);

	useEffect(() => {
		setDate(date);
	}, [])

  const nextSlide = () => {
    setActiveIndex((prevIndex) => {
      let activeIndex = prevIndex + 1;
      if (activeIndex > data.length - 1) {
        activeIndex = 0;
      }
      return activeIndex;
    });
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) => {
      let activeIndex = prevIndex - 1;
      if (activeIndex < 0) {
        activeIndex = data.length - 1;
      }
      return activeIndex;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setActiveIndex((prevIndex) => {
        let activeIndex = prevIndex + 1;
        if (activeIndex > data.length - 1) {
          activeIndex = 0;
        }
        return activeIndex;
      });
    }, 7000);
    return () => {
      clearInterval(slider);
    };
  }, []);

  const slicedData = [];
  for (let i = 0; i < 3; i++) {
    let index = Math.floor(Math.random() * data.length);
    slicedData.push(data[index]);
    data.slice(index, 1);
  }
  //console.log(slicedData, "slicedta:::");


  const renderData = slicedData.map(
    ({ id, name, image, kitchen, price }, index) => {
			let opts = { format: "%s%v", symbol: "$" };

      let position = "nextSlide";
      if (index === activeIndex) {
        position = "activeSlide";
      }
      if (
        index === activeIndex - 1 ||
        (activeIndex === 0 && index === slicedData.length - 1)
      ) {
        position = "lastSlide";
      }

      console.log(slicedData, "slicedta:::");

      return (
				<>
					<div className={position} key={id}>
          <img src={image} alt={name} className="data-img" />
          <h4>{name}</h4>
          <p className="title">{kitchen}</p>
          <p className="text">{formatCurrency(`${price}`, opts)}</p>
        </div>
				</>
      );
    }
  );

  return (
    <div className="container">
      <section className="section">
				<h2 className="title">Today's Dishes && Drinks</h2>
				<h3 className="title">{date.toLocaleTimeString()}</h3>
        <div className="section-center">
          {renderData}
          <button className="prev" onClick={prevSlide}>
            <FiArrowLeft />
          </button>
          <button className="next" onClick={nextSlide}>
            <FiArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};
