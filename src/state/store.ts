import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ReduxThunk from 'redux-thunk';
import { configReducer } from './config.reducer';

const reducers = {
  config: configReducer,
};

export const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);
