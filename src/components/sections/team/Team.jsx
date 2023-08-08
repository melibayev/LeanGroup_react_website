import React, { Component } from 'react'
import TeamCard from './TeamCard'
import styles from './Team.module.scss';

import employee1 from '../../../assets/images/team/Mask group.png';
import employee2 from '../../../assets/images/team/Mask group (1).png';
import employee3 from '../../../assets/images/team/Mask group (2).png';
import employee4 from '../../../assets/images/team/Mask group (3).png';
import employee5 from '../../../assets/images/team/Mask group (4).png';

export class Team extends Component {
  render() {
    return (
      <section id={styles.team}>
        <div className="container">
            <div className={styles.team__title}>
                <h2>Наша <p>команда</p></h2>
            </div>
            <div className={styles.team}>
                <TeamCard img={employee1} name={'Войнич Дарья'} position={'Заместитель директора по продажам'} phoneNumber={'+375 (17) 270-53-77 (317)'}/>
                <TeamCard img={employee2} name={'Мисько Екатерина'} position={'Начальник отдела сопровождения'} phoneNumber={`+375 (17) 270-53-77 (115)`}/>
                <TeamCard img={employee3} name={'Дмитроченко Дмитрий'} position={'Начальник отдела допечатной подготовки'} phoneNumber={`+375 (17) 270-53-77 (333)`}/>
                <TeamCard img={employee4} name={'Антух Евгений'} position={'Начальник отдела снабжения'} phoneNumber={`+375 (17) 270-53-77 (148)`}/>
                <TeamCard img={employee5} name={'Мисник Елена'} position={'Специалист по работе с клиентами'} phoneNumber={`+375 (17) 270-53-77 (322)`}/>
            </div>
        </div>
      </section>
    )
  }
}

export default Team