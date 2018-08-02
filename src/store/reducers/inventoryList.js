import {
    SET_INVENTORY_LIST
} from '../actions/actionTypes';

const initialState = {
    inventoryList: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INVENTORY_LIST:
            return {
                ...state,
                inventoryList: action.inventoryList
            };
        default:
            return state;
    }
};

export default reducer;
