import { useState } from "react";
import { STORY_DATA } from "../../service/data";
import "./StoryStyle.css";

export default function Story() {
  const [showLess, setShowLess] = useState(true);
  let maxLength = 220;

  //console.log(STORY_DATA[0].text, "text:::");

  if (STORY_DATA[0].text.length <= maxLength) {
    return <p className='text'>{STORY_DATA[0].text} </p>;
  }

  const handleOnClick = (event) => {
    event.preventDefault();
    setShowLess(!showLess);
  };

  return (
    <div>
      {STORY_DATA.map(({ image, image_main, text }) => {
        return (
          <>
            <p className='text'>
              {showLess ? `${text.substring(0, maxLength)}...` : text}
              <a href="#" onClick={(event) => handleOnClick(event)}>
                {showLess ? "more" : "less"}
              </a>
            </p>
            <img src={image_main} alt="MainImage" width="450" className="main-photo" />
            <img src={image} alt="Story" width="320" className="photo-second"/>

          </>
        );
      })}
    </div>
  );
}
