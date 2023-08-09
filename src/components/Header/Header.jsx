import React, { Component } from 'react';
import search from '../../img/search.svg';
import logo from '../../img/logo.svg';
import './Header.scss';
const Header =()=> {
  
    return (
      <header className="header">
        <div className="header__logo__container">
          <img className="header__logo" src={logo} />
          <h4 className='header__logo__title'>Логотип</h4>
        </div>

        <div className="header__dropdown">Каталог</div>
        <div className="header__searchbar">
          <span class="icon">
            <img src={search} />
          </span>
          <input type="search" id="search" placeholder="Поиск по 100 000 товаров" />
        </div>
        <nav className="header__nav">
          <p className="header__nav__link">Информация о компании</p>
          <p className="header__nav__link">Контакты</p>
          <p className="header__nav__link">Полезные ссылки</p>
        </nav>
      </header>
    );
  
}

export default Header;
