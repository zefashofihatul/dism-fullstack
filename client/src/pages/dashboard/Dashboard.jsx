// import { useNavigate } from 'react-router';
import { useAuth } from 'lib/auth';

export const Dashboard = () => {
  // const navigate = useNavigate();
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <div className="dashboard">
        <h1>Ini adalah Dashboard Page</h1>
        <h2>{user.username}</h2>
        <h2>{user.email}</h2>
      </div>
    </>
  );
};
