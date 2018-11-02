
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch(action.type){
        case 'ADD_EXPENSE':
            //adding out expense to the states array
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((value)=>value.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map( (value) =>{
                if(value.id === action.id){
                    return {
                        ...value,
                        ...action.updatedExpense
                    }
                }else{
                    return value;
                }
            });
        case 'SET_EXPENSES':
            console.log("reducer", action.expenses);
            return action.expenses;
        default:
            return state;
    }
};

export default expensesReducer;