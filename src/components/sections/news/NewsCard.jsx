import React, { Component } from 'react'
import styles from './News.module.scss';

export class NewsCard extends Component {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.card__img}>
            <img src={this.props.img} alt="" />
        </div>
        <div className={styles.card__info}>
            <p>{this.props.date}</p>
            <h3>{this.props.desc}</h3>
        </div>
      </div>
    )
  }
}

export default NewsCard