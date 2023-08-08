import React, { Component } from 'react'
import Slider from 'react-slick';
import { certificates } from './Certificates';
import Card from './Card';

import styles from './CertificatesSection.module.scss';

export class CertificatesSection extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 455,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
              }
            }
          ]
    };
    return (
      <section id={styles.cer}>
        <div className="container">
            <div className={styles.cer__title}>
                <h2>Качество продукции подтверждают <p>сертификаты</p></h2>
            </div>
            <div className="cer">
            <div className={styles.carousel}>
                <Slider {...settings}>
                {certificates.map((certificate, index) => <Card {...certificate} key={index}/>)}
                </Slider>
            </div>
            </div>
        </div>
      </section>
    )
  }
}

export default CertificatesSection