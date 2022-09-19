import PropTypes, { checkPropTypes } from 'prop-types';
import { Image, ShowImage, DragSpot, ImageIcon, DragDescription } from './style/ProductFormStyle';
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
import { DragSpotInput } from './style/ProductFormStyle';
import { useState } from 'react';
import { useEffect } from 'react';
import { ErrorWrapper } from 'components/Form/style/FieldWrapper';

export const ImageUploadField = (props) => {
  const {
    type = 'file',
    placeholder,
    images,
    setImages,
    label,
    className,
    registration,
    error
  } = props;
  const [imageURLs, setImageURLs] = useState([]);
  useEffect(() => {
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs([...newImageUrls]);
  }, [images]);
  const onImageInput = (e) => {
    if (images.length + e.target.files.length < 6) setImages([...images, ...e.target.files]);
  };
  return (
    <>
      {error?.message && (
        <ErrorWrapper role="alert" aria-label={error.message} className="errorMessage">
          {error.message}
        </ErrorWrapper>
      )}
      <DragSpotInput
        type="file"
        multiple={true}
        accept="image/*"
        error={error}
        onDrop={onImageInput}
        onInput={onImageInput}
        className={className}
        placeholder={placeholder}
        {...registration}
      />
      {imageURLs.map((imageSrc, index) => (
        <Image key={index} image={imageSrc} />
      ))}
    </>
  );
};

ImageUploadField.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  registration: PropTypes.object,
  images: PropTypes.array,
  setImages: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.object
};

export const TextField = (props) => {
  const { type = 'text', placeholder, label, className, registration, error } = props;
  return (
    <FieldWrapper className={className} label={label} error={error} type={type}>
      <>
        <Label>{label}</Label>
        {error?.message && (
          <ErrorWrapper role="alert" aria-label={error.message} className="errorMessage">
            {error.message}
          </ErrorWrapper>
        )}
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
        {error?.message && (
          <ErrorWrapper role="alert" aria-label={error.message} className="errorMessage">
            {error.message}
          </ErrorWrapper>
        )}
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
