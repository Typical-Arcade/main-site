import PropTypes from 'prop-types';
import { JSX } from 'react';
import { IdleJoystick } from './idle';
import { RightJoystick } from './right';
import { LeftJoystick } from './left';

interface Props {
  state: 'click-left' | 'click-right' | 'idle';
  className: any;
}

export const Joystick = ({ state, className }: Props): JSX.Element => {
  return (
    <div className={className}>
      {state === 'idle' && <IdleJoystick />}
      {state === 'click-left' && <LeftJoystick />}
      {state === 'click-right' && <RightJoystick />}
    </div>
  );
};

Joystick.propTypes = {
  state: PropTypes.oneOf(['click-left', 'click-right', 'idle']),
};
