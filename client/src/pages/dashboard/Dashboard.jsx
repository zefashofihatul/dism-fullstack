import { useAuth } from 'features/auth/providers';
import { Authorization, ROLES } from 'features/authorization';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router';
import { Nav } from 'components/Nav';
import { Table } from 'components/Table';
import { DashboardSection, DashboardWrapper, MainDashboard } from './style/dashboardStyle';
import { HeaderTable } from 'components/Table/HeaderTable';
import { dummyContent } from 'features/products/dummyData';
export const Dashboard = () => {
  const navigate = useNavigate();
  const { logoutFn } = useAuth();
  const handleLogout = () => {
    logoutFn();
    navigate('/auth/login');
  };
  return (
    <DashboardWrapper>
      {/* <Nav /> */}
      <DashboardSection className="wrapper">
        <MainDashboard>
          <HeaderTable />
          <Table data={dummyContent} />
        </MainDashboard>
        {/* <Button className="loginbutton" onClick={handleLogout}>
          Logout
        </Button> */}
      </DashboardSection>
    </DashboardWrapper>
  );
};
