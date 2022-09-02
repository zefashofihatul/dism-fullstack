// import { useNavigate } from 'react-router';
import { useAuth } from 'lib/auth';

export const Forbidden = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div className="forbidden">
        <h1>Forbidden: Cannot access this page</h1>
      </div>
    </>
  );
};
