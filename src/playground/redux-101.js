import {createStore} from 'redux';

const add = ( {a =1 ,b=1 } = {} ) =>{
    return a + b;
}

console.log(add());




const incrementCount = ( { incrementBy = 1 } = {} ) => (
    {
        type: "INCREMENT",
        incrementBy: incrementBy
    }
);

const decrementCount = ( {decrementBy = 1} = {} ) => (
    {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
);

//no default value for count because we are going to ask
//the user for a value, and we can validate it in the form
const setCount = ( {count} = {} ) => (
    {
        type: 'SET',
        count: count
    }
);

const reset = () => (
    {
        type: 'RESET',
        count: 0
    }
);

//1 reducers are pure functions (output depends on input)
//2 never change state or action (we are just returning a new object)
    //we are not mutating the state directly

const countReducer = (state = { count: 0 }, action) => {

    switch(action.type){
        case 'INCREMENT': 
            return{
                count: state.count + action.incrementBy
            }
        case 'DECREMENT': 
            return{
                count: state.count - action.decrementBy
            }
        case 'SET':
            return{
                count: action.count
            }
        case 'RESET': 
            return{
                count:0
            }
        
        default:{ 
            return state 
        }
    }
}

const store = createStore(countReducer);

//is a good way to listen for change in data
//take a function and that function gets called every single time the 
//dispatch is called

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(reset());

store.dispatch(decrementCount());
store.dispatch(decrementCount( {decrementBy: 10} ));

store.dispatch(setCount( {count: 100} ));
store.dispatch(setCount());