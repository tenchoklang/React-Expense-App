import React from 'react';//relative path
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth'
import getFilteredExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

// store.dispatch(addExpense({description: 'water bill', amount:4500}));
// store.dispatch(addExpense({description: 'gas bill', createdAt: 1000}));
// store.dispatch(addExpense({description: 'rent bill', amount:1095}));


// const state = store.getState();
// console.log(getFilteredExpenses(state.expenses, state.filters)); 


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

//if we are already in the app and we log in or log out, we dont want to re-render everything
//that is why we us this variable isrenderd to check if we are currently rendering or not
let isrendered = false;

const render = ()=>{
    if(!isrendered){
        ReactDOM.render(jsx, document.getElementById("app"));
    }
}


//onAuthStateChanged takes a callback and runs that callback when the authstate is changed
//and in the callback we are provided the user if they are logged in

firebase.auth().onAuthStateChanged((user)=>{
    console.log(user);
    if(user){
        console.log('user is logged in ID --> ', user.uid);

        store.dispatch(login(user.uid));
        //only render if user is logged in
        store.dispatch(startSetExpenses()).then(()=>{
            //render on the promise of the startSetExpenses
            render();
            //if the user is logged in and is at the login page ('/') then redirect the user
            //to the dashboard
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    }else{
        console.log('user is not logged in');
        store.dispatch(logout());
        render();
        //redirect the user to the login page
        history.push('/');
    }
});












