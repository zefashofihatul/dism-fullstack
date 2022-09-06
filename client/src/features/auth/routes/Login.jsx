import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import {
  AuthContent,
  FormTitle,
  Main,
  Line,
  TitleWrapper,
  Title,
  Description
} from '../styles/login';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <AuthContent>
        <TitleWrapper>
          <Title>DSIN</Title>
          <Description>FURNITURE AGENCY</Description>
        </TitleWrapper>
        <Line />
        <FormTitle>Login</FormTitle>
        <LoginForm onSuccess={() => navigate('/dashboard')} />
      </AuthContent>
    </Main>
  );
};
