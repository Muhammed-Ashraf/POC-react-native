import { SET_INVENTORY_LIST, SET_QUERY, ADD_INVENTORY, SET_CHECKOUT_LIST, UPDATE_INVENTORY } from './actionTypes';
import { uiStartLoading, uiStopLoading } from './index';

import store from '../configureStore';

export const getTotalInventoryList = () => {
    return dispatch => {
        dispatch(uiStartLoading());
        const url = 'http://www.mocky.io/v2/5bfb870b3200006600bee4f9';

        // fetch(url, {
        //     method: 'PUT',
        //     // body: JSON.stringify({
        //     //     email: authData.email,
        //     //     password: authData.password,
        //     //     returnSecureToken: true
        //     // }),
        //     // headers: {
        //     //     "Content-Type": "application/json"
        //     // }
        // })
        //     .catch(err => {
        //         console.log(err);
        //         alert('Something went wrong, Please try again later');
        //     })
        //     .then(res => res.json())
        //     .then(parsedRes => {
        //         // console.log(parsedRes);
        //         return parsedRes.products;
        //     })
            // .then(products => {
                const productsList = {
                    "products": [
                      { "id": "1", "name": "Pen", "unit": "30", "value":"10", "color" : "blue"},
                     { "id": "2", "name": "Blade", "unit": "15", "value":"1", "color" : "orange"},
                     { "id": "3", "name": "Lays", "unit": "23", "value":"10", "color" : "red"},
                     { "id": "4", "name": "Kitkat", "unit": "32", "value":"10", "color" : "red"},
                     { "id": "5", "name": "Pepsi", "unit": "38", "value":"35", "color" : "red"},
                     { "id": "6", "name": "Tide", "unit": "34", "value":"20", "color" : "violet"},
                     { "id": "7", "name": "Tooth Paste", "unit": "17", "value":"20", "color" : "yellow"},
                     { "id": "8", "name": "Tooth Brush", "unit": "26", "value":"45", "color" : "yellow"},
                     { "id": "9", "name": "Soap", "unit": "24", "value":"29", "color" : "yellow"},
                     { "id": "10", "name": "Pencil", "unit": "12", "value":"5", "color" : "blue"},
                     { "id": "11", "name": "Oil", "unit": "13", "value":"25", "color" : "yellow"}
                    ]
                  };
                const list = [];
                let unit = 0;
                let value = 0;
                for (let i = 0; i < productsList.products.length; i++) {
                    list.push({
                        name: productsList.products[i].name,
                        unit: productsList.products[i].unit,
                        value: productsList.products[i].value,
                        color: productsList.products[i].color,
                        id: productsList.products[i].id,
                    });

                    unit = productsList.products.reduce((cnt, product) => {
                        return cnt + parseInt(product.unit, 10);
                    }, 0);

                    value = productsList.products.reduce((cnt, product) => {
                        return cnt + parseInt(product.value, 10);
                    }, 0);
                }
                console.log(list);
                console.log(unit);
                console.log(value);
                dispatch(setInventoryList(list, unit, value));
                dispatch(uiStopLoading());
            // });
    };
};

export const setInventoryList = (products, unt, val) => {
    return {
        type: SET_INVENTORY_LIST,
        inventoryList: products,
        unit: unt,
        value: val
    };
};

export const setQuery = (qry) => {
    return {
        type: SET_QUERY,
        query: qry
    };
};

export const addInventory = (nme, val, unt, clr, i) => {
    return {
        type: ADD_INVENTORY,
        name: nme,
        value: val,
        unit: unt,
        color: clr,
        id: i
    };
};

export const updateInventory = (nme, unt) => {
    return {
        type: UPDATE_INVENTORY,
        name: nme,
        unit: unt,
    };
};

export const someAction = () => {
    return {
        type: UPDATE_INVENTORY,
        checkoutList: store.getState().inventoryList.inventoryList,
    };
};

