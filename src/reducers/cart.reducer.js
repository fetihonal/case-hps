import {
    ADD_TO_CART,
    DELETE_TO_CART,
} from '../constant/actionTypes';

const cartReducerDefaultState = {
    count: localStorage.getItem('cart')?.length ? JSON.parse(localStorage.getItem('cart')).count : 0,
    data: localStorage.getItem('cart')?.length ? JSON.parse(localStorage.getItem('cart')).data : [],
};

const cartReducer = (state = cartReducerDefaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                count: action.count,
                data: [
                    ...state.data,
                    action.data,
                ],

            };
        case DELETE_TO_CART:
            return {
                ...state,
                count: action.count,
                data: state.data.filter((item) => item.id !== action.data.id),
            };

        default:
            return state;
    }
}

export default cartReducer;