import * as types from './mutation-types';

export default {
    /**
     * 
     * @param {*} state 
     * @param {Object} product 
     * @param {Array} cartItems 
     */
    [types.ADD_TO_CART](state, product, cartItems) {
        // console.log(this.state.cart.items);
        // console.log(product);
        this.state.cart.items.push({...product});
    }
}