import PropTypes from 'prop-types';
import {
  ButtonWrapper,
  TitleAction,
  ArrowIcon,
  ActionExpandWrapper,
  Option
} from './style/ActionButtonStyle';
import arrow from 'assets/images/arrow.svg';
import { useRef, useState } from 'react';
import { getSiblings } from 'utils/cursorUtils';
import { useEffect } from 'react';

export const OptionAction = ({ children, onClick }) => {
  const [active, setActive] = useState(false);
  return (
    <Option active={active} onClick={() => onClick({ setActive, active })}>
      <TitleAction>{children}</TitleAction>
    </Option>
  );
};

OptionAction.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func
};

export const ActionButton = ({ children, actions }) => {
  const [expand, setExpand] = useState(false);
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setExpand(false);
    }
  };

  const handleClickInside = () => {
    setExpand(!expand);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });
  // TODO : Collapse other button expand
  return (
    <>
      <ButtonWrapper ref={myRef} className="action-button" onClick={handleClickInside}>
        <TitleAction>Action</TitleAction>
        <ArrowIcon src={arrow} />
        <ActionExpandWrapper className={expand ? 'expand' : ''}>{children}</ActionExpandWrapper>
      </ButtonWrapper>
    </>
  );
};

ActionButton.propTypes = {
  children: PropTypes.any,
  actions: PropTypes.func
};
