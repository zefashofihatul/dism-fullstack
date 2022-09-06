import * as React from 'react';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { TextField, Form, CheckBoxField, LabelLink, SelectField } from 'components/Form';
import { DoubleFlex } from '../styles/login';
import { Button } from 'components/Button';
import PropTypes from 'prop-types';
import { useAuth } from 'lib/auth';

const schema = z.object({
  idRole: z.string().min(1, 'Required'),
  username: z.string().min(1, 'Required'),
  email: z.string().email('Not a valid email'),
  password: z.string().min(1, 'Required')
});

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
      }}
      schema={schema}>
      {({ register, formState }) => (
        <>
          <SelectField>
            <>
              <option value="ADMIN">ADMIN</option>
              <option value="USER">USER</option>
            </>
          </SelectField>
          <TextField
            type="text"
            label="username"
            placeholder="USERNAME"
            error={formState.errors['username']}
            registration={register('username')}
          />
          <TextField
            type="text"
            label="email"
            placeholder="EMAIL"
            error={formState.errors['email']}
            registration={register('email')}
          />
          <TextField
            type="text"
            label="password"
            placeholder="PASSWORD"
            error={formState.errors['password']}
            registration={register('password')}
          />
          <DoubleFlex>
            <CheckBoxField label="Email me with news and offers" />
            <LabelLink label="Have account Already" linkLabel="Login" link="/auth/login" />
          </DoubleFlex>
          <Button type="submit" className="button-full">
            REGISTER
          </Button>
        </>
      )}
    </Form>
  );
};

RegisterForm.propTypes = {
  onSuccess: PropTypes.func
};
