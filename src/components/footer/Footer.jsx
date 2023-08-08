import React, { Component } from 'react'
import './Footer.scss';

import Logo from '../../assets/images/logo.svg';
import vk from '../../assets/images/social-media/vk.svg';
import fb from '../../assets/images/social-media/fb.svg';
import ln from '../../assets/images/social-media/linkedin.svg';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer_top">
            <div className="footer_top__left">
              <img src={Logo} alt="" />
            </div>
            <div className="footer_top__right">
              <img src={vk} alt="" />
              <img src={fb} alt="" />
              <img src={ln} alt="" />
            </div>
          </div>
          <div className="footer_middle">
            <div className="footer_middle__left">
              <div className="footer__items">
                <h2>Продукция</h2>
                <a href='#link'>Ламинатные тубы</a >
                <a href='#link'>Экструзионные тубы</a >
                <a href='#link'>Другая упаковка</a >
              </div>
              <div className="footer__items">
                <h2>Компания</h2>
                <a href='#link'>О нас</a >
                <a href='#link'>Наша команда</a >
                <a href='#link'>Сертификаты</a >
              </div>
              <div className="footer__items">
                <h2>Разделы</h2>
                <a href='#link'>Контакты</a >
                <a href='#link'>Новости</a >
                <a href='#link'>Вакансии</a >
              </div>
            </div>
            <div className="footer_middle__right">
              <div className="footer__info">
                <h2>Беларусь</h2>
                <p>+375 (17) 270 53 77</p>
                <p>+375 (17) 270 53 78</p>
              </div>
              <div className="footer__info">
                <h2>Европа</h2>
                <p>+48 73 1111 044</p>
              </div>
              <div className="footer__info">
                <h2>Москва</h2>
                <p>+7 (495) 280 73 44</p>
                <p>+7 (495) 280 73 44</p>
              </div>
              <div className="footer__info">
                <h2>Екатеринбург</h2>
                <p>+7 (343) 346 82 06</p>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <p>© 2022 Leangroup. All Rights Reserved.
              Разработка и продвижение сайтов SkyWeb.by</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer