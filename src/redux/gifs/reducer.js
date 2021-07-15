import * as types from "./types"

export const initialState = {
    loading: false,
    list: [],
    item: null,
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.UPDATE_GIFS_LIST:
            const newState = {...state, list: action.payload?.list};
            return newState;

        default:
            return state;
    }
};

export default reducer;