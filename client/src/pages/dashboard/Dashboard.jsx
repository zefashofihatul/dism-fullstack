import { useAuth } from 'features/auth/providers';
import { Authorization, ROLES } from 'features/authorization';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router';
import { Nav } from 'components/Nav';
import { Table } from 'components/Table';
import {
  DashboardSection,
  DashboardWrapper,
  MainDashboard,
  SideBarSection,
  BrandLogo,
  Icon,
  NavigationWrapper,
  Navigation,
  Label,
  SideBarContent
} from './style/dashboardStyle';
import { HeaderTable } from 'components/Table/HeaderTable';
import { dummyContent } from 'features/products/dummyData';
import cartIcon from 'assets/images/cart_icon.svg';
import orderIcon from 'assets/images/order_icon.svg';
import userIcon from 'assets/images/user_icon.svg';
import walletIcon from 'assets/images/wallet_icon.svg';
import { ProductForm } from 'features/products/products-form';
import { useState } from 'react';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { logoutFn } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const handleLogout = () => {
    logoutFn();
    navigate('/auth/login');
  };
  return (
    <DashboardWrapper>
      <ProductForm showForm={showForm} setShowForm={setShowForm} />
      <SideBarSection>
        <SideBarContent>
          <BrandLogo>DISMSHOP</BrandLogo>
          <NavigationWrapper>
            <Navigation active={true}>
              <Icon src={cartIcon} />
              <Label>Products</Label>
            </Navigation>
            <Navigation>
              <Icon src={orderIcon} />
              <Label>Orders</Label>
            </Navigation>
            <Navigation>
              <Icon src={userIcon} />
              <Label>Customer</Label>
            </Navigation>
            <Navigation>
              <Icon src={walletIcon} />
              <Label>Payment</Label>
            </Navigation>
          </NavigationWrapper>
        </SideBarContent>
      </SideBarSection>
      <DashboardSection className="wrapper">
        <MainDashboard>
          <HeaderTable setShowForm={setShowForm} />
          <Table data={dummyContent} />
        </MainDashboard>
      </DashboardSection>
    </DashboardWrapper>
  );
};
