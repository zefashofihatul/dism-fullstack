import PropTypes from 'prop-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn, SubmitHandler, UseFormProps } from 'react-hook-form';

export const Form = ({ onSubmit, children, className, id, options, schema }) => {
  const methods = useForm({ ...options, resolver: zodResolver(schema) });
  return (
    <div>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
        {children(methods)}
      </form>
    </div>
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
