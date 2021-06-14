import { useEffect, useState } from "react";
import { RandomComponent } from "../../components/RandomizedImages/Random";
import {
  DRINKS_DATA_FROM_LOCAL_STORAGE,
  FOODS_DATA_FROM_LOCAL_STORAGE,
  SWEETS_DATA_FROM_LOCAL_STORAGE,
} from "../../helper/local-storage";
import Story from "../../components/about/Story";
import "./HomeStyle.css";

export default function Home() {
  const title = "Welcome our restaurant";
  const [sweetData, setSweetData] = useState(SWEETS_DATA_FROM_LOCAL_STORAGE);
  const [foodData, setFoodData] = useState(FOODS_DATA_FROM_LOCAL_STORAGE);
  const [drinkData, setDrinkData] = useState(DRINKS_DATA_FROM_LOCAL_STORAGE);
  const [activeIndex, setActiveIndex] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        let activeIndex = prevIndex + 1;
        if (
          activeIndex > sweetData.length - 1 ||
          activeIndex > foodData.length - 1 ||
          activeIndex > drinkData.length - 1
        ) {
          activeIndex = 0;
        }
        return activeIndex;
      });
    }, 7000);
    setSweetData(sweetData);
    setFoodData(foodData);
    setDrinkData(drinkData);
    return () => {
      clearInterval(interval);
    };
  }, [sweetData, foodData, drinkData, activeIndex]);

  useEffect(() => {
    setDate(date);
  }, [date]);

  return (
    <div className="home-wrapper">
      <div className="text-container">
        <h2 className="app-title">{`${title.toUpperCase()}`}</h2>
      </div>
      <div className="title-container">
        <h3 className="title">Daily Dishes && Drinks</h3>
        <h3 className="date">&nbsp;{date.toLocaleTimeString()}</h3>
      </div>
      <div className="home-conatainer">
        <div className="component-card">
          <RandomComponent data={sweetData} />
          <RandomComponent data={foodData} />
          <RandomComponent data={drinkData} />
        </div>
      </div>
      <Story />
    </div>
  );
}

// <div className="home-conatainer">
// <div className="text-container">
//   <h2 className="app-title">{`${title.toUpperCase()}`}</h2>
// </div>
// {/* <div className="title-container">
//   <h3 className="title">Daily Dishes && Drinks</h3>
//   <h3 className="date">&nbsp;{date.toLocaleTimeString()}</h3>
// </div>; */}
