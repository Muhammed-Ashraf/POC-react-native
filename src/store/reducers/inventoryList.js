import {
    SET_INVENTORY_LIST
} from '../actions/actionTypes';

const initialState = {
    inventoryList: [],
    unit: 0,
    value: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INVENTORY_LIST:
            return {
                ...state,
                inventoryList: action.inventoryList,
                unit: action.unit,
                value: action.value
            };
        default:
            return state;
    }
};

export default reducer;
