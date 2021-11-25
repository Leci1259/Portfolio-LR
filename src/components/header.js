import React from 'react';
import NavBar from './navigation';
import HeaderImg from './img/banner.png'

export default function HeaderDisplay() {
    return (
        <header>
            <img src={HeaderImg} alt="Banner for Lesianareid" id="header-img"></img>
            <NavBar />
        </header>
    )
}

