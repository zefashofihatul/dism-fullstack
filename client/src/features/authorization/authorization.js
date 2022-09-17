import * as React from 'react';
import { useAuth } from 'features/auth/providers';
import PropTypes from 'prop-types';

export const ROLES = {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export const useAuthorization = () => {
  const { user } = useAuth();
  const role = ['ADMIN', 'USER'];

  if (!user) {
    throw Error('User does not exist!');
  }

  const checkAccess = React.useCallback(
    ({ allowedRoles }) => {
      if (allowedRoles && allowedRoles.length > 0) {
        return allowedRoles?.includes(role[parseInt(user.idRole)]);
      }
      return true;
    },
    [user.role]
  );

  return { checkAccess, role: user.role };
};

export const Authorization = ({ allowedRoles, forbiddenFallback = null, children }) => {
  const { checkAccess } = useAuthorization();

  let canAccess = false;

  if (allowedRoles) {
    canAccess = checkAccess({ allowedRoles });
  }

  return <>{canAccess ? children : forbiddenFallback}</>;
};

Authorization.propTypes = {
  allowedRoles: PropTypes.string,
  forbiddenFallback: PropTypes.element,
  children: PropTypes.element
};
