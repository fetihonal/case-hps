import {
    SEARCH_BY,
    FILTER_DATA,

} from '../constant/actionTypes';

const filtersReducerDefaultState = {
    searchBy: "",
    color: [],
    brand: [],
    sort: "",
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case FILTER_DATA:
            return {
                ...state,
                color: action.color,
                brand: action.brand,
                sort: action.sort
            };
        case SEARCH_BY:
            return {
                ...state,
                searchBy: action.search
            };

        default:
            return state;
    }
}

export default filtersReducer;