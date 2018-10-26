import uuid from 'uuid';
import database from '../firebase/firebase'

export const startRemoveExpense = (id) =>{
    return (dispatch)=>{
        const path = `expenses/${id}`
        database.ref(path).remove().then(()=>{
            dispatch(removeExpense(id));
        });
    }
}

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

// export const addExpense = ( 
//     {
//         description='',
//         note='',
//         amount=0,
//         createdAt=0
//     } = {} 
// ) => ({
// type: 'ADD_EXPENSE',
// expense:{
//     id: uuid(),
//     description: description,
//     note:note,
//     amount: amount,
//     createdAt: createdAt
// }
// });

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpenses = (expenses = {}) => {
    //returns a function where we can implement some logic (adding/removing...to database), 
    //works only cus we set up the middleware with thunk
    //called by redux with 'dispatch' which we can use to dispatch action.
    //In the .then() of the promise we want to dispatch the action because by then we would have the, id of the 
    //expense that we just added. 
    return (dispatch)=>{
        //set the defaults for action here
        const  {
            description='',
            note='',
            amount=0,
            createdAt=0
        } = expenses;

        const expense = {description, note, amount, createdAt};
        database.ref('expenses').push(expense).then((snapshot)=>{
            //async dispatch in the promise
            dispatch(addExpense({
                id: snapshot.key,
                ...expense
            }));
        });
    };
};


//the reducer takes care of desctructuring objects
export const editExpense = (id, updatedExpense)=>({
    type: 'EDIT_EXPENSE',
    id,
    updatedExpense
});

export const startEditExpense = (id, updatedExpense) =>{
    return (dispatch)=>{
        const path = `expenses/${id}`;
        database.ref(path).update(updatedExpense).then(()=>{
            dispatch(editExpense(id, updatedExpense));
        })
    }
}


//SET_EXPENSES
export const setExpenses = (expenses) =>({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch)=>{
        /*
        return to be able to promise chain in app.js normally we would be able to add a .then() at the end of another
        promise but since this function is being called form the outside we can return allowing us to promise chain
        */
        return database.ref('expenses').once('value').then((snapshot)=>{
            let expenses = [];

            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        })
    };
}

