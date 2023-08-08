import React, { Component } from 'react'
import './Header.scss';

import hamburger from '../../assets/images/hamburger.svg';

import Logo from '../../assets/images/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
            <div className="navbar container">
                <div className="nav-left">
                    <img src={Logo} alt="" />
                </div>
                <div className="nav-middle">
                    <a href="#products">Продукция</a>
                    <a href="#certificates">Сертификаты</a>
                    <a href="#ourTeam">Наша команда</a>
                    <a href="#aboutUs">О нас</a>
                    <a href="#news">Новости</a>
                    <a href="#vacancy">Вакансии</a>
                    <a href="#contacts" className='contacts'>Контакты</a>
                </div>
                <div className="nav-right">
                    <button><img src={hamburger} alt="" /></button>
                    <div><p>RU</p></div>
                    <div><p>EN</p></div>
                </div>
            </div>
        </nav>
      </header>
    )
  }
}
