import React, { useState } from 'react';
import { Layout } from 'features/Layout';
import { getEyeTrainerMenu } from '../../EyeTrainer.menu';
import { useRouteMatch } from 'react-router-dom';
import { EyeTrainerRouter } from '../../EyeTrainer.router';

export function EyeTrainer() {
  const match = useRouteMatch();
  const [ menu ] = useState(getEyeTrainerMenu(match.url));

  console.log('--1', )
  
  return (
    <Layout title='Eye Trainer' menu={menu}>
      <EyeTrainerRouter match={match} />
    </Layout>
  )
}
