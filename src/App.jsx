import styles from './styles/Home.module.css';
// import { useState, useContext } from 'react';
import { ContextResultadosProvider } from './contexts/SearchContext';
import { Search } from './components/Search';
import { Card } from './components/Card';

export function App() {




    return (
      <ContextResultadosProvider>
        <div className={styles.container}>
          <Search />
          
          <Card />

        </div>
      </ContextResultadosProvider>
    )
  }