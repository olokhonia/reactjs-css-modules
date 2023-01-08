import React from 'react';
import Background from '../Background/Background';
import Grid from '../Grid/Grid';
import Rocket from '../Rocket/Rocket';
import Smoke from '../Rocket/Smoke';
import Title from '../Title/Title';
import facts from '../../data/NASA_facts.json';
import styles from './App.module.css';

const App = () => {
    return (
      <div className={styles.App}>
        <Title></Title>
        <Background>
          <Grid facts={facts}></Grid>
          <Rocket />
          <Smoke></Smoke>
        </Background>
      </div>
    );
}

export default App;
