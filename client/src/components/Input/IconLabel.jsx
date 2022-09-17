import { IconLabelWrapper, Icon, LabelWrapper, Label, Placeholder } from './style/IconLabelStyle';
import PropTypes from 'prop-types';

export const InputIconLabel = ({ icon, label, children }) => {
  return (
    <IconLabelWrapper>
      <Icon src={icon} />
      <LabelWrapper>
        <Label>{label}</Label>
        <Placeholder>Default</Placeholder>
      </LabelWrapper>
    </IconLabelWrapper>
  );
};

InputIconLabel.propTypes = {
  icon: PropTypes.any,
  label: PropTypes.string,
  children: PropTypes.any
};
