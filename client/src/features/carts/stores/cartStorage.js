const storagePrefix = 'dism_react_';

const cartStorage = {
  getCart: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}carts`));
  },
  setCart: (data) => {
    window.localStorage.setItem(`${storagePrefix}carts`, JSON.stringify(data));
  },
  clearCart: () => {
    window.localStorage.removeItem(`${storagePrefix}carts`);
  }
};

export default cartStorage;
