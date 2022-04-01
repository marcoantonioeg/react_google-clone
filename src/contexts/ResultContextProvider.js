import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('Elon Musk');

  const getResults = async (type) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '76deeb9a15mshfe2ffecb169eb1ep1c49a3jsnc5a4df3ef8d3',
      },
    });

    const data = await res.json();
    if(type.includes('/news')){
        console.log(data);
        setResults(data.entries);
    }else if(type.includes('/image')){
        setResults(data.image_results);
    }else{
        setResults(data.results);
    }
    setLoading(false);
  };

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </ResultContext.Provider>
  );
};
export const useResultContext = ()=> useContext(ResultContext);




/*import React, {createContext, useContext, useState} from 'react';

//creo el context 
const ResultContext = createContext();
//base URL de la API 
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';
//exporto el contextProvider
export const ResultContextProvider = ({children})=>{
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('JavaScript')
    //funcion para obtener los resultados, el type es el ttipo de contenido que buscará
    //según las rutas declaradas, (video, imagenes, busqueda)
    const getResults = async(type)=>{
        setIsLoading(true)
        //api call
        const response = await fetch(`${baseUrl}${type}`,{
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '76deeb9a15mshfe2ffecb169eb1ep1c49a3jsnc5a4df3ef8d3'
            }
        })
        const data = response.json();
        console.log(data)
        setResults(data)
        setIsLoading(false)
    }
    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}
export const useResultContext = ()=> useContext(ResultContext);
*/