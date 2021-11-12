import React,{useState,useMemo} from 'react';
import classes from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const countryCodes = [
    'ae','ar','at','au','be','bg','br','ca','ch','cn','co',
    'cu','cz','de','eg','fr','gb','gr','hk','hu','id','ie',
    'il','in','it','jp','kr','lt','lv','ma','mx','my','ng',
    'nl','no','nz','ph','pl','pt','ro','rs','ru','sa','se',
    'sg','si','sk','th','tr','tw','ua','us','ve','za'
]    

const Header = (props)=>{

    const [value, setValue] = useState({value:'in',label:'India'})
    

    const countryNames = countryCodes.map((code)=>{
        return({
            value : code,
            label : countryList().getLabel(code)
        });
    })

    const options = useMemo(() => countryNames, [countryNames])

    const changeHandler = value => {
        //const code = value.value;
        setValue(value);
        props.selectedCountry(value.value);
    }

    return(
        <div className={classes.header}> 
            <div className={classes.header__logo}>
                <h1>NEWS APP</h1>
            </div>
            <nav className={classes.header__nav}>
                <ul>
                    <li>
                        <NavLink exact="true" to="/">Top Headlines</NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/tech">Tech</NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/bussiness">Bussiness</NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/sports">Sports</NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/health">Health</NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/science">Science</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={classes.header__search}>
                <p>Select Country</p>
                <Select options={options} value={value} onChange={changeHandler}/>
            </div>
            
        </div>
    );
}

export default Header;