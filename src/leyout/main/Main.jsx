import React from 'react';
import Header from '../../shared/header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container mx-auto bg-img'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;