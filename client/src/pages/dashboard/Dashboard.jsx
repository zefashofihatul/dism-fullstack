// import { useNavigate } from 'react-router';
import { useAuth } from 'lib/auth';
import { Authorization, ROLES } from 'lib/authorization';
import { useEffect } from 'react';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logoutFn } = useAuth();
  const handleLogout = () => {
    logoutFn();
  };
  return (
    <>
      <div className="dashboard">
        <h1>Ini adalah Dashboard Page</h1>
        <Button className="loginbutton" onClick={handleLogout}>
          Logout
        </Button>
        {/* <Authorization
          forbiddenFallback={<div>Only admin can view this</div>}
          allowedRoles={ROLES.USER}>
          <h1>Welcome Admin</h1>
        </Authorization> */}
      </div>
    </>
  );
};
