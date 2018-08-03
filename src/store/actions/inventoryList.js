import { SET_INVENTORY_LIST, SET_QUERY } from './actionTypes';
import { uiStartLoading, uiStopLoading } from './index';


export const getTotalInventoryList = () => {
    return dispatch => {
        dispatch(uiStartLoading());
        const url = 'http://52.230.124.246:60823/saas6updated/mobile/product';

        fetch(url, {
            method: 'GET',
            // body: JSON.stringify({
            //     email: authData.email,
            //     password: authData.password,
            //     returnSecureToken: true
            // }),
            // headers: {
            //     "Content-Type": "application/json"
            // }
        })
            .catch(err => {
                console.log(err);
                alert('Something went wrong, Please try again later');
            })
            .then(res => res.json())
            .then(parsedRes => {
                // console.log(parsedRes);
                return parsedRes.products;
            })
            .then(products => {
                const list = [];
                let unit = 0;
                let value = 0;
                for (let i = 0; i < products.length; i++) {
                    list.push({
                        name: products[i].name,
                        unit: products[i].unit,
                        value: products[i].value,
                        color: products[i].color,
                        id: products[i].id,
                    });

                    unit = products.reduce((cnt, product) => {
                        return cnt + parseInt(product.unit, 10);
                    }, 0);

                    value = products.reduce((cnt, product) => {
                        return cnt + parseInt(product.value, 10);
                    }, 0);
                }
                console.log(list);
                console.log(unit);
                console.log(value);
                dispatch(setInventoryList(list, unit, value));
                dispatch(uiStopLoading());
            });
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
