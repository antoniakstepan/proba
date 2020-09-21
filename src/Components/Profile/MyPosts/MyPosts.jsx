import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    let postData =[
        {id:"1" , message:"How are you?" ,likeCount:"0"},
        {id:"2" , message:"Hello world" ,likeCount:"13"}
        
    ]
    return (
        <div className={classes.MyPostsBlock}>
            My Posts
            <div>
                New Post
                <div>
                    <div>
                        <textarea></textarea>
                    </div>

                    <button>Add</button>
                </div>

            </div>

            <div className={classes.posts}>
                <Post massage={postData[0].message} id={postData[0].id} likeCount={postData[0].likeCount} />
                <Post massage={postData[1].message} id={postData[1].id} likeCount = {postData[1].likeCount} />
            </div>
        </div>
    )
}

export default MyPosts;
