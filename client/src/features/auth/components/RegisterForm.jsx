import * as React from 'react';
import { Link } from 'react-router-dom';
import { Form, InputField } from 'components/Form';
import { Button } from 'components/Button';
import PropTypes from 'prop-types';
import { useAuth } from 'lib/auth';

export const RegisterForm = ({ onSuccess }) => {
  const { registerFn } = useAuth();
  return (
    <Form
      onSubmit={async (values) => {
        const result = await registerFn(values);
        console.log(result);
        onSuccess();
      }}
      options={{
        shouldUnregister: true
      }}>
      {({ register, formState }) => (
        <>
          <InputField
            type="text"
            label="idRole"
            error={formState.errors['idRole']}
            registration={register('idRole')}
          />
          <InputField
            type="text"
            label="username"
            error={formState.errors['username']}
            registration={register('username')}
          />
          <InputField
            type="text"
            label="email"
            error={formState.errors['email']}
            registration={register('email')}
          />
          <InputField
            type="text"
            label="password"
            error={formState.errors['password']}
            registration={register('password')}
          />
          <Button type="submit" className="button-full">
            Register
          </Button>
        </>
      )}
    </Form>
  );
};

RegisterForm.propTypes = {
  onSuccess: PropTypes.func
};
