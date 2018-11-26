import update from 'immutability-helper';

import {
    SET_INVENTORY_LIST, SET_QUERY, ADD_INVENTORY, SET_CHECKOUT_LIST, UPDATE_INVENTORY
} from '../actions/actionTypes';

const initialState = {
    inventoryList: [],
    checkoutList: [],
    unit: 0,
    value: 0,
    query: '',
    checkoutUnit: 0,
    checkoutValue: 0
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
                checkoutList: state.checkoutList.concat({
                    name: action.name,
                    unit: action.unit,
                    value: action.value,
                    color: action.color,
                    id: action.id
                })
            };

        // case UPDATE_INVENTORY:
        //     updatedState = state.get('medias').get('data');
        //     return {
        //         ...state,
        //         checkoutList: state.checkoutList.map(item => {
        //             if (item.name === action.name) {
        //                 return { ...item, ...action.unit };
        //             }
        //             return item;
        //         })
        //     };

        case UPDATE_INVENTORY: {
            const updatedItems = state.checkoutList.map(item => {
                if (item.name === action.name) {
                    return { ...item, ...action.unit };
                }
                return item;
            });
            return updatedItems;
        }
        // case UPDATE_INVENTORY:

        //     return {
        //         ...state,
        //         checkoutList: action.checkoutList
        //     };


        // case UPDATE_INVENTORY:
        //     return update(state, {
        //         checkoutList: {
        //             [checkoutList.name]: {
        //                 unit: { $set: action.unit }
        //             }
        //         }
        //     });

        // case UPDATE_INVENTORY:
        //     const updatedItems = state.map(item => {
        //         if (item.id === action.id) {
        //             return { ...item, ...action.payload }
        //         }
        //         return item
        //     })
        //     return updatedItems
        default:
            return state;
    }
};

export default reducer;

// {
//     name: "some name",
//         subtitle: "some subtitle",
//             contents: [
//                 { title: "some title", text: "some text" },
//                 { title: "some other title", text: "some other text" }
//             ]
// }

// case 'SOME_ACTION':
//   return update(state, { 
//     contents: { 
//       [action.id]: {
//         text: {$set: action.payload}
//       }
//     }
//   });
