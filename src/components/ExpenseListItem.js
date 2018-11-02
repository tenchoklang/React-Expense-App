import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {startRemoveExpense} from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';


//this is the props object that we are destructing
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div className="content-container list-item">
        <div className="list-item__content">
            <div>
                <Link to={`/edit/${id}`} className="list-item__description">  
                <h3 >
                    {description} - 
                    <span className="list-item__content--amount">
                    {numeral(amount/100).format('$0,0.00')}
                    </span>
                </h3>
                </Link>
                <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
            </div>
                
            <div className="list-item__remove">
                    <button  onClick={() => {
                        console.log(id);
                        console.log({id});
                        dispatch(startRemoveExpense(id));
                        }}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>      
            </div>
        </div>
    </div>
);


export default connect()(ExpenseListItem);
