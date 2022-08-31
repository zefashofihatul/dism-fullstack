import { useNavigate } from 'react-router';
import { RegisterForm } from '../components/RegisterForm';

export const Register = () => {
  const navigate = useNavigate();
  return <RegisterForm />;
};
