import React from 'react';
import styles from './Rocket.module.css';
import rocketImage from './../../assets/images/shuttle.png';

const Rocket = () => {
    return (
         <div>
            <img src={rocketImage} alt="shuttle" className={styles.img}/>
        </div>
    );
};

export default Rocket;
