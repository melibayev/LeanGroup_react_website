import React, { Component } from 'react'
import './Card.scss';

export class Card extends Component {
  render() {
    return (
      <div className='card'>
        <img src={this.props.img} alt="card img" />
      </div>
    )
  }
}

export default Card