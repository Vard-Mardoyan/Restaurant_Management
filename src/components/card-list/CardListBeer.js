import CardBeerComponent from "../card/CardBeer";
import './CardListStyle.css';

export default function CardListBeer({onItemClick, items}) {

  
  return (
    <div>
      <ul className="list">
      {items.map(({ id, name, description, image_url, volume}) => {
        return (
          <div key={id}>
            <CardBeerComponent {...{id, name, description, image_url, volume}} onItemClick={onItemClick}/>
          </div>
        );
      })}
      </ul>
    </div>
  );

}