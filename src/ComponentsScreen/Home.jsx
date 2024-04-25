import React, { useState } from 'react'
import { NavBar } from '../Components/NavBar'
import '../ComponentsScreen/Home.css'
import { Modal } from '../Components/Modal'

export const Home = () => {

    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <NavBar />

            <div className="container">
                <div>
                    <div className="col">
                        <input type="text" className='border' onChange={handleInput} value={input} placeholder="Busca tu Héroe favorito..." />
                    </div>
                </div>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="col">
                        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Buscar
                        </button>
                    </div>
                </div>
            </div>

            <Modal input={input} />
           
        </>
    )
}
