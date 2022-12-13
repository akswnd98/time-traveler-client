import React from 'react';

export interface ItemsProps {
  icon: React.ReactElement;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
