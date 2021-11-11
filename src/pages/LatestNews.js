import React from 'react';
import NewsCard from '../components/NewsCard';
import classes from './LatestNews.module.scss';

const LatestNews = ()=>{
    return(
        <div className={classes.latestNews}>
            <div className={classes.latestNews__logo}>
                <h1>LATEST<br/>NEWS</h1>
            </div>
            <div className={classes.latestNews__content}>
                <ul>
                    <li><NewsCard/></li>
                    <li><NewsCard/></li>
                    <li><NewsCard/></li>
                    <li><NewsCard/></li>
                    <li><NewsCard/></li>
                    <li><NewsCard/></li>
                    <li><NewsCard/></li>
                </ul>
            </div>
            
        </div>
    );
}

export default LatestNews;