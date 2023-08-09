import React, { Component } from 'react';
import './Sidebar.scss';
import searchgrey from '../../img/search-grey.svg';
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="category">
        <h3 className="list__heading">Название категории</h3>
        <div className="list">
          <div className="list__item">
            Название категории <span className="list__item__counter list__item__counter_npad">3</span>
          </div>
          <div className="list__item">
            Название категории<span className="list__item__counter list__item__counter_npad">3</span>
          </div>
          <div className="list__item">
            Название категории<span className="list__item__counter list__item__counter_npad">3</span>
          </div>
        </div>
      </div>

      <div className="price-range">
        <h3 className="title_centered">Цена</h3>
        <div className="inputs">
          <input className="input__small" type="number" placeholder="от 5500" name="" id="" />

          <span className="input__range">–</span>

          <input className="input__small" type="number" placeholder="от 5500" name="" id="" />
        </div>
      </div>
      <div className="brand">
        <div className="title__container">
          <h3 className="title">Бренд</h3>
          <button className="btn_clear">Очистить</button>
        </div>

        <div className="sidebar__searchbar">
          <span class="icon">
            <img src={searchgrey} />
          </span>
          <input type="search" id="search" placeholder="Поиск " />
        </div>
        <div className="search-res">
          {/*Потенциальный компонент чекбокс*/}
          <div className="checkbox__item">
            <div>
              <input className="custom-checkbox" type="checkbox" name="" id="atr" />{' '}
              <label for="atr">Атрибут</label>
            </div>
            <span className="list__item__counter">3</span>
          </div>
          <div className="checkbox__item">
            <div>
              <input className="custom-checkbox" type="checkbox" name="" id="atr" />{' '}
              <label for="atr">Атрибут</label>
            </div>
            <span className="list__item__counter">3</span>
          </div>
          <div className="checkbox__item">
            <div>
              <input className="custom-checkbox" type="checkbox" name="" id="atr" />{' '}
              <label for="atr">Атрибут</label>
            </div>
            <span className="list__item__counter">3</span>
          </div>
          <div className="checkbox__item">
            <div>
              <input className="custom-checkbox" type="checkbox" name="" id="atr" />{' '}
              <label for="atr">Атрибут</label>
            </div>
            <span className="list__item__counter">3</span>
          </div>
          <div className="checkbox__item">
            <div>
              <input className="custom-checkbox" type="checkbox" name="" id="atr" />{' '}
              <label for="atr">Атрибут</label>
            </div>
            <span className="list__item__counter">3</span>
          </div>
          <div className="checkbox__item">
            <div>
              <input className="custom-checkbox" type="checkbox" name="" id="atr" />{' '}
              <label for="atr">Атрибут</label>
            </div>
            <span className="list__item__counter">3</span>
          </div>
          <div className="checkbox__item">
            <div>
              <input className="custom-checkbox" type="checkbox" name="" id="atr" />{' '}
              <label for="atr">Атрибут</label>
            </div>
            <span className="list__item__counter">3</span>
          </div>
          <div className="checkbox__item">
            <div>
              <input className="custom-checkbox" type="checkbox" name="" id="atr" />{' '}
              <label for="atr">Атрибут</label>
            </div>
            <span className="list__item__counter">3</span>
          </div>

          {/*Потенциальный компонент чекбокс*/}
          <div className="checkbox__item">
            <div>
              <input className="custom-checkbox" type="checkbox" name="" id="atr" />{' '}
              <label for="atr">Атрибут</label>
            </div>
            <span className="list__item__counter">3</span>
          </div>
          {/*Потенциальный компонент чекбокс*/}
          <div className="checkbox__item">
            <div>
              <input className="custom-checkbox" type="checkbox" name="" id="atr" />{' '}
              <label for="atr">Атрибут</label>
            </div>
            <span className="list__item__counter">3</span>
          </div>
          {/*Потенциальный компонент чекбокс*/}
          <div className="checkbox__item">
            <div>
              <input className="custom-checkbox" type="checkbox" name="" id="atr" />{' '}
              <label for="atr">Атрибут</label>
            </div>
            <span className="list__item__counter">3</span>
          </div>
        </div>
      </div>
      <div className="size">
      <h3 className="title_centered">Размер</h3>
      <div className="checkbox__item">
            <div>
              <input className="custom-checkbox" type="checkbox" name="" id="atr" />{' '}
              <label for="atr">Атрибут</label>
            </div>
            <span className="list__item__counter">3</span>
          </div>
          <div className="checkbox__item">
            <div>
              <input className="custom-checkbox" type="checkbox" name="" id="atr" />{' '}
              <label for="atr">Атрибут</label>
            </div>
            <span className="list__item__counter">3</span>
          </div>
          <div className="checkbox__item">
            <div>
              <input className="custom-checkbox" type="checkbox" name="" id="atr" />{' '}
              <label for="atr">Атрибут</label>
            </div>
            <span className="list__item__counter">3</span>
          </div>
      </div>
    </aside>
  );
};

export default Sidebar;
