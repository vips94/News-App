import React from 'react';
import classes from './NewsCard.module.scss';

const NewsCard = ()=>{
    return(
        <div className={classes.newsCard}>
            <div className={classes.newsCard__img}>
                <img src={process.env.PUBLIC_URL+"/images/demo.png"} alt=""/>
            </div>
            <div className={classes.newsCard__title}>
                <p className={classes.newsCard__title__date}>data and time</p>
                <h2>Title of the news</h2>
                <p className={classes.newsCard__title__content}>the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.a book or other written or printed work, regarded in terms of its content rather than its physical form.</p>

            </div>
            {/* <div className={classes.newsCard__content}>
            <p>the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.a book or other written or printed work, regarded in terms of its content rather than its physical form.</p>

            </div> */}
            
            
        </div>
    );
}

export default NewsCard;