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
import { ModalFixed } from 'components/Modal';

import { dummyContent } from 'features/products/dummyData';
import cartIcon from 'assets/images/cart_icon.svg';
import orderIcon from 'assets/images/order_icon.svg';
import userIcon from 'assets/images/user_icon.svg';
import walletIcon from 'assets/images/wallet_icon.svg';
import { ProductForm } from 'features/products/products-form';
import { useEffect, useState } from 'react';
import { getProducts } from 'features/products/api';

export const Dashboard = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState({
    show: false,
    message: '',
    status: ''
  });

  return <></>;
};
