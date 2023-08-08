import React, { Component } from 'react'
import styles from './AboutSection.module.scss';

export class AboutSection extends Component {
  render() {
    return (
      <section id={styles.about}>
        <div className="container">
            <div className={styles.about__title}>
                <h2>О компании <p>LEANGROUP</p></h2>
            </div>
            <div className={styles.about}>
                <div className={styles.about__left}>
                    <iframe src="https://www.youtube.com/embed/coOqJomD36k?autoplay=1&mute=1&controls=0"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className={styles.about__right}>
                    <p>Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.</p>
                    <p>Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.</p>
                    <p>С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы. </p>
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default AboutSection