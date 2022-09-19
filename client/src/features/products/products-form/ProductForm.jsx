import {
  BackgroundProductForm,
  ProductFormInfoImageWrapper,
  ProductFormWrapper,
  ProductTitle,
  DoubleInputWrapper,
  InputDouble,
  ImageFormWrapper,
  Image,
  DragSpot,
  ImageIcon,
  DragDescription,
  CloseWrapper,
  ShowImage,
  DragSpotInput
} from './style/ProductFormStyle';
import { ButtonRect } from 'components/Button/ButtonRect';
import * as z from 'zod';
import { Button } from 'components/Button';
import { Form, FormDouble } from 'components/Form';
import { TextField, ParagraphField, ImageUploadField } from './InputFieldDashboard';
import PropTypes from 'prop-types';
import crossIcon from 'assets/images/cross_icon.svg';
import { useEffect } from 'react';
import { dummyContent } from '../dummyData';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(5, 'Char Lenght must > 6'),
  price: z.string().min(1, 'Required'),
  stock: z.string().min(1, 'Required'),
  description: z.string().min(5, 'Char Lenght must > 6'),
  category: z.string().min(5, 'Char Lenght must > 6'),
  details: z.string().min(5, 'Char Lenght must > 6'),
  materials: z.string().min(5, 'Char Lenght must > 6'),
  dimensions: z.string().min(5, 'Char Lenght must > 6'),
  images: z.any()
});

export const ProductForm = ({ showForm, setShowForm }) => {
  const [images, setImages] = useState([]);
  return (
    <BackgroundProductForm showForm={showForm}>
      <ProductFormWrapper>
        <CloseWrapper
          onClick={() => {
            setShowForm(false);
            setImages([]);
          }}>
          <ImageIcon src={crossIcon} size="12px" />
        </CloseWrapper>
        <ProductTitle>Adding New Product</ProductTitle>
        <Form
          schema={schema}
          options={{ shouldUnregister: false }}
          onSubmit={(values) => {
            values.images = images;
            console.log(values);
          }}>
          {({ register, formState }) => (
            <>
              <ImageUploadField
                type="file"
                images={images}
                setImages={setImages}
                placeholder="Images"
                registration={register('images')}
                error={formState.errors['images']}
              />

              <TextField
                type="text"
                label="Product Name"
                registration={register('name')}
                placeholder="Product Name"
                error={formState.errors['name']}
              />
              <DoubleInputWrapper>
                <InputDouble>
                  <TextField
                    type="text"
                    label="Product per Price"
                    registration={register('price')}
                    placeholder="Product per Price"
                    error={formState.errors['price']}
                  />
                </InputDouble>
                <InputDouble>
                  <TextField
                    type="text"
                    label="Product Stock"
                    registration={register('stock')}
                    placeholder="Product Stock"
                    error={formState.errors['stock']}
                  />
                </InputDouble>
              </DoubleInputWrapper>
              <TextField
                type="text"
                label="Product Category"
                registration={register('category')}
                placeholder="Product Category"
                error={formState.errors['category']}
              />
              <ParagraphField
                type="text"
                label="Product Description"
                placeholder="Description"
                registration={register('description')}
                error={formState.errors['description']}
              />
              <ParagraphField
                type="text"
                label="Product Details"
                placeholder="Details"
                registration={register('details')}
                error={formState.errors['details']}
              />
              <ParagraphField
                type="text"
                label="Product Materials"
                placeholder="Materials"
                registration={register('materials')}
                error={formState.errors['materials']}
              />
              <ParagraphField
                type="text"
                label="Product Dimensions"
                placeholder="Dimensions"
                registration={register('dimensions')}
                error={formState.errors['dimensions']}
              />
              <ButtonRect label="Submit Product" type="submit" className="register">
                Submit Product
              </ButtonRect>
            </>
          )}
        </Form>
      </ProductFormWrapper>
    </BackgroundProductForm>
  );
};

ProductForm.propTypes = {
  showForm: PropTypes.bool,
  setShowForm: PropTypes.func
};
