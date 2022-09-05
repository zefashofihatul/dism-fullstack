import * as React from 'react';
import * as z from 'zod';
import { InputField, Form } from 'components/Form';
import { Button } from 'components/Button';
import { useAuth } from 'lib/auth';
import PropTypes from 'prop-types';

const schema = z.object({
  email: z.number().min(1, 'Required'),
  password: z.string().min(1, 'Required')
});

export const LoginForm = ({ onSuccess }) => {
  const { loginFn } = useAuth();
  return (
    <Form
      onSubmit={async (values) => {
        await loginFn(values);
        onSuccess();
      }}
      options={{ shouldUnregister: false }}
      schema={schema}>
      {({ register, formState }) => (
        <>
          <InputField
            label="Email Address"
            error={formState.errors['email']}
            registration={register('email')}
          />
          <InputField
            type="password"
            label="Password"
            error={formState.errors['password']}
            registration={register('password')}
          />
          <Button type="submit" className="loginbutton">
            Log In
          </Button>
        </>
      )}
    </Form>
  );
};

LoginForm.propTypes = {
  onSuccess: PropTypes.func
};
