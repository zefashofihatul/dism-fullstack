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

export const ActionButton = ({ children }) => {
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
      <ButtonWrapper
        ref={myRef}
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
