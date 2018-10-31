import React from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';



class ExpenseListFilters extends React.Component{

    state = {
        calendarFocused: null,

    };

    onDatesChange = ({startDate, endDate}) =>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) =>{
        this.setState(()=>({
            calendarFocused: calendarFocused
        }));
    }

    render(){
        return(
            <div className="content-container">
                <div className="filters-group">
                    <div className="filters-group__item" >
                        <input className="text-input" 
                            placeholder="Search"
                            type="text" 
                            value={this.props.filters.text} 
                            onChange={(e) => {
                            //we can dispatch an action setTextFilter based in the input
                            this.props.dispatch(setTextFilter(e.target.value));
                        }}/>
                    </div> 
                    <div className="filters-group__item">
                        <select className="date-input"value={this.props.filters.sortBy} onChange={ (e)=>{
                            if(e.target.value === 'date'){
                                this.props.dispatch(sortByDate());
                            }else if(e.target.value === 'amount'){
                                this.props.dispatch(sortByAmount());
                            }
                        }}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div> 
                    <div className="filters-group__item">
                        <DateRangePicker
                        startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                        endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                        onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                        focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        showClearDates={true}
                        />
                    </div>    
                </div>
            
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);