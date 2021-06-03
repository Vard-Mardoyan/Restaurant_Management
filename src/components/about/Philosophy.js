import { PHILOSOPHY_OF_COOKING_DATA } from "../../service/data";
import "./StoryStyle.css";

export default function PhilosophyComponent() {

  return (
    <div>
      {PHILOSOPHY_OF_COOKING_DATA.map(({article, author, image, image_other}) => {

        return (
          <>
            <p className="text">{article}</p>
            <p className="text"><b>Author</b>&nbsp;<i> {author}</i></p>
            <img src={image} alt={author} width="400"/>
            <img src={image_other} alt={author} width="500" />
          </>
        )
      })}
    </div>
  )
}