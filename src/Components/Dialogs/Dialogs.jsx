import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                <div className={classes.item + ' ' +classes.active}>
                    Stepan
               </div>
                <div className={classes.item}>
                    Sofia
               </div>
                <div className={classes.item}>
                    Roksolana
               </div>


                <div className={classes.item}>
                    Volodia
               </div>


            </div>
            <div className={classes.messages}>
                <div className={classes.message}>hi</div>
                <div className={classes.message}>hu</div>
                <div className={classes.message}>skjvb</div>
                <div className={classes.message}>zxvn</div>
                <div className={classes.message}>zxcvn</div>
            </div>
        </div>
    )
}

export default Dialogs;