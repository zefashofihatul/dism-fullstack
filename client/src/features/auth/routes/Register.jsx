import { useState } from 'react';
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
import { Modal } from '../components/Modal';

export const Register = () => {
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
          <FormTitle>Register</FormTitle>
          <RegisterForm onSuccess={() => navigate('/auth/login')} onFail={failHandle} />
        </AuthContent>
      </Main>
    </>
  );
};
