import React from 'react';
import classes from './Header.module.css';
import Logo from '../logo/Logo'
import Search from '../../containers/search/Search';

function header(props) {
    return (
        <div className={classes.header}>
            <Logo />
            <div className={classes.headingWrapper}>
                <h1 className={classes.heading}>
                    <span className={classes.headingFirst}>Stats Hunter</span>
                    <span className={classes.headingSecond}>Get info about your League of Legends account</span>
                </h1>
                <Search/>
            </div>
        </div>
    )
}
export default header;