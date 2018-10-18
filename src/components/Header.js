import React from 'react';//relative path
import {NavLink} from 'react-router-dom'


const Header = () =>(
    <header>
        <h1>Expenses App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}> Go Home </NavLink>
        <NavLink to="/create" activeClassName="is-active"> Go Create page </NavLink>
        <NavLink to="/help" activeClassName="is-active"> Go Help page </NavLink>
    </header>
);

export default Header;