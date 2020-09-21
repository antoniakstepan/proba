import React from 'react';
import classes from './ProfileInfo.module.css'




const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt="Content" className={classes.img} src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />
            </div>
            <div className={classes.DiscriptionBlock}>
                Ava + discripion
            </div>
        </div>
    );
}

export default ProfileInfo;