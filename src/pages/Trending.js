import React from 'react';
import NewsCard from '../components/NewsCard';
import classes from './Trending.module.scss';

const Trending = ()=>{
    return(
        <div className={classes.trendingNews}>
            <div className={classes.trendingNews__logo}>
                <h1>TRENDING<br/>NEWS</h1>
            </div>
            <div className={classes.trendingNews__content}>
                <ul>
                    <li><NewsCard/></li>
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

export default Trending;