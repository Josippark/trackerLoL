import React from 'react';
import classes from './Logo.module.css';
import logoImg from '../../images/logo.png'

function logo (){
    return (
        <div className={classes.logoWrapper}>
            <img className={classes.logo} src={logoImg} alt="logo"/>
            
        </div>
    )
}
export default logo;