import React, {useState, useEffect} from 'react'
import axios from 'axios';

export const ModalHook = ({input}) => {

    const [data, setData] = useState([]);
 

    const loadHeroes = async () => {
        if (!input) return; 

        try {
            const response = await axios.get(`https://superheroapi.com/api/54398b8e7e27eac34c7eb893af385ce9/search/${input}`);
            const resultData = response.results;
            setData(resultData.results); 
            console.log(resultData.results);
        } catch (error) {
            console.error('Error al obtener datos:', error);
        } 
    };

    useEffect(() => {
        loadHeroes();
    }, [input]);

  return {
    data, 
    input
  }
}
