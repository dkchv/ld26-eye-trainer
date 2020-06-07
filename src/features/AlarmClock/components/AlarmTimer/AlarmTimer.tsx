import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLayout } from 'features/Layout';
import { useSelector } from 'react-redux';
import { start } from 'repl';
import { selectAlarmStore } from '../../state/Alarm.selectors';

const TestMp3 = require('../../assets/test.mp3');

export function AlarmTimer() {
  const settings = useSelector(selectAlarmStore);
  const [ volume, setVolume ] = useState<number>(0);
  const [ isStarted, setIsStarted ] = useState<boolean>(false);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const audioRef = useRef();
  const [ media, setMedia ] = useState<any>(null);
  // const [startTime, setStartTime] = useState<number>(0);
  const [ volumeIncreaseTimer, setVolumeIncreaseTimer ] = useState();

  const handleAudioPlay = useCallback((path) => {
    console.log('--play');
    let startTime = 0;
    // init
    const audio = new Audio(path);
    audio.volume = volume;
    setMedia(audio);

    const handleVolumeIncrease = () => {
      const now = (new Date()).getTime() - startTime;
      const finish = settings.volumeIncreaseDelay;
      console.log('--now', now / finish);
      audio.volume = Math.min(now / finish, 1);
      if (now <= finish) {
        setTimeout(handleVolumeIncrease, settings.volumeIncreaseTick);
      }
    };

    const handleAudioLoaded = async () => {
      setIsLoaded(true);
      startTime = (new Date()).getTime();
      console.log('--loaded', startTime);
      await audio.play();
      console.log('--loaded2');
      handleVolumeIncrease();
    };
    // load
    audio.addEventListener('loadedmetadata', handleAudioLoaded);

    return () => {
      setMedia(null);
      audio.removeEventListener('loadedmetadata', handleAudioLoaded);
    };
  }, [ settings ]);

  const handleStart = useCallback(() => {
    console.log('--started');
    setVolume(0);
    setIsStarted(true);
  }, []);

  useEffect(() => {
    if (isStarted) {
      handleAudioPlay(TestMp3);
    }
  }, [ isStarted, handleAudioPlay ]);

  useEffect(() => {
    const timer = setTimeout(handleStart, settings.initialDelay);
    return () => clearTimeout(timer);
  }, [ handleStart, settings ]);

  useLayout({
    isTopBar: false,
  });

  return (
    <div>
      <div className='row'>Timer</div>
      {/*<audio src={TestMp3} controls onLoadedData={handleAudioLoaded} />*/}
    </div>
  );
}
