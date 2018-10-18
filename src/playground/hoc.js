//Higher Order Component (HOC)
//a component (HOC) that renders another component
//reuse code
//render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is Private Info</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

//require authentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
                <WrappedComponent {...props}/> 
                :
                <p>User is not authenticated</p>}
        </div>
    );
}


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDom.render(<AuthInfo isAuthenticated={false} info= 'THEERE ARE DETAILS'/>, document.getElementById('app'));