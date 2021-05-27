import { api } from '../services/api';
import { createContext, useState, useEffect } from 'react';

export const SearchContext = createContext([]);

export function ContextResultadosProvider({children}) {

    const [city, setCity] = useState('');
    const [inputError, setInputError] = useState('');
    const [dados, setDados] = useState([]);
    const [resultados, setResultados] = useState([]);
    const [isFahrenheit, setIsFahrenheit] = useState(false);
    const [isInch, setIsInch] = useState(false);
  
      const handleOnSearch = (string, results) => {
        console.log(string, results, 'string', 'results')
      }
  
      const handleOnHover = (result) => {
        console.log(result, 'result')
      }
  
      const handleOnSelect = (item) => {
        setCity(item);
      }
  
      const handleOnFocus = () => {
        console.log('Focused')
      }
  
      useEffect(() => {
        api.get('/clima/locales/findall')
          .then(response => setDados(response.data));

        // api.get(`/clima/weather/findall?locale=${city.name}`)
        //   .then(response => setResultados(response.data), console.log(resultados, 'context1'));
      
      },[city]);
  
      async function handleAddRepository(e){
        e.preventDefault();
        
        if (!city) {
          setInputError('Digite o nome da Cidade');
          return;
        }
  
        await api.get(`/clima/weather/findall?locale=${city.name}`)
                .then(response => setResultados(response.data), console.log(resultados, 'context2'));
        
        setInputError('');

        console.log(resultados, 'resultados 3');
      }

    return(
        <SearchContext.Provider value={{
            handleOnSearch,
            handleOnHover,
            handleOnSelect,
            handleOnFocus,
            handleAddRepository,
            setIsFahrenheit,
            setIsInch,
            city,
            inputError,
            dados,
            resultados,
            isFahrenheit,
            isInch
        }}>
            {children}
        </SearchContext.Provider>
    );
}



