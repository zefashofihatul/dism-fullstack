import { SwitchBox, SwitchBoxLabel, SwitchWrapper } from './style/SwitchStyle';
import PropTypes from 'prop-types';

export const Switch = ({ option1, option2, handleClick }) => {
  const handleSwitch = (e) => {
    handleClick(e);
  };
  return (
    <SwitchWrapper>
      <SwitchBox option2={option2} onClick={handleSwitch} id="checkbox" type="checkbox" />
      <SwitchBoxLabel option1={option1} htmlFor="checkbox" />
    </SwitchWrapper>
  );
};

Switch.propTypes = {
  option1: PropTypes.string,
  option2: PropTypes.string,
  handleClick: PropTypes.func
};
