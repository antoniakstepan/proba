import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import Nav from './Components/Nav/Nav';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';



function App(props) {

  return (//
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">

          <Route path="/profile" render={() => <Profile posts={props.posts} />} />

          <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />

          <Route path="/news" render={() => <News />} />

          <Route path="/music" render={() => <Music />} />

          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );

}




export default App;

