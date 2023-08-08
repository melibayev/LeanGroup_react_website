import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import styles from './Products.module.scss';

import img1 from '../../../assets/images/products/1.png';
import img2 from '../../../assets/images/products/2.png';
import img3 from '../../../assets/images/products/3.png';
import img4 from '../../../assets/images/products/4.png';
import img5 from '../../../assets/images/products/5.png';

export class Products extends Component {
  render() {
    return (
      <section id='products'>
        <div className="container">
            <div className={styles.products__title}>
                <h2>Наша <p>продукция</p></h2>
            </div>
            <div className="products">
                <Tabs>
                    <TabList className={styles.tab}>
                        <Tab><button>Ламинатные тубы</button></Tab>
                        <Tab><button>Экструзионные тубы</button></Tab>
                        <Tab><button>Другая упаковка</button></Tab>
                    </TabList>

                    <TabPanel className={styles.tab_panel}>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                    </TabPanel>
                    <TabPanel className={styles.tab_panel}>
                        <img src={img5} alt="" />   
                        <img src={img4} alt="" />
                        <img src={img3} alt="" />
                        <img src={img2} alt="" />
                        <img src={img1} alt="" />
                    </TabPanel>
                    <TabPanel className={styles.tab_panel}>
                        <img src={img3} alt="" />   
                        <img src={img2} alt="" />
                        <img src={img5} alt="" />
                        <img src={img1} alt="" />
                        <img src={img4} alt="" />
                    </TabPanel>
                </Tabs>
            </div>
            <div className={styles.products__btn}>
                <button>Перейти в каталог</button>
            </div>
        </div>
      </section>
    )
  }
}

export default Products