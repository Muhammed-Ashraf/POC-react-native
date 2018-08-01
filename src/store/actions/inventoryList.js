
import { SET_INVENTORY_LIST } from './actionTypes';

export const getTotalInventoryList = () => {
    return dispatch => {
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
                for (let i = 0; i < products.length; i++) {
                    list.push({
                        unit: products[i].unit,
                        value: products[i].value,
                        color: products[i].color,
                        id: products[i].id,
                    });
                }
                console.log(list);
                // dispatch(setPlaces(places));
            });
    };
};
