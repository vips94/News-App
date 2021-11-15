import React from 'react';
import classes from './NewsCard.module.scss';

const NewsCard = (props)=>{

    // const event = new Date(props.item.publishedAt);

    // const options = { month: 'long', day: 'numeric' };

    // const date = event.toLocaleDateString(undefined, options);

    return(
        <div className={classes.newsCard}>
            <div className={classes.newsCard__img}>
                <img src={props.item.urlToImage} alt=""/>
            </div>
            <div className={classes.newsCard__title}>
                <div className={classes.newsCard__title__date}>
                    <h4>{props.item.title}</h4>
                    <a href={props.item.url} target="_blank" rel="noreferrer" >Read More</a>
                </div>
                <div className={classes.newsCard__title__content}>
                    <p>{props.item.description}</p>
                </div>
                
            </div>
            
        </div>
    );
}

export default NewsCard;