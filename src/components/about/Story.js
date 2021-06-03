import { useState } from "react";
import { STORY_DATA } from "../../service/data";
import "./StoryStyle.css";

export default function Story() {
  const [showLess, setShowLess] = useState(true);
  let maxLength = 220;
  const title = "Our story";

  //console.log(STORY_DATA[0].text, "text:::");

  if (STORY_DATA[0].text.length <= maxLength) {
    return <p className="text">{STORY_DATA[0].text} </p>;
  }

  const handleOnClick = (event) => {
    event.preventDefault();
    setShowLess(!showLess);
  };

  return (
    <div>
      {STORY_DATA.map(({ image, image_main, text }) => {
        return (
          <div className="container">
            <div className="text">
              <h3 className="title">{`${title.toUpperCase()}`}</h3>
              <p>
                {showLess ? `${text.substring(0, maxLength)}...` : text}
                <a href="#" onClick={(event) => handleOnClick(event)}>
                  {showLess ? "more" : "less"}
                </a>
              </p>
            </div>
            <div className="image-card">
              <img 
                src={image_main} 
                alt="MainImage" 
                className="main-photo"
              />
            </div>
            <div className="image-card">
              <img 
                src={image} 
                alt="Story" 
                className="photo-second" 
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
