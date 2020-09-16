import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-lagoon-nebula-nasa.jpg"/>
            item1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;