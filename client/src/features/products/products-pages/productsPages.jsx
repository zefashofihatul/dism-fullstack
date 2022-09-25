import { useAuth } from 'features/auth/providers';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'components/Nav';
import { Table } from 'components/Table';
import {
  DashboardSection,
  DashboardWrapper,
  MainDashboard,
  SideBarContent,
  BrandLogo,
  Icon,
  NavigationWrapper,
  Navigation,
  Label,
  SideBarSection,
  TotalContent,
  HeaderSettingTable
} from './style/productsPageStyle';
import { ModalFixed } from 'components/Modal';
import { HeaderTable } from 'components/Table/HeaderTable';
import cartIcon from 'assets/images/cart_icon.svg';
import orderIcon from 'assets/images/order_icon.svg';
import userIcon from 'assets/images/user_icon.svg';
import walletIcon from 'assets/images/wallet_icon.svg';
import { ProductForm } from '../products-form';
import { useEffect, useState } from 'react';
import { useProducts } from '../providers/ProductsProviders';
import { InputCount } from 'components/Input/InputCount';

export const ProductsPages = () => {
  const { fetchProductsFn } = useProducts();
  const navigate = useNavigate();
  const [products, setProducts] = useState({ total: 0, page: 0, size: 0, products: [] });
  const [productSetting, setProductSetting] = useState({
    page: 0,
    size: 10
  });
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState({
    show: false,
    message: '',
    status: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProductsFn(productSetting).then((value) => {
      setLoading(false);
      setProducts(value.data);
    });
  }, []);

  const successHandle = (data) => {
    console.log(data);
    navigate('/dashboard/products');
    setShowModal({
      show: true,
      message: 'Adding Product Success',
      status: 'success'
    });
    fetchProductsFn(productSetting).then((value) => {
      setProducts(value.data);
    });
  };

  const failHandle = (err) => {
    console.log(err);
    setShowModal({
      show: true,
      message: err.message,
      status: 'fail'
    });
  };

  return (
    <DashboardWrapper>
      {showModal.show ? (
        <ModalFixed setShowModal={setShowModal} timer={4000} color={showModal.status}>
          {showModal.message}
        </ModalFixed>
      ) : (
        <></>
      )}
      {showForm && (
        <ProductForm
          onSuccess={successHandle}
          onFail={failHandle}
          showForm={showForm}
          setShowForm={setShowForm}
          setProductSetting={setProductSetting}
          productSetting={productSetting}
        />
      )}
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
          <HeaderTable
            setShowForm={setShowForm}
            products={products}
            setProducts={setProducts}
            setProductSetting={setProductSetting}
            productSetting={productSetting}
          />
          <HeaderSettingTable>
            <TotalContent>
              Total {products.total} - Products [{products.page * products.size} -{' '}
              {products.page * products.size + products.products.length}]
            </TotalContent>
            <InputCount
              label="Page"
              disable={products.total < products.size ? true : false}
              leftDisable={products.page == 1 ? false : true}
              rightDisable={
                products.total / (productSetting.size * (productSetting.page + 1)) < 1
                  ? true
                  : false
              }
              onClick={{
                left: () => {
                  if (productSetting.page > 0) {
                    setProductSetting({
                      page:
                        productSetting.page >= 1 ? productSetting.page - 1 : productSetting.page,
                      size: productSetting.size
                    });
                    fetchProductsFn({
                      page:
                        productSetting.page >= 1 ? productSetting.page - 1 : productSetting.page,
                      size: productSetting.size
                    }).then((value) => {
                      setProducts(value.data);
                    });
                  }
                },
                right: () => {
                  if (products.total / (productSetting.size * (productSetting.page + 1)) > 1) {
                    console.log(products.total / (productSetting.size * (productSetting.page + 1)));
                    setProductSetting({
                      page: productSetting.page + 1,
                      size: productSetting.size
                    });
                    fetchProductsFn({
                      page: productSetting.page + 1,
                      size: productSetting.size
                    }).then((value) => {
                      setProducts(value.data);
                    });
                  }
                }
              }}
              setProductSetting={setProductSetting}
              productSetting={productSetting}>
              {productSetting.page + 1}
            </InputCount>
          </HeaderSettingTable>
          <Table
            data={products.products}
            page={products.page}
            column={products.size}
            loading={loading}
          />
        </MainDashboard>
      </DashboardSection>
    </DashboardWrapper>
  );
};