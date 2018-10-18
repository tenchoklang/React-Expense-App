
export const setTextFilter = (text = '') =>({
    type: 'TEXT_FILTER',
    text: text
});

export const sortByAmount = ()=> ({
    type: 'SORT_BY',
    sortBy: 'amount'
})

export const sortByDate = () =>({
    type: 'SORT_BY',
    sortBy: 'date'
});

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate: startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate: endDate
});