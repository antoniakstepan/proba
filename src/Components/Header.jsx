import React from 'react';
import classes from'./Header.module.css'


const Header = () => {
    return (
        <header className={classes.header}>
            <img alt="My logo" src="https://www.w3schools.com/w3css/img_lights.jpg" />
        </header>
    )
}


export default Header;