import React, { useState } from 'react'
import axios from 'axios'

export const NavBarHook = () => {

const [data, setData] = useState([]);

const loadUser = async () => {
    const result = await axios.get(`https://reqres.in/api/users/3`)
    const resultData = (await result).data
    setData(resultData.data);
}


  return {

    data,
    loadUser

  }
    
}
