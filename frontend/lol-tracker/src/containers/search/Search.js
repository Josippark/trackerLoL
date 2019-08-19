import React from 'react';
import classes from './Search.module.css';


class Search extends React.Component{
    render(){
        return (
            <div className={classes.SearchWrapper}>
                <input className={classes.Input} type="text" placeholder="Summoner name"/>
                <button className={classes.Button}>Search</button>
            </div>
        )
    }
}
export default Search;