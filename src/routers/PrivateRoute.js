import React from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';
import Header from '../components/Header';


//here we are just renaming the component to uppercase C. We want to desctructure the component
//because we want to apply some conditional logic to it
const PrivateRoute = ({isAuthenticated, component: Component, ...rest})=>(
    <Route {...rest} component={(props)=>(
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props}/>
            </div>
        ) : (
            <Redirect to="/"/>
        )
    )}/>
);



const mapStateToProps = (state)=>({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);