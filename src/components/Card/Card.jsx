import React from 'react';
import './Card.scss';
import filler from '../../img/filler.png';
import hot from '../../img/hot.svg';
const Card = (props) => {
  let isHave = props.isHave;

  return (
    <div className="card">
      <div className="card__imgbox">
        <div className="card__subcategory">
          Хиты продаж <img className="card__subcategory_icon" src={hot} />
        </div>
        <img className={isHave? 'card__img': 'card__img una'}src={filler} alt="" />
        <div className="card__discount-vobler">25%</div>
      </div>

      <p className="card__subtitle">Бренд</p>
      <p className="card__title">
        Полное название товара в несколько строк для вида с обрывом в конце Полное название товара в
        несколькdsadasdasо строк для вида с обрывом в конце...
      </p>
      <div className="card__price">
        <span className="card__price_actual">5 990 ₽</span>
        <span className="card__price_discounted">5 990 ₽</span>
      </div>
      {isHave ? (
        <button className="card__purchase">Купить</button>
      ) : (
        <button className="card__unavailible">Сообщить о поступлении</button>
      )}
    </div>
  );
};

export default Card;
