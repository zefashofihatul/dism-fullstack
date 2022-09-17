import PropTypes from 'prop-types';
import {
  ButtonWrapper,
  TitleAction,
  ArrowIcon,
  ActionExpandWrapper,
  Option
} from './style/ActionButtonStyle';
import arrow from 'assets/images/arrow.svg';
import { useState } from 'react';
import { getSiblings } from 'utils/cursorUtils';

export const ActionButton = ({ children }) => {
  const [expand, setExpand] = useState(false);
  // TODO : Collapse other button expand
  return (
    <>
      <ButtonWrapper
        className="action-button"
        onClick={() => {
          setExpand(!expand);
        }}>
        <TitleAction>Action</TitleAction>
        <ArrowIcon src={arrow} />
        <ActionExpandWrapper className={expand ? 'expand' : ''}>
          <Option active={true}>
            <TitleAction>Action</TitleAction>
          </Option>
          <Option>
            <TitleAction>Edit</TitleAction>
          </Option>
          <Option>
            <TitleAction>Activity</TitleAction>
          </Option>
        </ActionExpandWrapper>
      </ButtonWrapper>
    </>
  );
};

ActionButton.propTypes = {
  children: PropTypes.any
};
