import { PHILOSOPHY_OF_COOKING_DATA } from "../../service/data";
import "./StoryStyle.css";

export default function PhilosophyComponent() {
 const  title = 'The philosophy of cooking';

  return (
    <div>
      {PHILOSOPHY_OF_COOKING_DATA.map(({article, author, image, image_other}) => {

        return (
          <div className="container">
            <div className="text">
              <h3 className="title"> {`${title.toUpperCase()}`} </h3>
              <p>{article}</p>
              <p><b>Author</b>&nbsp;<i> {author}</i></p>
            </div>
            <div className="image-card">
              <img src={image} alt={author} width="480"/>
            </div>
            <div className="image-card">
            <img src={image_other} alt={author} width="480"/>
            </div>
          </div>
        )
      })}
    </div>
  )
}


