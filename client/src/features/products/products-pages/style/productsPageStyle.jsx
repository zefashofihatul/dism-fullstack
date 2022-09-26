import styled, { css } from 'styled-components';

export const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 8fr;
  /* grid-template-columns: 1fr; */
  background-color: #f1f1f1;
  box-sizing: border-box;
  margin: 0;
  @media only screen and (max-width: 1080px) {
    display: block;
  }
`;

export const DashboardSection = styled.div`
  background-color: white;
  box-sizing: border-box;
`;

export const HeaderDashboardSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const HeaderWrapper = styled.div``;

export const HeaderTitle = styled.h1`
  width: 100%;
  font-size: 80px;
  color: #2a2a2a;
  font-weight: 600;
  margin: 0;
`;

export const HeaderDescription = styled.h4`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: #2a2a2a;
  margin: 0;
`;

export const Line = styled.hr`
  background-color: black;
  height: 0.5px;
  border: 0;
`;

export const FilterInputWrapper = styled.div``;

export const MainDashboard = styled.div`
  padding: 32px;
`;

export const SideBarSection = styled.div`
  height: 100vh;
  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

export const SideBarContent = styled.div`
  height: 100vh;
  padding: 32px 32px;
  position: fixed;
`;

export const BrandLogo = styled.span`
  font-size: 20px;
  font-weight: 800;
  margin: 0;
`;

export const NavigationWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Navigation = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  ${(props) =>
    props.active
      ? css`
          background-color: white;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
        `
      : ''}
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 16px;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 700;
  width: 120px;
`;

export const TotalContent = styled.span`
  font-size: 14px;
  font-weight: 700;
  display: block;
  color: #707070;
  align-self: flex-end;
`;

export const HeaderSettingTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 12px 0;
`;

export const SettingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
