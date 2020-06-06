import React from 'react';
import { FiSettings, FiType } from 'react-icons/all';
import { MenuItem } from '../Layout/models/Menu.model';


export function getEyeTrainerMenu(match: string): MenuItem[] {
  return [
    {
      to: `${match}/alphabet`,
      icon: <FiType />
    },
    {
      to: `${match}/settings`,
      icon: <FiSettings />
    },
  ];
}
