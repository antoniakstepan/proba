import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-lagoon-nebula-nasa.jpg" />
            item
            <div>
                <span>{props.massage}</span><br/>
    <span>Like{props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;