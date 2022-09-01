import React, { useState, useEffect, useContext, createContext } from 'react';
import { loginWithEmailAndPassword, registerWithEmailAndPassword } from 'features/auth';
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

  const loginFn = async (data) => {
    const response = await loginWithEmailAndPassword(data);
    const userResponse = await handleUserResponse(response.data);
    setUser(userResponse);
    return userResponse;
  };

  const registerFn = async (data) => {
    const response = await registerWithEmailAndPassword(data);
    return response.data;
  };

  const logoutFn = async () => {
    storage.clearToken();
    setUser(false);
    window.location.assign(window.location.origin);
  };

  return {
    user,
    loginFn,
    registerFn,
    logoutFn
  };
};
