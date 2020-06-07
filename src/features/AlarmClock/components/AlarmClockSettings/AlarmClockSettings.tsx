import { useLayout } from 'features/Layout';
import { Button } from 'features/UI';
import React from 'react';
import { useForm } from 'react-hook-form';

export function AlarmClockSettings() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  useLayout({
    title: 'Alarm settings',
    isTopBar: true,
  });

  return (
    <div className='fg-1 d-flex fd-column'>
      <div className='row fg-1 scroll-y inset-right'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input name="example" defaultValue="test" ref={register} />

          {/* include validation with required or other standard HTML validation rules */}
          <input name="exampleRequired" ref={register({ required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>

      <div className='row fg-0 fsh-0 d-flex fd-column'>
        <div className='row divider' />
        <div className='row d-flex jc-between'>
          <div className='col'>
            <Button color='secondary' to='/alarm-clock'>← Intro</Button>
          </div>
          <div className='col'>
            <Button to='./sound-check'>Start →</Button>
          </div>
        </div>
      </div>
    </div>

  );
}
