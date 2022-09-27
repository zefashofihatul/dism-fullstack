import {
  ProductFormMainWrapper,
  BackgroundForm,
  ProductFormWrapper,
  ProductTitle,
  DoubleInputWrapper,
  InputDouble,
  ImageIcon,
  DragDescription,
  CloseWrapper,
  ShowImage,
  DragSpotInput,
  FormControl,
  ButtonWrapper
} from './style/ProductFormStyle';
import { ButtonRect } from 'components/Button/ButtonRect';
import * as z from 'zod';
import { Form, FormDouble } from 'components/Form';
import { TextField, ParagraphField } from './InputFieldDashboard';
import PropTypes from 'prop-types';
import crossIcon from 'assets/images/cross_icon.svg';
import { ImageDropZone } from 'lib/dropzone';
import { SelectField } from './InputFieldDashboard';
import { useState } from 'react';
import { useProducts } from '../providers/ProductsProviders';

export const ProductForm = ({
  onSuccess,
  onFail,
  productValue = {
    name: '',
    price: '',
    images: [],
    stock: '',
    category: '',
    description: '',
    details: '',
    materials: '',
    dimensions: ''
  }
}) => {
  const { postProductsFn, showProductForm, setShowProductForm } = useProducts();
  const [images, setImages] = useState({ files: productValue.images, error: [] });
  const [name, setName] = useState(productValue.name);
  const [price, setPrice] = useState(productValue.price);
  const [stock, setStock] = useState(productValue.stock);
  const [category, setCategory] = useState(productValue.category);
  const [description, setDescription] = useState(productValue.description);
  const [details, setDetails] = useState(productValue.details);
  const [materials, setMaterials] = useState(productValue.materials);
  const [dimensions, setDimensions] = useState(productValue.dimensions);

  const schema = z.object({
    name: z.string().min(5, 'Char Lenght must > 6'),
    price: z.string().min(1, 'Required'),
    stock: z.string().min(1, 'Required'),
    description: z.string().min(5, 'Char Lenght must > 6'),
    category: z.string().min(5, 'Char Lenght must > 6'),
    details: z.string().min(5, 'Char Lenght must > 6'),
    materials: z.string().min(5, 'Char Lenght must > 6'),
    dimensions: z.string().min(5, 'Char Lenght must > 6'),
    images: z.any().refine((val) => images.files.length > 0, 'Upload your product image')
  });

  return (
    <ProductFormMainWrapper showForm={showProductForm}>
      <BackgroundForm />
      <ProductFormWrapper>
        <ProductTitle>Adding New Product</ProductTitle>
        <Form
          id="productForm"
          schema={schema}
          enctype="multipart/form-data"
          options={{ shouldUnregister: false }}
          onSubmit={async (values) => {
            values.images = images.files;
            postProductsFn(values)
              .then((value) => {
                console.log(value);
                setShowProductForm(false);
                onSuccess();
              })
              .catch((err) => {
                console.log(err);
                onFail(err);
              });
          }}>
          {({ register, formState }) => (
            <>
              <FormControl>
                <ImageDropZone
                  type="file"
                  images={images}
                  setImages={setImages}
                  placeholder="Images"
                  registration={register('images')}
                  error={formState.errors['images']}
                />
                <CloseWrapper
                  onClick={() => {
                    setShowProductForm(false);
                    setImages({ files: [], error: [] });
                    document.getElementById('productForm').reset();
                  }}>
                  <ImageIcon src={crossIcon} size="12px" />
                </CloseWrapper>
                <TextField
                  type="text"
                  label="Product Name"
                  value={name}
                  onInput={(e) => setName(e)}
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
                <SelectField
                  label="Category"
                  type="checkbox"
                  className="category"
                  registration={register('category')}>
                  <option value="ashtray">Ashtray</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="lighter">Lighter</option>
                </SelectField>
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
              </FormControl>
              <ButtonWrapper>
                <ButtonRect label="Submit Product" type="submit" className="register" />
                <ButtonRect
                  label="Cancel"
                  color="#262626"
                  className="register"
                  onClick={() => {
                    setShowProductForm(false);
                    setImages({ files: [], error: [] });
                    document.getElementById('productForm').reset();
                  }}
                />
              </ButtonWrapper>
            </>
          )}
        </Form>
      </ProductFormWrapper>
    </ProductFormMainWrapper>
  );
};

ProductForm.propTypes = {
  showForm: PropTypes.bool,
  setShowForm: PropTypes.func,
  onSuccess: PropTypes.func,
  onFail: PropTypes.func,
  productValue: PropTypes.object
};
