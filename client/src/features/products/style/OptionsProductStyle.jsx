import styled, { css } from 'styled-components';

export const OptionProductWrapper = styled.div`
  width: 100%;
  padding: 1.7rem 1.6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 0.1rem solid black;
  margin-top: 3rem;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Option = styled.span`
  border: 0.1rem solid #321e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #321e1e;
  ${(props) =>
    props.className == 'filled'
      ? css`
          font-weight: 600;
          background-color: #321e1e;
          color: #fff;
        `
      : 'font-weight: 600;'}
  padding: 0.6rem 1.2rem;
  border-radius: 8rem;
  font-size: 0.9rem;
  cursor: pointer;
`;
