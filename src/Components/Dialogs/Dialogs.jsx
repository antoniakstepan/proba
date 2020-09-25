import React from 'react';
import classes from './Dialogs.module.css';

import DialogsItems from './DialogsItem/DialogsItem';
import Message from './Message/Message';






const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((dialog) => {
        return (<DialogsItems name={dialog.name} id={dialog.id} />)
    })

    let messageElement = props.state.messages.map((sms) => {
        return (
            <Message message={sms.message} id={sms.id} />
        );
    })


    let newMessageElement = React.createRef()
    let addMessageElement = ()=>{
     
     let message = newMessageElement.current.value;
     props.addMessage(message)
    }

    return (


        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={classes.messages}>

                {messageElement}

                <div>
                    <textarea ref={newMessageElement}></textarea>
                    <div>
                    <button onClick={addMessageElement}>Add Message</button>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Dialogs;