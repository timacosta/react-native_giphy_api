import {Alert} from 'react-native';

import * as types from './types';
import * as api from '../../api';
import colors from '../../assets/colors';


export const setLoading = (loading = false) => {
    const action = {
        type: types.UPDATE_GIFS_LOADING,
        payload: {loading},
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
    return async (dispatch) => {
        try{
            dispatch(setLoading(true));
            const response = await api.getTrendGifs();
            console.log(response.data.data);
            const list = response.data?.data || [];
            dispatch(setList(list))
        } catch(e) { 
            console.log(e);
            Alert.alert('Error', e.message || 'An error ocurred')
        } finally {
            dispatch(setLoading(false));
        } 
    };

};

export const createGif = (gif) => {
    return async (dispatch, getState) => {
        try{
            const response = await api.createGif(gif);
            console.log(response.data);
            dispatch(setItem(response.data));
        } catch(e) { 
            console.log(e);
            Alert.alert('Error', e.message || 'An error occurred')
        }
    };
}

