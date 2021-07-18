import * as types from "./types"

export const initialState = {
    loading: false,
    list: [],
    item: null,
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.UPDATE_GIFS_LIST:
            return {
                ...state, 
                list: action.payload?.list,
            };
        case types.UPDATE_GIFS_LOADING:
            return {
                ...state, 
                loading: action.payload?.loading,
            };
        case types.UPDATE_GIFS_ITEM:
            return {
                ...state,
                item: action.payload?.item,
            };

        default:
            return state;
    }
};

export default reducer;