// import { useNavigate } from 'react-router';
import { useAuth } from 'lib/auth';
import { Authorization, ROLES } from 'lib/authorization';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <>
      <div className="dashboard">
        <h1>Ini adalah Dashboard Page</h1>
        {/* <Authorization
          forbiddenFallback={<div>Only admin can view this</div>}
          allowedRoles={ROLES.USER}>
          <h1>Welcome Admin</h1>
        </Authorization> */}
      </div>
    </>
  );
};
