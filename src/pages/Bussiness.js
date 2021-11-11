import React from 'react';
import NewsCard from '../components/NewsCard';
import classes from './Bussiness.module.scss';

const Bussiness = ()=>{
    return(
        <div className={classes.bussinessNews}>
            <div className={classes.bussinessNews__logo}>
                <h1>BUSSINESS<br/>NEWS</h1>
            </div>
            <div className={classes.bussinessNews__content}>
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

export default Bussiness;