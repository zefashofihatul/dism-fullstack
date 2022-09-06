import { useState } from 'react';
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
import { Modal } from '../components/Modal';

export const Login = () => {
  const [fail, setFail] = useState({
    status: false,
    message: ''
  });
  const navigate = useNavigate();
  const failHandle = (message) => {
    setFail({
      status: true,
      message
    });
  };
  return (
    <>
      {fail.status && <Modal>{fail.message}</Modal>}
      <Main>
        <AuthContent>
          <TitleWrapper>
            <Title>DSIN</Title>
            <Description>FURNITURE AGENCY</Description>
          </TitleWrapper>
          <Line />
          <FormTitle>Login</FormTitle>
          <LoginForm onSuccess={() => navigate('/dashboard')} onFail={failHandle} />
        </AuthContent>
      </Main>
    </>
  );
};
