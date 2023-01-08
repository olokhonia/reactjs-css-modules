import React from 'react';
import styles from './Smoke.module.css';
import smokeMovie from './../../assets/videos/smoke.mov';

const Smoke = () => {
    return (
        <div className={styles.smoke}>
            <video className={styles.video} autoPlay loop src={smokeMovie}/>
        </div>
    );
};

export default Smoke;
