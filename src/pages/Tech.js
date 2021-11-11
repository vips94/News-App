import React from 'react';
import NewsCard from '../components/NewsCard';
import classes from './Tech.module.scss';

const Tech = ()=>{
    return(
        <div className={classes.techNews}>
            <div className={classes.techNews__logo}>
                <h1>TECHNNOLOGY<br/>NEWS</h1>
            </div>
            <div className={classes.techNews__content}>
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

export default Tech;