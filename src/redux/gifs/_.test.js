import * as actions from './actions';
import {createStore} from 'redux';
import reducer, {initialState} from './reducer';

describe('gif  actions test', () => {
  test('setLoading', () => {
    const store = createStore(reducer);

    expect(store.getState().loading).toEqual(initialState.loading);

    store.dispatch(actions.setLoading(true));
    expect(store.getState().loading).toBeTruthy();

    store.dispatch(actions.setLoading(false));
    expect(store.getState().loading).toBeFalsy();
  });
});