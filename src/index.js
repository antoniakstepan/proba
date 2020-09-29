


import * as serviceWorker from './serviceWorker';

import state, { subscribe } from './Redux/state';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { addPost } from './Redux/state';
import {addMessage} from './Redux/state';
import {changeNewPostText} from './Redux/state';


 let renderEnteirTree = (state)=>{
  ReactDOM.render(
    <React.StrictMode>
      
      <App state ={state} addPost={addPost} addMessage={addMessage} changeNewPostText={changeNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderEnteirTree(state);
subscribe(renderEnteirTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
