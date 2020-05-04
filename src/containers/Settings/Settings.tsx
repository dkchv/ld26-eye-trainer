import React, { useCallback } from 'react';
import { ConfigUpdate } from '../../state/config.action';
import { TrainerMetaMap, TrainerTypes } from '../../models/Trainer.model';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectConfigStore } from '../../state/config.selectors';

export function Settings() {
  const dispatch = useDispatch();
  const config = useSelector(selectConfigStore);

  const handleTypeSelect = useCallback((e) => {

    dispatch(ConfigUpdate({
      type: e.target.value,
    }))
  }, [dispatch]);

  const handleSpeedChange = useCallback((e) => {
    dispatch(ConfigUpdate({
      speed: Number(e.target.value) * 1000,
    }))
  }, [dispatch]);

  return (
    <div>
      {/* type */}
      <div className='row'>
        <div className='row fs-small'>Тип тренировки:</div>
        <div className='row'>
          {Object.keys(TrainerTypes).map((item) => {
            const meta = TrainerMetaMap[item];
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
      {/* speed */}
      <div className='row'>
        <div className='row fs-small'>Скорость движения (сек)</div>
        <div className='row'>
          <input type='number' min='0' max='5' step='0.1' value={config.speed / 1000} onChange={handleSpeedChange} />
        </div>
      </div>
    </div>
  );
}
