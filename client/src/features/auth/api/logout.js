const { default: storage } = require('utils/storage');

export const logout = () => {
  storage.clearToken();
};
