import {
    SET_INVENTORY_LIST, SET_QUERY, ADD_INVENTORY
} from '../actions/actionTypes';

const initialState = {
    inventoryList: [],
    checkoutList: [],
    unit: 0,
    value: 0,
    query: '',
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

        case SET_QUERY:
            return {
                ...state,
                query: action.query
            };
        case ADD_INVENTORY:
        return {
            ...state,
            places: state.places.filter(place => {
              return place.key !== action.key;
            })
          };
        default:
            return state;
    }
};

export default reducer;
