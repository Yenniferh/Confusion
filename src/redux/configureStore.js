import { createStore } from 'redux';
import { inicialState, Reducer } from './reducer';

export const ConfigureStore = () => {
  const store = createStore(Reducer, inicialState);

  return store;
};
