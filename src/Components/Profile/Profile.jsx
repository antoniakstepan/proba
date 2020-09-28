import React from 'react';
import MyPosts from './MyPosts/MyPosts';

import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
 
    return (
        <div className={classes.content}>
            <ProfileInfo />


            <MyPosts posts={props.profileData.posts}
            newPostText={props.profileData.newPostText}
             addPost={props.addPost} 
             changeNewPostText={props.changeNewPostText} />
        </div>
    );
}


export default Profile;
