import React from 'react'
import { NavBar } from '../Components/NavBar'
import '../ComponentsScreen/Home.css'

export const Home = () => {
    return (
        <>
            <NavBar />

            <div classNameName="container position-relative">
                <div classNameName="row position-absolute top-50 start-50 translate-middle">
                    <div classNameName="col">
                        <input type="text" classNameName='border' placeholder="Busca tu Héroe favorito..." />
                    </div>
                </div>
                <div className="row position-absolute top-50 start-50 translate-middle">
                    <div className="col">
                        <button className="btn btn-dark ">Buscar</button>
                    </div>
                </div>
            </div>

        </>
    )
}
