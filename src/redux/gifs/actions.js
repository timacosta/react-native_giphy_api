import * as types from './types';
import * as api from '../../api';


export const setLoading = (loading = false) => {
    const action = {
        type: types.UPDATE_GIFS_LIST,
        payload: {loading: loading},
    };
    
    return action;
}

