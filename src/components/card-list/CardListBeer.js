import CardBeerComponent from "../card/CardBeer";
import './CardListStyle.css';

export default function CardListBeer({onItemClick, items}) {

  
  return (
    <div>
      <ul className="list">
      {items.map(({ id, name, description, image_url, volume, price}) => {
        return (
          <div key={id}>
            <CardBeerComponent {...{id, name, description, image_url, volume, price}} onItemClick={onItemClick}/>
          </div>
        );
      })}
      </ul>
    </div>
  );

}