import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const NavBarHook = () => {

const [data, setData] = useState({});


useEffect(() => {
  const loadUser = async () => {
    try {
      const result = await axios.get(`https://reqres.in/api/users/2`);
      const resultData = (await result).data
      setData(resultData.data);
    } catch (error) {
      console.error('Error al obtener resultados: ', error);
    }
  };

  loadUser(); 
}, []);

  return {

    data

  }
    
}

