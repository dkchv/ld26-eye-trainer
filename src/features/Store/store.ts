import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ReduxThunk from 'redux-thunk';
import { alarmClockReducer } from '../AlarmClock/state/AlarmClock.reducer';
import { ALARM_CLOCK_STORE_KEY } from '../AlarmClock/state/AlarmClock.store';
import { eyeTrainerReducer } from '../EyeTrainer/state/EyeTrainer.reducer';
import { EYE_TRAINER_STORE_KEY } from '../EyeTrainer/state/EyeTrainer.store';

const reducers = {
  [EYE_TRAINER_STORE_KEY]: eyeTrainerReducer,
  [ALARM_CLOCK_STORE_KEY]: alarmClockReducer,
};

export const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);
