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

const Message = (props) => {
    return (
        <div className={classes.message}>{props.meassge}</div>
    );
}


const Dialogs = (props) => {
    let dialogsData = [
        {id:"1" , name:"Stepan"},
        {id:"2" , name:"Sofia"},
        {id:"3" , name:"Roksolana"},
        {id:"4" , name:"Volodia"}
    ]
    let messageData =[
        {id:"1" , message:"Hi"},
        {id:"2" , message:"How are you?"}
    ]



 

    return (


        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                <DialogsItems name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItems name={dialogsData[1].name} id={dialogsData[1].id} />
                {/* <DialogsItems name="Roksolana" id="3" />
                <DialogsItems name="Volodia" id="4" /> */}
            </div>
            <div className={classes.messages}>
                <Message meassge={messageData[0].message} id={messageData[0].id} />
                <Message meassge={messageData[1].message} id={messageData[1].id}  />
                {/* <Message meassge="I am fine" />
                <Message meassge="What did you do today?" /> */}

            </div>
        </div>
    )
}

export default Dialogs;