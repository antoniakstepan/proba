import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: "1", message: "How are you?", likeCount: "0" },
  { id: "2", message: "Hello world", likeCount: "13" }

]
let dialogs = [
  { id: "1", name: "Stepan" },
  { id: "2", name: "Sofia" },
  { id: "3", name: "Roksolana" },
  { id: "4", name: "Volodia" }
]
let messages = [
  { id: "1", message: "Hi" },
  { id: "2", message: "How are you?" }
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
