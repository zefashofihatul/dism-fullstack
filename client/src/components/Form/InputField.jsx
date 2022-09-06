import PropTypes, { checkPropTypes } from 'prop-types';
import { Input, CheckBox, Label, Anchor, Select } from './style/InputField';
import { FieldWrapper } from './FieldWrapper';
import { useNavigate } from 'react-router';

export const TextField = (props) => {
  const { type = 'text', placeholder, label, className, registration, error } = props;
  console.log(error);
  return (
    <FieldWrapper className={className} label={label} error={error} type={type}>
      <Input
        type={type}
        error={error}
        className={className}
        placeholder={placeholder}
        {...registration}
      />
    </FieldWrapper>
  );
};

TextField.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  registration: PropTypes.object,
  placeholder: PropTypes.string,
  error: PropTypes.object
};

export const CheckBoxField = (props) => {
  const { type = 'checkbox', placeholder, label, className, registration, error } = props;
  return (
    <FieldWrapper>
      <>
        <CheckBox type={type} className={className}></CheckBox>
        <Label>{label}</Label>
      </>
    </FieldWrapper>
  );
};

CheckBoxField.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  registration: PropTypes.object,
  placeholder: PropTypes.string,
  error: PropTypes.object
};

export const SelectField = (props) => {
  const { label, className, name, children } = props;
  return (
    <FieldWrapper>
      <Select>{children}</Select>
    </FieldWrapper>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.element
};

export const LabelLink = (props) => {
  const { label, linkLabel, link } = props;
  const navigate = useNavigate();
  return (
    <FieldWrapper>
      <>
        <Label>{label}</Label>
        <Anchor onClick={() => navigate(link)}>{linkLabel}</Anchor>
      </>
    </FieldWrapper>
  );
};

LabelLink.propTypes = {
  label: PropTypes.string,
  linkLabel: PropTypes.string,
  link: PropTypes.string
};
