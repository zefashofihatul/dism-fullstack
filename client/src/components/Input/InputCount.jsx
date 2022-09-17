import {
  Placeholder,
  Label,
  LabelWrapper,
  IconRight,
  IconLeft,
  InputCountWrapper
} from './style/InputCountStyle';
import ArrowLeftIcon from 'assets/images/arrow_left_icon.svg';
import ArrowRightIcon from 'assets/images/arrow_right_icon.svg';
import PropTypes from 'prop-types';

export const InputCount = ({ label, children }) => {
  return (
    <InputCountWrapper>
      <IconLeft src={ArrowLeftIcon} />
      <LabelWrapper>
        <Label>{label}</Label>
        <Placeholder>{children}</Placeholder>
      </LabelWrapper>
      <IconRight src={ArrowRightIcon} />
    </InputCountWrapper>
  );
};

InputCount.propTypes = {
  label: PropTypes.string,
  children: PropTypes.string
};
