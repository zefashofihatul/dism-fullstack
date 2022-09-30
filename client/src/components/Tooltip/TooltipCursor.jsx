import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMousePos } from 'utils/cursorUtils';
import { CursorTooltipWrapper, CursorTooltipMain, Content } from './style/TooltipCursorStyle';

let mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', (ev) => (mouse = getMousePos(ev)));

export const TooltipCursor = ({ children, value = 'Badge' }) => {
  const [badge, setBadge] = useState(false);

  const Timer = {
    setup() {
      this.timeOut = setTimeout(() => {
        console.log('timer out');
        console.log(mouse);
        setBadge(true);
      }, 700);
    },
    cancel() {
      setBadge(false);
      clearTimeout(this.timeOut);
    }
  };

  return (
    <CursorTooltipMain onMouseEnter={(e) => Timer.setup()} onMouseLeave={(e) => Timer.cancel()}>
      {badge && (
        <CursorTooltipWrapper xPos={mouse.x} yPos={mouse.y}>
          {value}
        </CursorTooltipWrapper>
      )}
      {children}
    </CursorTooltipMain>
  );
};

TooltipCursor.propTypes = {
  children: PropTypes.any,
  value: PropTypes.string
};
