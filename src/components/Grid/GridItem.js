import React, { useState} from 'react';
import Badge from './Badge';
import Explorer from './Explorer';
import styles from './GridItem.module.css';

const GridItem = ({ fact }) => {
    const [clicked, setClicked] = useState(fact.clicked);

    return (
        <div className={styles.card} onClick={() => setClicked(!clicked)}>
            {clicked ? <Badge /> : <Explorer />}
            <h2 className={styles.title}>{fact.title}</h2>
            <article className={styles.fact}>{fact.fact}</article>
        </div>
    );
}

export default GridItem;
