import PropTypes from 'prop-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn, SubmitHandler, UseFormProps } from 'react-hook-form';
import { FormField, FormWrapper } from './style/FormStyle';

export const Form = ({ onSubmit, children, className, id, options, schema }) => {
  const methods = useForm({ ...options, resolver: zodResolver(schema) });
  return (
    <FormWrapper>
      <FormField className={className} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
        {children(methods)}
      </FormField>
    </FormWrapper>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.object,
  schema: PropTypes.object
};
