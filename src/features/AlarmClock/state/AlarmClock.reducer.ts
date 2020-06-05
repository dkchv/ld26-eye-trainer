import { AlarmClockConfig } from '../models/AlarmClock';


const initialState: AlarmClockConfig = {
  initialDelay: 1000,
}

export function alarmClockReducer(state: AlarmClockConfig = initialState, action): AlarmClockConfig {
  return state;
}
