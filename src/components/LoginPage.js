import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const LoginPage = ({startLogin})=>(
    <div className="login">
        <i className="fa fa-money" aria-hidden="true"></i>
        <p className="login__title">Expenses App</p>
        <button className="login__button"onClick={startLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: ()=> dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);