import PropTypes from 'prop-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn, SubmitHandler, UseFormProps } from 'react-hook-form';
import { FormField, FormWrapper, FormDoubleWrapper, FormFieldDouble } from './style/FormStyle';

export const Form = ({ onSubmit, children, className, id, options, schema, enctype }) => {
  const methods = useForm({ ...options, resolver: zodResolver(schema) });
  return (
    <FormWrapper>
      <FormField
        className={className}
        encType={enctype}
        onSubmit={methods.handleSubmit(onSubmit)}
        id={id}>
        {children(methods)}
      </FormField>
    </FormWrapper>
  );
};

export const FormDouble = ({ onSubmit, children, className, id, options, schema }) => {
  const methods = useForm({ ...options, resolver: zodResolver(schema) });
  return (
    <FormDoubleWrapper>
      <FormFieldDouble className={className} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
        {children(methods)}
      </FormFieldDouble>
    </FormDoubleWrapper>
  );
};

Form.propTypes = {
  enctype: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.object,
  schema: PropTypes.object
};

FormDouble.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.object,
  schema: PropTypes.object
};
