import React, { Component } from 'react'
import NewsCard from './NewsCard';

import styles from './News.module.scss';
import img1 from '../../../assets/images/news/img.png'
import img2 from '../../../assets/images/news/img2.png'
import img3 from '../../../assets/images/news/img3.png'

export class News extends Component {
  render() {
    return (
      <section id={styles.news}>
        <div className="container">
            <div className={styles.news__title}>
                <h2>Новости</h2>
            </div>
            <div className={styles.news}>
                <NewsCard img={img1} date={'28.01.2022'} desc={'"ЛеанГрупп" серебряный призер EcoVadis!'}/>
                <NewsCard img={img2} date={'21.01.2022'} desc={'"ЛеанГрупп" серебряный призер EcoVadis!'}/>
                <NewsCard img={img3} date={'16.12.2021'} desc={'Туба, как вид упаковки'}/>
            </div>
            <div className={styles.news__btn}>
                <button>Все новости</button>
            </div>
        </div>
      </section>
    )
  }
}

export default News