import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    let posts =[
        {id:"1" , message:"How are you?" ,likeCount:"0"},
        {id:"2" , message:"Hello world" ,likeCount:"13"}
        
    ]
    let  postMeassage = posts.map((post)=>{
        return (
            <Post massage={post.message} id={post.id} likeCount={post.likeCount} />
        );
     })
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
          
                {postMeassage}
            </div>
        </div>
    )
}

export default MyPosts;
