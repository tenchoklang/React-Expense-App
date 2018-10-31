import React from 'react';//relative path
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';


const Header = ({startLogout}) =>(
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link to="/dashboard" className="header__title" > 
                    <h1>Expenses App</h1> 
                </Link>
                <button onClick={startLogout} className="header__logout">Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch)=>({
    startLogout: ()=>dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

