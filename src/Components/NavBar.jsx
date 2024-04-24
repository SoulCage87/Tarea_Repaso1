import React, { useEffect } from 'react';
import { NavBarHook } from '../Hooks/NavBarHook';

export const NavBar = () => {
    const { data, loadUser } = NavBarHook();

    useEffect(() => {
        loadUser();
    }, []); 

    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body">
                {Array.isArray(data) && data.map((user) => (
                    <div key={user.id} className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={user.avatar} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            {user.first_name} {user.last_name}
                        </a>
                    </div>
                ))}
            </nav>
        </>
    );
};


