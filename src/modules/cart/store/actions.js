import * as types from './mutation-types';

export default {
    addItem({commit}, item) {
        commit(types.ADD_ITEM, item);
    },
    removeItem({commit}, itemId) {
        commit(types.REMOVE_ITEM, itemId);
    }
}