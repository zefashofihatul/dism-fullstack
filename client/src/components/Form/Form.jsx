import PropTypes from 'prop-types';
import { useForm, UseFormReturn, SubmitHandler, UseFormProps } from 'react-hook-form';

export const Form = ({ onSubmit, children, className, id, options }) => {
  const { register, formState, handleSubmit } = useForm({ ...options });
  return (
    <div>
      <form className={className} onSubmit={handleSubmit(onSubmit)} id={id}>
        {children({ register, formState })}
      </form>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.object
};
