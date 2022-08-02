import * as types from './mutation-types';

export default {
    /**
     * 
     * @param {*} param0 
     * @param {*} product 
     */
    addToCart({state, commit, rootState}, product) {
        const cartItems = rootState.cart.items;
        // console.log(rootState.cart.items);
        commit(types.ADD_TO_CART, product, cartItems);
    }
}