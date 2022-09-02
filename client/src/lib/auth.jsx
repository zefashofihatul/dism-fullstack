import React, { useState, useEffect, useContext, createContext } from 'react';
import { initReactQueryAuth } from 'react-query-auth';
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
    const response = await loginWithEmailAndPassword(data);
    const userResponse = await handleUserResponse(response);
    setUser(userResponse);
    return userResponse;
  };

  const registerFn = async (data) => {
    const response = await registerWithEmailAndPassword(data);
    return response.data;
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
