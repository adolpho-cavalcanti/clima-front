import { useContext } from "react";
import { SearchContext } from '../contexts/SearchContext';

import styles from '../styles/Home.module.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export function Search() {

    const { dados, inputError, handleAddRepository, 
            handleOnSearch, handleOnHover, 
            handleOnSelect, handleOnFocus } = useContext(SearchContext);

      return (
        <>
          <form className={styles.search} onSubmit={handleAddRepository}>
            <div style={{ width: 290 }}>
              <ReactSearchAutocomplete
                  styles="width:100%"
                  items={dados}
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  autoFocus
                />
            </div>
            <button type="submit" className={styles.pesquisar}><img alt="" src="/icons/search.png" /></button>
          </form>
          {inputError && <span className={styles.span}>{inputError}</span>}
        </>
      )    
}