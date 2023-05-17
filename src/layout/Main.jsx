import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import { Footer } from 'flowbite-react';
import WebFooter from '../pages/Shared/WebFooter/WebFooter';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <WebFooter></WebFooter>
        </div>
    );
};

export default Main;