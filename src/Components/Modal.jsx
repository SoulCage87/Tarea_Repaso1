import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Modal = ({ input }) => {
    const [data, setData] = useState([]);
 

    const loadHeroes = async () => {
        if (!input) return; 

        try {
            setIsLoading(true);
            const response = await axios.get(`https://superheroapi.com/api/54398b8e7e27eac34c7eb893af385ce9/search/${input}`);
            const resultData = response.data;
            setData(resultData.results); 
            console.log(resultData.results);
        } catch (error) {
            console.error('Error al obtener datos:', error);
        } 
    };

    useEffect(() => {
        loadHeroes(input);
    }, [input]);

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Resultados</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {(
                            <ul>
                                {data.map((hero) => (
                                    <li key={hero.id}>{hero.name}</li> 
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
