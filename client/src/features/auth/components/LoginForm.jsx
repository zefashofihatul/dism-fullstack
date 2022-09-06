import * as React from 'react';
import * as z from 'zod';
import { TextField, Form, CheckBoxField, LabelLink } from 'components/Form';
import { Button } from 'components/Button';
import { useAuth } from 'lib/auth';
import PropTypes from 'prop-types';

const schema = z.object({
  email: z.string().email('Not a valid email'),
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
          <TextField
            label="Email Address"
            placeholder="Email"
            error={formState.errors['email']}
            registration={register('email')}
          />
          <TextField
            type="password"
            placeholder="Password"
            label="Password"
            error={formState.errors['password']}
            registration={register('password')}
          />
          <LabelLink label="Create new account" linkLabel="Register" link="/auth/register" />
          <Button type="submit" className="loginbutton">
            LOGIN TO DASHBOARD
          </Button>
        </>
      )}
    </Form>
  );
};

LoginForm.propTypes = {
  onSuccess: PropTypes.func
};
