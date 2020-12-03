import React from 'react';
import imgs from '../../Assests/Images/Picture1.png'
import styles from './Header.module.css';
const header=()=>{
    return(
        <div className={styles.div} >
            <p  className={styles.h} >C  <img src={imgs} className={styles.img}></img>VID-19</p>
           
        </div>
    )
}
export default header;