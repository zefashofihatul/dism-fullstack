import PropTypes, { checkPropTypes } from 'prop-types';
import {
  Input,
  InputParagraph,
  CheckBox,
  Label,
  Anchor,
  Select
} from './style/InputFieldDashboardStyle';
import { FieldWrapper } from '../../../components/Form/FieldWrapper';
import { useNavigate } from 'react-router';

export const TextField = (props) => {
  const { type = 'text', placeholder, label, className, registration, error } = props;
  return (
    <FieldWrapper className={className} label={label} error={error} type={type}>
      <>
        <Label>{label}</Label>
        <Input
          type={type}
          error={error}
          className={className}
          placeholder={placeholder}
          {...registration}
        />
      </>
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

export const ParagraphField = (props) => {
  const { type, placeholder, label, className, registration, error } = props;
  return (
    <FieldWrapper className={className} label={label} error={error} type={type}>
      <>
        <Label>{label}</Label>
        <InputParagraph
          type="text"
          error={error}
          className={className}
          placeholder={placeholder}
          {...registration}
        />
      </>
    </FieldWrapper>
  );
};

ParagraphField.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  registration: PropTypes.object,
  placeholder: PropTypes.string,
  error: PropTypes.object
};
