import { useContext } from "react";
import { SearchContext } from '../contexts/SearchContext';

import styles from '../styles/Home.module.css';

export function Topo() {

    const { resultados, isFahrenheit, 
            setIsFahrenheit, isInch, setIsInch } = useContext(SearchContext);

      return (
        <>
          {typeof resultados != "undefined" && resultados != null && resultados.length != null && resultados.length > 0
            ?      
            <div className={styles.topo}>
              <h5 className={styles.title}>
                Previsão para {resultados.map(item => item.locale.name.toString())} - SP
              </h5>
              {isInch === false
                ?
                <button className={styles.conversorF} onClick={() => {setIsInch(true)}}>
                  Covert para "inch"
                </button>
                :
                <button className={styles.conversorC} onClick={() => {setIsInch(false)}}>
                  Covert para "mm"
                </button>
              }
              {isFahrenheit === false
                ?
                <button className={styles.conversorF} onClick={() => {setIsFahrenheit(true)}}>
                  Covert para ºF
                </button>
                :
                <button className={styles.conversorC} onClick={() => {setIsFahrenheit(false)}}>
                  Covert para ºC
                </button>
              }
            </div>
            :
            <div className={styles.topo}>
              <span>Climatempo - Busque a previsão para sua cidade nos próximos dias.</span>
            </div>
          }

        </>
      )    
}