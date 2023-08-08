import React, { Component } from 'react'
import styles from './Info.module.scss';


export class Info extends Component {
  render() {
    return (
      <section id={styles.info}>
        <div className="container">
            <div className={styles.info}>
                <div className={styles.info__left}>
                    <h2>Получить подробную <p>информацию</p></h2>
                    <p>Просто заполните форму, наш менеджер свяжется с вами в ближайшее время</p>
                    <div className={styles.info__form}>
                        <div className={styles.person__form}>
                            <input type="text" placeholder='Ваше имя' />
                            <input type="text" placeholder='+375 (29) 0000000' />
                        </div>
                        <div className={styles.form__message}>
                            <textarea placeholder='Комментарий'></textarea>
                        </div>
                    </div>
                    <button>Получить информацию</button>
                </div>
                <div className="info__right"></div>
            </div>
        </div>
      </section>
    )
  }
}

export default Info