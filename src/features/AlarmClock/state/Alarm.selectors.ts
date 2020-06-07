import { AlarmClockConfig } from '../models/AlarmClock';
import { ALARM_CLOCK_STORE_KEY } from './AlarmClock.store';

export const selectAlarmStore = (state): AlarmClockConfig => state[ALARM_CLOCK_STORE_KEY];
