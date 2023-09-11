import PropTypes from 'prop-types';
import { JSX } from 'react';

interface Props {
  state: 'click-left' | 'click-right' | 'idle';
  className: any;
}

export const Joystick = ({ state, className }: Props): JSX.Element => {
  return (
    <div className={className}>
      <div className="h-fit w-fit">
        {['idle'].includes(state) && (
          <object type="image/svg+xml" data="/assets/joystickIdle.svg" />
        )}
        {['click-left'].includes(state) && (
          <object type="image/svg+xml" data="/assets/joystickLeft.svg" />
        )}
        {['click-right'].includes(state) && (
          <object type="image/svg+xml" data="/assets/joystickRight.svg" />
        )}
      </div>
    </div>
  );
};

Joystick.propTypes = {
  state: PropTypes.oneOf(['click-left', 'click-right', 'idle']),
};
