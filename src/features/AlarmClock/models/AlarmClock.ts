
export interface AlarmClockConfig {
  initialDelay: number; // in ms
  volumeIncreaseTick: number; // in ms
  volumeIncreaseDelay: number; // in ms
  maxVolume: number; // in %, [0..100]
  // TODO @dkchv: config it
}
