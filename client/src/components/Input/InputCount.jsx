import {
  Placeholder,
  Label,
  LabelWrapper,
  IconRight,
  IconLeft,
  InputCountWrapper,
  IconWrapper
} from './style/InputCountStyle';
import ArrowLeftIcon from 'assets/images/arrow_left_icon.svg';
import ArrowRightIcon from 'assets/images/arrow_right_icon.svg';
import PropTypes from 'prop-types';

export const InputCount = ({ label, children, onClick, disable, leftDisable, rightDisable }) => {
  return (
    <InputCountWrapper disable={disable}>
      <IconWrapper onClick={onClick.left} disable={leftDisable}>
        <IconLeft src={ArrowLeftIcon} />
      </IconWrapper>
      <LabelWrapper>
        <Label>{label}</Label>
        <Placeholder>{children}</Placeholder>
      </LabelWrapper>
      <IconWrapper onClick={onClick.right} disable={rightDisable}>
        <IconRight src={ArrowRightIcon} />
      </IconWrapper>
    </InputCountWrapper>
  );
};

InputCount.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.object,
  disable: PropTypes.any,
  leftDisable: PropTypes.any,
  rightDisable: PropTypes.any
};
