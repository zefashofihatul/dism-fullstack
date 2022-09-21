import React, { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import {
  ImageDropZoneWrapper,
  TitleDropImage,
  ImagesTitleHeader,
  FilesWrapper,
  File,
  ImagesWrapper,
  DeleteImageWrapper,
  ImageIcon,
  ErrorMessage,
  ErrorMessageWrapper,
  ErrorList,
  ErrorMessageSemibold
} from './style/dropzoneStyle';
import crossIcon from 'assets/images/cross_icon.svg';
import trashIcon from 'assets/images/trash_icon.svg';

export const ImageDropZone = (props) => {
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

  const maxLength = 1000000;
  const customValidation = (file) => {
    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      return {
        code: 'file-invalid',
        message: 'File must image jpeg, jpg or png',
        fileName: file.name
      };
    }

    if (file.size > maxLength) {
      return {
        code: 'name-too-large',
        message: `File too large`,
        fileName: file.name
      };
    }
    return null;
  };

  const { acceptedFiles, getRootProps, getInputProps, isDragActive, fileRejections, isDragReject } =
    useDropzone({
      onDrop: (acceptedFiles, fileRejections) => {
        let errorFile = [];
        if (!fileRejections.length) {
          errorFile = [];
        } else {
          errorFile = [...fileRejections[0].errors];
        }
        setImages({
          files: [...images.files, ...acceptedFiles],
          error: [...errorFile]
        });
      },
      validator: customValidation
    });

  const handleDeleteImage = (path) => {
    images.files.splice(path, 1);
    setImages({ files: [...images.files], error: [] });
  };

  const files = images.files.map((file, index) => (
    <ImagesWrapper key={file.path}>
      <DeleteImageWrapper onClick={(e) => handleDeleteImage(index)} path={file.path}>
        <ImageIcon size="14px" src={trashIcon} />
      </DeleteImageWrapper>
      <File
        src={URL.createObjectURL(file)} // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      />
    </ImagesWrapper>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => images.files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const errorHandle = images.error.map((error, index) => (
    <ErrorList key={index}>
      - {error.fileName} : <ErrorMessageSemibold>{error.message}</ErrorMessageSemibold>
    </ErrorList>
  ));

  return (
    <section>
      <ImageDropZoneWrapper
        isDragActive={isDragActive}
        isDragReject={isDragReject}
        {...getRootProps({ className: 'dropzone' })}>
        <input
          className={className}
          placeholder={placeholder}
          {...registration}
          {...getInputProps()}
        />
        <TitleDropImage>
          Drop or Click your product images here, File must jpeg & png
        </TitleDropImage>
      </ImageDropZoneWrapper>
      {images.error.length > 0 || error ? (
        <>
          <ErrorMessage>Error File</ErrorMessage>
          <ErrorMessageWrapper>
            {errorHandle}
            {error && (
              <ErrorList>
                - <ErrorMessageSemibold>{error.message} min 1</ErrorMessageSemibold>
              </ErrorList>
            )}
          </ErrorMessageWrapper>
        </>
      ) : (
        <></>
      )}
      {images.files.length > 0 ? <ImagesTitleHeader>Product Images</ImagesTitleHeader> : <></>}
      <FilesWrapper>{files}</FilesWrapper>
    </section>
  );
};

ImageDropZone.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  registration: PropTypes.object,
  images: PropTypes.object,
  setImages: PropTypes.func,
  error: PropTypes.object,
  type: PropTypes.string
};
