import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import { Footer } from 'flowbite-react';
import WebFooter from '../pages/Shared/WebFooter/WebFooter';
import ScrollTop from '../pages/Shared/ScrollTop/ScrollTop';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <WebFooter></WebFooter>
            <ScrollTop></ScrollTop>
        </div>
    );
};

export default Main;