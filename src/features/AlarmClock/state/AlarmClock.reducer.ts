import { AlarmClockConfig } from '../models/AlarmClock';


const initialState: AlarmClockConfig = {
  initialDelay: 1000,
  volumeIncreaseTick: 1000,
  volumeIncreaseDelay: 50000,
  maxVolume: 100,
}

export function alarmClockReducer(state: AlarmClockConfig = initialState, action): AlarmClockConfig {
  return state;
}
