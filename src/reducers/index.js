import { combineReducers } from 'redux';
import Filters from './filters.reducer';
import Cart from './cart.reducer';
const reducers = combineReducers({
    data: [],
    filters: Filters,
    cart: Cart,

});

export default reducers;