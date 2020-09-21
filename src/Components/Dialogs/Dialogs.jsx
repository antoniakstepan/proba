import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogsItems = (props) => {
    return (
        <div className={classes.item + ' ' + classes.active}>
            <NavLink to={"/dialogs/" + props.id}> {props.name}</NavLink>
        </div>
    );


}

const Message =(props)=>{
    return (
        <div className={classes.message}>{props.meassge}</div>
    );
}


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                <DialogsItems name="Stepan" id="1" />
                <DialogsItems name="SofiA" id="2" />
                <DialogsItems name="Roksolana" id="3" />
                <DialogsItems name="Volodia" id="4" />
            </div>
            <div className={classes.messages}>
                <Message meassge="Hi"/>
                <Message meassge="How are you?"/>
                <Message meassge="I am fine"/>
                <Message meassge="What did you do today?"/>
              
            </div>
        </div>
    )
}

export default Dialogs;