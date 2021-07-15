import {Alert} from 'react-native';

import * as types from './types';
import * as api from '../../api';




export const setLoading = (loading = false) => {
    const action = {
        type: types.UPDATE_GIFS_LOADING,
        payload: {loading: loading},
    };
    
    return action;
}

export const setList = (list = []) => {
    const action = {
        type: types.UPDATE_GIFS_LIST,
        payload: {list},
    }
    return action;
}

export const setItem = item => {
    const action = {
        type: types.UPDATE_GIFS_ITEM,
        payload: {item},
    }

    return action;
}

export const getList = () => {
    return async (dispatch, getState) => {
        try{
            dispatch(setLoading(true));
            const getGifsResponse = await api.getTrendGifs();
            const list = getGifsResponse.data.records || [];
            const actionGenerated = setList(list);
            dispatch(actionGenerated)
        } catch(e) { 
            Alert.alert('Error', e.message || 'An error ocurred')
        } 
    };
}

