import React from 'react'
import GridItem from './GridItem';
import classNames from "classnames";
import styles from './Grid.module.css';
import mediaStyles from './Media.module.css';

const Grid = ({ facts }) => {
    return (
        <section className={classNames(styles.grid, mediaStyles.grid)}>
            {facts.map(fact => <GridItem key={fact.id} fact={fact} />)}
        </section>
    );
};

export default Grid;
