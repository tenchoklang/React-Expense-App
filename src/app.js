import React from 'react';//relative path
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters'
import getFilteredExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import './firebase/firebase';

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

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(()=>{
    //render on the promise of the startSetExpenses
    ReactDOM.render(jsx, document.getElementById("app"));
});






