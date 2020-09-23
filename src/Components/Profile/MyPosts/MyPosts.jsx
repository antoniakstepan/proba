import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
 
    let  postMeassage = props.posts.map((post)=>{
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
