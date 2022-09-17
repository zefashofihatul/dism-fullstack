import React, { useState, useEffect, useContext, createContext } from 'react';
import { getUser, loginWithEmailAndPassword, registerWithEmailAndPassword } from 'features/auth';
import storage from 'utils/storage';
import PropTypes from 'prop-types';
const authContext = createContext();

async function handleUserResponse(data) {
  const { refreshToken, user } = data;
  storage.setToken(refreshToken);
  return user;
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

ProvideAuth.propTypes = {
  children: PropTypes.element
};

export const useAuth = () => {
  return useContext(authContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const loadUser = async (data) => {
    if (storage.getToken()) {
      const response = await getUser();
      const userReponse = await handleUserResponse(response);
      return userReponse;
    }
    return null;
  };

  const checkToken = () => {
    // TODO : Checktoken with validate to Backend
    return storage.getToken();
  };

  const loginFn = async (data) => {
    try {
      const response = await loginWithEmailAndPassword(data);
      const userResponse = await handleUserResponse(response);
      return userResponse;
    } catch (err) {
      return err;
    }
  };

  const registerFn = async (data) => {
    try {
      const response = await registerWithEmailAndPassword(data);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const logoutFn = () => {
    storage.clearToken();
    setUser(false);
  };

  return {
    user,
    checkToken,
    loadUser,
    loginFn,
    registerFn,
    logoutFn
  };
};
