import * as React from 'react';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { TextField, Form, CheckBoxField, LabelLink, SelectField } from 'components/Form';
import { DoubleFlex } from '../styles/login';
import { Button } from 'components/Button';
import PropTypes from 'prop-types';
import { useAuth } from 'lib/auth';

const schema = z.object({
  role: z.string().min(1, 'Required'),
  username: z.string().min(5, 'Field must length > 5 Character'),
  email: z.string().email('Not a valid email'),
  password: z.string().min(5, 'Field must length > 5 Character'),
  newslater: z.boolean()
});

export const RegisterForm = ({ onSuccess, onFail }) => {
  const { registerFn } = useAuth();
  return (
    <Form
      onSubmit={async (values) => {
        const result = await registerFn(values);
        if (result.status === 'Fail') {
          console.log(result);
          onFail(result.message);
        } else {
          onSuccess();
        }
      }}
      options={{ shouldUnregister: false }}
      schema={schema}>
      {({ register, formState }) => (
        <>
          <SelectField
            label="Role"
            type="checkbox"
            className="role"
            registration={register('role')}>
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
            <option value="MODERATOR">MODERATOR</option>
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
            type="password"
            label="password"
            placeholder="PASSWORD"
            error={formState.errors['password']}
            registration={register('password')}
          />
          <DoubleFlex>
            <CheckBoxField
              type="checkbox"
              className="newslater"
              label="Email me with news and offers"
              registration={register('newslater')}
            />
            <LabelLink label="Have account Already" linkLabel="Login" link="/auth/login" />
          </DoubleFlex>
          <Button type="submit" className="registerButton">
            REGISTER
          </Button>
        </>
      )}
    </Form>
  );
};

RegisterForm.propTypes = {
  onSuccess: PropTypes.func,
  onFail: PropTypes.func
};
