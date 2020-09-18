import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';



function App(props) {
  return (//
    <div className="app-wrapper">
      {/* <header className="header">
           <img alt="My logo"src="https://www.w3schools.com/w3css/img_lights.jpg"/>
         </header>  Замість цього буде компонента <Header/>*/}
      <Header />


      {/* <nav className="nav">
           <div><a>Profile</a></div>
           <div><a>Massages</a></div>
           <div><a>News</a></div>
           <div><a>Music</a></div>
           <div><a>Settings</a></div>
         </nav> Замість цього буде компонента <Nav/> */}
      <Nav />
      {/* <div className="content">
           <div>
           <img alt="Content"src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"/>
         </div>
         <div>
           Ava + discripion
         </div>
         <div>
           My Posts
           <div>
             New Post
           </div>
           <div>Post 1</div>
           <div>Post 2</div>
         </div>
         </div>Замість цього буде компонента <Profile/> */}

      {/* <Profile /> */}
      <div className="app-wrapper-content">
     
      <Dialogs />
      </div>
      
    </div>
  );

}




export default App;

