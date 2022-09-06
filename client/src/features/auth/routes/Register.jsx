import { useNavigate } from 'react-router';
import { RegisterForm } from '../components/RegisterForm';
import {
  AuthContent,
  FormTitle,
  Main,
  Line,
  TitleWrapper,
  Title,
  Description
} from '../styles/login';

export const Register = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <AuthContent>
        <TitleWrapper>
          <Title>DSIN</Title>
          <Description>FURNITURE AGENCY</Description>
        </TitleWrapper>
        <Line />
        <FormTitle>Register</FormTitle>
        <RegisterForm onSuccess={() => navigate('/auth/login')} />
      </AuthContent>
    </Main>
  );
};
