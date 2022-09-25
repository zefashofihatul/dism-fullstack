import {
  IconLabelWrapper,
  Icon,
  LabelWrapper,
  DropdownWrapper,
  Label,
  Placeholder,
  DropdownList,
  ListContent,
  MainWrapper
} from './style/IconLabelStyle';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

export const ListIconLabel = ({ children }) => {
  return (
    <DropdownList content={children} onClick={() => {}}>
      <ListContent content={children}>{children}</ListContent>
    </DropdownList>
  );
};

ListIconLabel.propTypes = {
  children: PropTypes.any
};

export const InputIconLabel = ({ icon, label, children }) => {
  const [expand, setExpand] = useState(false);
  const [filter, setFilter] = useState('');
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
  return (
    <MainWrapper ref={myRef}>
      <IconLabelWrapper onClick={handleClickInside}>
        <Icon src={icon} />
        <LabelWrapper>
          <Label>{label}</Label>
          <Placeholder>{filter != '' ? filter : 'Default'}</Placeholder>
        </LabelWrapper>
      </IconLabelWrapper>
      {expand && (
        <DropdownWrapper
          onClick={(e) => {
            const content = e.target.attributes.content.value;
            setFilter(content);
            setExpand(false);
          }}>
          {children}
        </DropdownWrapper>
      )}
    </MainWrapper>
  );
};

InputIconLabel.propTypes = {
  icon: PropTypes.any,
  label: PropTypes.string,
  children: PropTypes.any
};
