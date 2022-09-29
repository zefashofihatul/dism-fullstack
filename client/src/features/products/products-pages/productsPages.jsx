import { useNavigate } from 'react-router-dom';
import { ProductsTable } from '../products-table/ProductsTable';
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
  SideBarSection
} from './style/productsPageStyle';
import { ModalFixed } from 'components/Modal';
import cartIcon from 'assets/images/cart_icon.svg';
import orderIcon from 'assets/images/order_icon.svg';
import userIcon from 'assets/images/user_icon.svg';
import walletIcon from 'assets/images/wallet_icon.svg';
import { ProductForm } from '../products-form';
import { useEffect, useState } from 'react';
import { useProducts } from '../providers/ProductsProviders';
import { ProductsHeaderTable, ProductsSettingTable } from '../products-table';
export const ProductsPages = () => {
  const navigate = useNavigate();
  const {
    fetchProductsFn,
    showProductForm,
    setShowProductForm,
    setCategory,
    products,
    setProducts,
    productSetting,
    setProductSetting
  } = useProducts();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState({
    show: false,
    message: '',
    status: ''
  });

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
      {showProductForm.show && (
        <ProductForm
          onSuccess={successHandle}
          onFail={failHandle}
          showForm={showForm}
          setShowForm={setShowForm}
          productValue={showProductForm.productValue}
          setShowModal={setShowModal}
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
          <ProductsHeaderTable
            name="Products"
            setShowForm={setShowForm}
            products={products}
            setProducts={setProducts}
            setProductSetting={setProductSetting}
            productSetting={productSetting}
          />
          <ProductsSettingTable />
          <ProductsTable products={products} loading={loading} />
        </MainDashboard>
      </DashboardSection>
    </DashboardWrapper>
  );
};
