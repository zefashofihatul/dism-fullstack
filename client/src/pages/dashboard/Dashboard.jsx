import { useAuth } from 'lib/auth';
import { Authorization, ROLES } from 'lib/authorization';
import { GridContent } from 'features/products/GridContent';
import { ListContent } from 'features/products/ListContent';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router';
import { Nav } from 'components/Nav';
import { HeaderDashboard } from 'features/products/component/HeaderDashboard';
import { useState } from 'react';
import { DashboardSection } from './style/dashboardStyle';
export const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logoutFn } = useAuth();
  const [isListContent, setIsListContent] = useState(false);
  const handleLogout = () => {
    logoutFn();
    navigate('/auth/login');
  };
  const handleClick = (e) => {
    setIsListContent(!isListContent);
  };
  return (
    <>
      <Nav />
      <DashboardSection>
        <HeaderDashboard handleClick={handleClick} />
        {isListContent ? <ListContent /> : <GridContent />}
        <Button className="loginbutton" onClick={handleLogout}>
          Logout
        </Button>
      </DashboardSection>
    </>
  );
};
