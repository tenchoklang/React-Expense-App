import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
/*
actions
1)ADD_EXPENSE
2)REMOVE_EXPENSE
3)SET_TEXT_FILTER
4)SORT_BY_DATE
5)SORT_BY_AMOUNT
6)SET_START_DATE
7)SET_END_DATE
*/

const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

const addExpense = ( 
        {
            description='',
            note='',
            amount=0,
            createdAt=0
        } = {} 
    ) => ({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description: description,
        note:note,
        amount: amount,
        createdAt: createdAt
    }
});

const editExpense = (id, update)=>({
    type: 'EDIT_EXPENSE',
    id,
    update
});

const setTextFilter = (text = '') =>({
    type: 'TEXT_FILTER',
    text: text
});

const sortByAmount = ()=> ({
    type: 'SORT_BY',
    sortBy: 'amount'
})

const sortByDate = () =>({
    type: 'SORT_BY',
    sortBy: 'date'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate: startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate: endDate
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((value)=>value.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map( (value) =>{
                if(value.id === action.id){
                    return {
                        ...value,
                        ...action.update
                    }
                }else{
                    return value;
                }
            });
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => { 
    switch(action.type){
        case 'TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

//timestamps (milliseconds)
//jan 1 1970 --> time start 
//33400 -->33.4 secs 

const getFilteredExpenses = (expenses, { text, sortBy, startDate, endDate }) =>{
    return expenses.filter( (expense)=>{
        //filters the expenses array 
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort( (a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }if(sortBy === 'amount'){
            console.log(a.amount < b.amount ? 1 : -1);
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const filteredExpenses = getFilteredExpenses(state.expenses,state.filters);
    console.log(filteredExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'rent',amount:300, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'coffe',amount:300, createdAt: -1000}));

// const expenseThree = store.dispatch(addExpense({description: 'insurance',amount:1000, createdAt: -1000}));

// //we pass the object to removeExpense() and it destructs it to get the id
// store.dispatch(removeExpense(expenseOne.expense));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500} ));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));


const demoState = {
    expenses: [{
        id: 'asfdsf',
        description: 'January Rent',
        note: 'final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text:'rent',
        sortBy: 'date',//date or amount
        stateDate: undefined,
        endDate: undefined
    }
};

