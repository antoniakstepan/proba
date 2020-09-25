import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
 
    let  postMeassage = props.posts.map((post)=>{
        return (
            <Post massage={post.message} id={post.id} likeCount={post.likeCount} />
        );
     })
     let newPostElement=React.createRef()
     let addPostMessage = ()=>{
        
        let text = newPostElement.current.value;
        props.addPost(text)
     }
    return (
        <div className={classes.MyPostsBlock}>
            My Posts
            <div>
                New Post
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>

                    <button onClick={addPostMessage}>Add</button>
                </div>

            </div>

            <div className={classes.posts}>
          
                {postMeassage}
            </div>
        </div>
    )
}

export default MyPosts;
