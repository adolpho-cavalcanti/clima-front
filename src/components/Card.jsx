import { useContext } from "react";
import { SearchContext } from '../contexts/SearchContext';

import styles from '../styles/Home.module.css';

import { Topo } from './Topo';

export function Card() {

    const { resultados, isFahrenheit, isInch } = useContext(SearchContext);

      return (
        <>
          <Topo />
        
          {resultados.map(item => item.weather.map(we => (
            <div className={styles.card} key={we.date} >
              <div className={styles.cardRowOne}>
                <p><strong>{new Date(we.date).toLocaleDateString()}</strong></p>
                <p>{we.text}</p>
              </div>
              <div className={styles.cardRowTwo}>
                <div className={styles.cardColumnOne}>
                  <div className={styles.cardColumnOneRowOne}>
                    <img alt="" src="/icons/upload.png" />
                    {isFahrenheit === false 
                      ? 
                        <span className={styles.grau}>
                          {we.temperature.max}°C
                        </span>
                      : 
                        <span className={styles.grau}>
                          {((we.temperature.max * 1.8) + 32).toFixed(0)}°F
                        </span>
                    }
                  </div>
                  <div className={styles.cardColumnOneRowTwo}>
                    <img alt="" src="/icons/raindrop-close-up.png" />
                    {isInch === false 
                      ? 
                        <span className={styles.milimetros}>
                          {we.rain.precipitation}mm
                        </span>
                      : 
                        <span className={styles.milimetros}>
                          {(we.rain.precipitation / 25.4).toFixed(2)}inch
                        </span>
                    }
                  </div>
                </div>
                <div className={styles.cardColumnTwo}>
                  <div className={styles.cardColumnTwoRowOne}>
                    <img alt="" src="/icons/download.png" />
                    {isFahrenheit === false 
                      ? 
                        <span className={styles.grau}>
                          {we.temperature.min}°C
                        </span>
                      : 
                        <span className={styles.grau}>
                          {((we.temperature.min * 1.8) + 32).toFixed(0)}°F
                        </span>
                    }
                  </div>
                  <div className={styles.cardColumnTwoRowTwo}>
                    <img alt="" src="/icons/protection.png" />
                    <span className={styles.grau}>{we.rain.probability}%</span>
                  </div>
                </div>
              </div>
            </div>

          )))}

        </>
      )    
}