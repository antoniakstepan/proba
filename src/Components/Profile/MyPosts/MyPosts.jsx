import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = ()=>{
    return (
        <div>
            My Posts
            <div>
                New Post
                <div>
                <textarea></textarea>
               <button>Add</button>
                </div>
               
                </div>

            <div className={classes.posts}>
               <Post massage="I am Stepan"/>
               <Post massage="Hello world"/>
            </div>
        </div>
    )
}

export default MyPosts;
