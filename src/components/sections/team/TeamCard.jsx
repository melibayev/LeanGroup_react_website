import React, { Component } from 'react'
import styles from './Team.module.scss';


export class TeamCard extends Component {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.card__img}>
            <img src={this.props.img} alt="" />
        </div>
        <div className={styles.card__info}>
            <h4>{this.props.name}</h4>
            <h5>{this.props.position}</h5>
            <p>{this.props.phoneNumber}</p>
        </div>
      </div>
    )
  }
}

export default TeamCard