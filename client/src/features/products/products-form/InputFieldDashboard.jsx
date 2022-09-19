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
import { DragSpotInput, CustomFileUpload } from './style/ProductFormStyle';
import { useState } from 'react';
import { useEffect } from 'react';
import { ErrorWrapper } from 'components/Form/style/FieldWrapper';
import imageIcon from 'assets/images/image_icon.svg';
import { ImageFormWrapper, ImageExpand, ImageExpandData } from './style/ProductFormStyle';

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
  const [dragIn, setDragIn] = useState(false);
  useEffect(() => {
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs([...newImageUrls]);
  }, [images]);
  const onImageInput = (e) => {
    if (images.length + e.target.files.length < 8) setImages([...images, ...e.target.files]);
  };
  return (
    <ImageFormWrapper>
      <CustomFileUpload
        onDragEnter={() => setDragIn(!dragIn)}
        onDragLeave={() => setDragIn(!dragIn)}
        dragIn={dragIn}>
        <>
          <img src={imageIcon} alt="" />
          <DragDescription>Click & Drop your Image file Here</DragDescription>
        </>
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
      </CustomFileUpload>
      {imageURLs.map((imageSrc, index) => {
        if (index < 5) {
          return <Image key={index} image={imageSrc} />;
        } else if (index == 5) {
          return (
            <ImageExpand key={index}>
              <ImageExpandData>{images.length - 5}+</ImageExpandData>
            </ImageExpand>
          );
        }
      })}
    </ImageFormWrapper>
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
