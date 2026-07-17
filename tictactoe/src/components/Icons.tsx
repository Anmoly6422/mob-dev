import React from 'react';
import type { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({ name }: IconsProps) => {
  switch (name) {
    case 'circle':
      return (
        <Icon
          name="circle"
          size={58}
          color="#F59E0B"
          solid={false}
        />
      );

    case 'cross':
      return (
        <Icon
          name="times"
          size={58}
          color="#22C55E"
        />
      );

    default:
      return (
        <Icon
          name="plus"
          size={32}
          color="#64748B"
        />
      );
  }
};

export default Icons;