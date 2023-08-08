import React, { Component } from 'react'
import styles from './HomeSection.module.scss';

export class HomeSection extends Component {
  render() {
    return (
      <section id={styles.home}>
        <div className="container">
            <div className={styles.home}>
                <div className="home__left">
                    <h4>LEANGROUP - тубы и этикетки</h4>
                    <h3>Ламинатные тубы</h3>
                    <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
                    <button>Каталог</button>
                </div>
                <div className="home__right"></div>
            </div>
        </div>
      </section>
    )
  }
}

export default HomeSection