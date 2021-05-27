import styles from './styles/Home.module.css';
import { ContextResultadosProvider } from './contexts/SearchContext';
import { Search } from './components/Search';
import { Card } from './components/Card';

export function App() {




    return (
      <ContextResultadosProvider>
        <div className={styles.tudo}>
          <div className={styles.container}>
            <Search />
            
            <Card />

          </div>
        </div>
      </ContextResultadosProvider>
    )
  }