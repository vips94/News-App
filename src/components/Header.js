import React from 'react';
import classes from './Header.module.scss';
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return(
        <div className={classes.header}> 
            <div className={classes.header__logo}>
                <h1>NEWS APP</h1>
            </div>
            <nav className={classes.header__nav}>
                <ul>
                    <li>
                        <Link to="/">Latest News</Link>
                    </li>
                    <li>
                        <Link to="/tech">Tech</Link>
                    </li>
                    <li>
                        <Link to="/bussiness">Bussiness</Link>
                    </li>
                    <li>
                        <Link to="/trending">Trending</Link>
                    </li>
                </ul>
            </nav>

            <div className={classes.header__search}>
                <input type="text" name="search" placeholder="News Search"></input>
                <FaSearch onClick={()=>{console.log("search")}}>seacrch</FaSearch>
            </div>
            
        </div>
    );
}

export default Header;