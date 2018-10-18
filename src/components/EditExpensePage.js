import React from 'react';//relative path
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses'


const Edit = (props) => {
    console.log(props);
    // const id = props.match.params.id;
    return ( 
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense)=>{
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                console.log('Updataed', expense);
            }}/>
            <button onClick={() => {
                props.dispatch(removeExpense(props.expense));
                props.history.push('/');
            }}>Remove</button>

        </div>
    );
}

//connect to state
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find( (expense)=> expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(Edit);

// import React from 'react';//relative path
// import { connect } from 'react-redux';

// const findExpenseById = (expenses,id)=>{
//     for(let i=0;i<expenses.length;i++){
//         let expense = expenses[i];
//         if(expense.id === id){
//             console.log(expense.description);
//             return expense;
//         }
//     }
// }

// const Edit = (props) => {
//     console.log(props);
//     const id = props.match.params.id
//     const {description, amount, createdAt} = findExpenseById(props.expenses, id);
//     return ( 
//         <div>
//             <p>This is from my edit page component {id}</p>
//             <p>{`description ${description}`}</p>
//             <p>{`amount ${amount}`}</p>
//         </div>
//     );
// }

// //connect to state
// const MapStateToProps = (state, props) => ({
//     expenses: state.expenses.find( (expense)=> expense.id === props.match.id )
// });

// export default connect(MapStateToProps)(Edit);