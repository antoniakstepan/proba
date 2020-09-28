import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import state from './Redux/state'
import { addPost } from './Redux/state';
import {addMessage} from './Redux/state';
import {changeNewPostText} from './Redux/state';


export let renderEnteirTree = (state)=>{
  ReactDOM.render(
    <React.StrictMode>
      
      <App state ={state} addPost={addPost} addMessage={addMessage} changeNewPostText={changeNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}