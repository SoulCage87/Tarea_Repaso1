import React, { useEffect } from 'react';
import { NavBarHook } from '../Hooks/NavBarHook';
import '../Components/NavBar.css'

export const NavBar = () => {
    const { data } = NavBarHook();

    return (
        <>

            {
                <nav key={data.id} className="navbar">
                    <div key={data.id} className="container-fluid">
                        <a className="navbar-brand" href="">
                            <img src={data.avatar} alt="Logo" width="50" height="40" className="d-inline-block align-text-top" />
                            {data.first_name} {data.last_name} ({data.email})
                        </a>
                    </div>
                </nav>
            }

        </>
    );
};


