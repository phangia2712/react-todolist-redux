import * as types from '../constants/actionTypes';
import * as configs from '../constants/configs';
import { remove } from 'lodash';

let defaultState = [];
defaultState = localStorage.getItem(configs.CART_FROM_LOCAL_STOGARE) ? JSON.parse(localStorage.getItem(configs.CART_FROM_LOCAL_STOGARE)) : defaultState;

function getPositionProduct (arr, product){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].product.id === product.id){
            return i;
        }
    }
    return -1;
}

const shopping_cart_list = (state = defaultState, action) => {
    let { type, product, quantity, idProduct } = action;
    let position = -1;
    switch(type) {
        case types.BUY_PRODUCT:
            console.log(action);
            /* 
            Cach nay khong dc, khi mua 1 san pham moi, thi add ok
            Nhung khi mua them 1 san pham khac, thi no show ra so luong ko dung
            No lam double so luong len
            Vi khi trong vong lap for, state push xong se lam mang state tang len
            roi no lai chay vao xet for tiep, luc nay thay id product === nhau
            nen lai tang tiep cho so luong
            if(state.length > 0) {
                for( let i = 0; i < state.length; i++){
                    if(state[i].product.id === product.id){
                        state[i].quantity += quantity;
                    } else{
                        state.push({
                            product,
                            quantity
                        })
                    }
                }
            } else{
                console.log('luc array rong');
                state.push({
                    product,
                    quantity
                })
            } */

            position = getPositionProduct(state, product);
                if(position > -1){
                    state[position].quantity += quantity
                    
                } else{
                    state.push({
                        product,
                        quantity
                    })
                }
            
            localStorage.setItem(configs.CART_FROM_LOCAL_STOGARE, JSON.stringify(state))
            return [...state];
        case types.DELETE_PRODUCT:
            console.log(action);
            remove(state, function(n) {
                return n.product.id === idProduct;
              });
            localStorage.setItem(configs.CART_FROM_LOCAL_STOGARE, JSON.stringify(state))
            return [...state];
        case types.UPDATE_PRODUCT:
            console.log('action',action);
            position = getPositionProduct(state, product);
            if(position > -1){
                state[position].quantity = quantity
            }
            localStorage.setItem(configs.CART_FROM_LOCAL_STOGARE, JSON.stringify(state))
            return [...state];
        default:
            return state;
    }
}

export default shopping_cart_list;
