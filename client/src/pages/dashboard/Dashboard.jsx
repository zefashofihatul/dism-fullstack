// import { useNavigate } from 'react-router';
import { useAuth } from 'lib/auth';
import { Authorization, ROLES } from 'lib/authorization';

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="dashboard">
        <h1>Ini adalah Dashboard Page</h1>
        <h2>{user.username}</h2>
        <h2>{user.email}</h2>
        <Authorization
          forbiddenFallback={<div>Only admin can view this</div>}
          allowedRoles={ROLES.USER}>
          <h1>Welcome Admin</h1>
        </Authorization>
      </div>
    </>
  );
};
