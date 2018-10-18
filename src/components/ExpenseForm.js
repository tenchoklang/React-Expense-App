import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();


export default class ExpenseForm extends React.Component{

    constructor(props){
        super(props);
        
        console.log(props);

        this.state = {
            description: props.expense ? props.expense.description :'',
            note: props.expense ? props.expense.note : '',
            amount: props.expense? (props.expense.amount /100).toString() : '',
            createdAt: props.expense? moment(props.expense.createdAt) :moment(),
            calendarFoused: false,
            error: ''
        };
    }
   


    onDescriptionChange = (e) =>{
        const description = e.target.value;
        this.setState(()=>({
            description: description
        }));
    }

    onNoteChange = (e)=>{
        const note = e.target.value;
        this.setState(()=>({
            note: note
        }));
    }

    onAmountChange = (e) =>{
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            console.log(amount);
            this.setState(()=>({
                amount: amount
            }));
        }
    };

    onDateChange = (createdAt) =>{
        this.setState(()=>({
            createdAt: createdAt
        }));
    }

    onFocusChange = ( {focused} ) =>{
        this.setState(()=>({
            calendarFocused: focused
        }));
    }

    OnSubmit = (e) =>{
        e.preventDefault();
        if( !this.state.description|| !this.state.amount){
            this.setState(()=> ({
                error: 'Please provide a description or amount'
            }));
        }else{
            this.setState(()=> ({
                error: ''
            }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }


    /*
    In the <form> <inputs> the value and onChange properties work together. The value is set to the states value
    and in the onChange we could do some sort of input validation, like we did for the amount input. If the 
    input data is validated, then we can use setState to change the states value, thus also changing the 
    value of the input (what the user sees)
    */
    render() {
        return (
            <div>
                {}
                <form onSubmit={this.OnSubmit}>
                    <p>{this.state.error}</p>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <br />
                    <input 
                        type="text" 
                        placeholder="Amount" 
                        value={this.state.amount}
                        onChange={this.onAmountChange}                
                    />
                    <br />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=> false}
                    />
                    <br />
                    <textarea 
                        placeholder="Add a note for your expense" 
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    
                    
                    </textarea>
                    <br />
                    <input type="submit" 
                        value="Submit"
                    />
                </form>
                
            </div>
        );
    }
}

