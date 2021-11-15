import React,{useState,useMemo,useEffect} from 'react';
import classes from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

// const countryCodes = [
//     'ae','ar','at','au','be','bg','br','ca','ch','cn','co',
//     'cu','cz','de','eg','fr','gb','gr','hk','hu','id','ie',
//     'il','in','it','jp','kr','lt','lv','ma','mx','my','ng',
//     'nl','no','nz','ph','pl','pt','ro','rs','ru','sa','se',
//     'sg','si','sk','th','tr','tw','ua','us','ve','za'
// ]  

const countryCodes = [
    'au','fr','gb','in','ru','us'
]  

const Header = (props)=>{

    const [value, setValue] = useState({value:'in',label:'India'})
    const [menuOpen,setMenuOpen] = useState(true);
    

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

    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
      });
    
      const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
      };
    
      useEffect(() => {
        const handleResize = () => {
          setSize({
            widht: window.innerWidth,
            height: window.innerHeight,
          });
        };
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      useEffect(() => {
        if (size.width > 768 && menuOpen) setMenuOpen(false);
      }, [size.width, menuOpen]);

    return(
        <div className={classes.header}> 
            <div className={classes.header__logo}>
                <h1>NEWS APP</h1>
            </div>
            <nav className={`${classes.header__nav} ${menuOpen ? classes.isMenu : " "}`} onClick = {(event) => event.stopPropagation()}>
                <ul>
                    <li>
                        <NavLink exact="true" to="/">General</NavLink>
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
            <div className={classes.header__toggle}>
                {menuOpen ? (
                    <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                    <>
                    <AiOutlineClose onClick={menuToggleHandler} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;