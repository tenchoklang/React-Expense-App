import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {removeExpense} from '../actions/expenses'


//this is the props object that we are destructing
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>  
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
);


export default connect()(ExpenseListItem);
