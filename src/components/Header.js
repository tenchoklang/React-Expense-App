import React from 'react';//relative path
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';


const Header = ({startLogout}) =>(
    <header>
        <h1>Expenses App</h1>
        <NavLink to="/dashboard" activeClassName="is-active"> dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-active"> Go Create page </NavLink>
        <NavLink to="/help" activeClassName="is-active"> Go Help page </NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch)=>({
    startLogout: ()=>dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

