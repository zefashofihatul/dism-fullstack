import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import cartStorage from 'features/carts/stores/cartStorage';

const cartContext = createContext();

export const ProvideCart = ({ children }) => {
  const cart = useProvideCart();
  return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
};

export const useCart = () => {
  return useContext(cartContext);
};

export const useProvideCart = () => {
  const [cart, setCart] = useState(cartStorage.getCart() || []);

  const getCart = () => {
    return cart;
  };

  const addProductCart = (data) => {
    if (!getCart().find((value) => value.id == data.id)) {
      const dataInput = [
        ...getCart(),
        {
          id: data.id,
          title: data.title,
          price: data.price,
          image1: data.image1,
          image2: data.image2,
          description: data.description,
          badge: data.badge || null
        }
      ];
      setCart(dataInput);
      cartStorage.setCart(dataInput);
    } else {
      // Add modal pop-up
    }
  };

  const removeItemCart = (id) => {
    const carts = getCart();
    const cartReturn = [];
    carts.forEach((value) => {
      if (value.id !== id) {
        cartReturn.push(value);
      }
    });
    setCart(cartReturn);
    cartStorage.setCart(cartReturn);
  };

  const removeAllCart = () => {
    cartStorage.clearCart();
    setCart([]);
  };

  return {
    getCart,
    addProductCart,
    removeItemCart,
    removeAllCart
  };
};

ProvideCart.propTypes = {
  children: PropTypes.element
};
