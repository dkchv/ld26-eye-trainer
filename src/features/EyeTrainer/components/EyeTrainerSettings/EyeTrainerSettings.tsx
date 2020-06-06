import React, { useCallback } from 'react';
import { appVersion } from '../../../App/models/App.model';
import { EyeTrainerConfigUpdate } from '../../state/EyeTrainer.action';
import { EyeTrainerMetaMap, EyeTrainerTypes } from '../../models/EyeTrainer.model';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectConfigStore } from '../../state/EyeTrainer.selectors';

export function EyeTrainerSettings() {
  const dispatch = useDispatch();
  const config = useSelector(selectConfigStore);

  const handleTypeSelect = useCallback((e) => {

    dispatch(EyeTrainerConfigUpdate({
      type: e.target.value,
    }))
  }, [dispatch]);

  const handleSpeedChange = useCallback((e) => {
    dispatch(EyeTrainerConfigUpdate({
      speed: Number(e.target.value),
    }))
  }, [dispatch]);

  return (
    <div className='fg-1'>
      {/* type */}
      <div className='row'>
        <div className='row fs-small'>Тип тренировки:</div>
        <div className='row'>
          {Object.keys(EyeTrainerTypes).map((item) => {
            const meta = EyeTrainerMetaMap[item];
            return (
              <div key={item} className='row'>
                <label className={classNames('d-flex ai-center pointer', {
                  isActive: item === config.type,
                })}>
                  <input
                    className='col-05 fg-0'
                    checked={config.type === item}
                    type='radio'
                    value={item}
                    onChange={handleTypeSelect}
                    disabled={meta.disabled === true}
                  />
                  <div className='col-05 fg-1'>{meta.header}</div>
                </label>
              </div>
            )
          })}
        </div>
      </div>
      <div className='row divider' />
      {/* speed */}
      <div className='row'>
        <div className='row fs-small'>Скорость движения (мс)</div>
        <div className='row'>
          <input type='number' min='0' max='5000' step='500' value={config.speed} onChange={handleSpeedChange} />
        </div>
      </div>
      <div className='row divider' />
      <div className='row color-gray fs-small'>
        App version: {appVersion}
      </div>
    </div>
  );
}
