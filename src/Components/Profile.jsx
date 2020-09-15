import React from 'react';
import classes from './Profile.module.css'


const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img alt="Content"className={classes.img} src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />
            </div>
            <div>
                Ava + discripion
         </div>
            <div>
                My Posts
           <div>
                    New Post
           </div>
                <div className={classes.posts}>
                    <div className={classes.item}>Post 1</div>
                    <div className={classes.item}>Post 2</div>
                </div>

            </div>
        </div>
    );
}


export default Profile;
