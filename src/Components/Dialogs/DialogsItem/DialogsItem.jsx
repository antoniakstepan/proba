import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './DialogsItem.module.css'


const DialogsItems = (props) => {
    let path = "/dialogs/"
    return (
        <div className={classes.item + ' ' + classes.active}>
            
            <NavLink to={path + props.id}> {props.name}</NavLink>
        </div>
    );


}


export default DialogsItems;