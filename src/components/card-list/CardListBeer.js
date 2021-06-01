import CardBeerComponent from "../card/CardBeer";
import './CardListStyle.css';

export default function CardListBeer({onItemClick, items}) {

  
  return (
    <div>
      <ul className="list">
      {items.map(({ id, name, description, image_url, volume}) => {
        return (
          <>
            <CardBeerComponent {...{id, name, description, image_url, volume}} onItemClick={onItemClick}/>
          </>
        );
      })}
      </ul>
    </div>
  );

}