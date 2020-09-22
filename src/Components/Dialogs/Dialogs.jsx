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
        <div className={classes.message}>{props.message}</div>
    );
}


const Dialogs = (props) => {
    let dialogs = [
        {id:"1" , name:"Stepan"},
        {id:"2" , name:"Sofia"},
        {id:"3" , name:"Roksolana"},
        {id:"4" , name:"Volodia"}
    ]
    let dialogsElements = dialogs.map((dialog)=>{
        return (<DialogsItems name={dialog.name} id={dialog.id} /> )
    })
    let messages =[
        {id:"1" , message:"Hi"},
        {id:"2" , message:"How are you?"}
    ]
    let messageElement = messages.map((sms)=>{
      return (
          <Message message={sms.message} id = {sms.id}/>
      );
    })



 

    return (


        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
         
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {/* <Message meassge={messageData[0].message} id={messageData[0].id} />
                <Message meassge={messageData[1].message} id={messageData[1].id}  /> */}
                {/* <Message meassge="I am fine" />
                <Message meassge="What did you do today?" /> */}
                {messageElement }

            </div>
        </div>
    )
}

export default Dialogs;