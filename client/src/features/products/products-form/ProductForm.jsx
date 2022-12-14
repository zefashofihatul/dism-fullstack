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
import {
  ImagesTitleHeader,
  FilesWrapper,
  ImagesWrapper,
  DeleteImageWrapper,
  File
} from 'lib/style/dropzoneStyle';
import { SpaceBetween } from 'components/Flex';
import crossIcon from 'assets/images/cross_icon.svg';
import trashIcon from 'assets/images/trash_icon.svg';
import { ButtonRect } from 'components/Button/ButtonRect';
import * as z from 'zod';
import { Form, FormDouble } from 'components/Form';
import { TextField, ParagraphField } from './InputFieldDashboard';
import PropTypes from 'prop-types';
import { ImageDropZone } from 'lib/dropzone';
import { SelectField } from './InputFieldDashboard';
import { useState } from 'react';
import { useProducts } from '../providers/ProductsProviders';
import { deleteProductImage } from '../api';
import { deleteProduct } from '../api/deleteProduct';
import { useModal } from 'components/Modal';

export const ProductForm = ({
  onSuccess,
  onFail,
  productValue = {
    name: '',
    price: '',
    productImage: [],
    images: [],
    stock: '',
    category: '',
    description: '',
    details: '',
    materials: '',
    dimensions: ''
  }
}) => {
  const {
    postProductsFn,
    showProductForm,
    setShowProductForm,
    fetchProductsFn,
    productSetting,
    updateProductFn,
    setProducts
  } = useProducts();

  const { setShowModal, setShowModalInput } = useModal();
  const [images, setImages] = useState({ files: productValue.images || [], error: [] });
  const [name, setName] = useState(productValue.name);
  const [price, setPrice] = useState(productValue.price);
  const [stock, setStock] = useState(productValue.stock);
  const [category, setCategory] = useState(productValue.category);
  const [description, setDescription] = useState(productValue.description);
  const [details, setDetails] = useState(productValue.details);
  const [materials, setMaterials] = useState(productValue.materials);
  const [dimensions, setDimensions] = useState(productValue.dimensions);
  const [existingImages, setExistingImages] = useState(productValue.productImage || []);

  const schema = z.object({
    name: z.string().min(5, 'Char Lenght must > 6'),
    price: z.string().min(1, 'Required'),
    stock: z.string().min(1, 'Required'),
    description: z.string().min(5, 'Char Lenght must > 6'),
    category: z.string().min(5, 'Char Lenght must > 6'),
    details: z.string().min(5, 'Char Lenght must > 6'),
    materials: z.string().min(5, 'Char Lenght must > 6'),
    dimensions: z.string().min(5, 'Char Lenght must > 6'),
    images: z
      .any()
      .refine(
        (val) => images.files.length > 0 || existingImage.length > 0,
        'Upload your product image'
      )
  });

  const handleDeleteImage = (path) => {
    existingImages.splice(path, 1);
    setExistingImages([...existingImages]);
  };
  const existingImage = existingImages.map((file, index) => {
    return (
      <ImagesWrapper key={file.id}>
        <DeleteImageWrapper
          onClick={(e) => {
            setShowModalInput({
              show: true,
              title: 'Delete Image',
              message: 'Are you sure want to delete this Image ?',
              action: [
                {
                  label: 'Delete Image',
                  onClick: (e) => {
                    console.log('Delete Product');
                    deleteProductImage(file.id)
                      .then((value) => {
                        console.log(value);
                        handleDeleteImage(index);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                    setShowModalInput({
                      show: false
                    });
                  }
                }
              ]
            });
          }}>
          <ImageIcon size="14px" src={trashIcon} />
        </DeleteImageWrapper>
        <File src={file.src} />
      </ImagesWrapper>
    );
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
            console.log(values);
            if (showProductForm.method == 'POST') {
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
            } else {
              console.log(values);
              updateProductFn(values, productValue.id)
                .then((result) => {
                  console.log(result);
                  setShowModal({
                    show: true,
                    message: 'Update Product Success',
                    status: 'success'
                  });
                  setShowProductForm(false);
                  fetchProductsFn(productSetting).then((value) => {
                    setProducts(value.data);
                  });
                })
                .catch((err) => {
                  console.log(err);
                  setShowModal({
                    show: true,
                    message: 'Update Product Fail',
                    status: 'Fail'
                  });
                });
            }
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
                {existingImages.length > 0 ? (
                  <ImagesTitleHeader>Existing Image</ImagesTitleHeader>
                ) : (
                  <></>
                )}
                <FilesWrapper>{existingImage}</FilesWrapper>
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
                      value={price}
                      onInput={(e) => setPrice(e)}
                      registration={register('price')}
                      placeholder="Product per Price"
                      error={formState.errors['price']}
                    />
                  </InputDouble>
                  <InputDouble>
                    <TextField
                      type="text"
                      value={stock}
                      onInput={(e) => setStock(e)}
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
                  value={category}
                  onInput={(e) => setCategory(e.target.value)}
                  registration={register('category')}>
                  <option value="ashtray">Ashtray</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="lighter">Lighter</option>
                </SelectField>
                <ParagraphField
                  type="text"
                  label="Product Description"
                  value={description}
                  onInput={(e) => setDescription(e)}
                  placeholder="Description"
                  registration={register('description')}
                  error={formState.errors['description']}
                />
                <ParagraphField
                  type="text"
                  label="Product Details"
                  placeholder="Details"
                  value={details}
                  onInput={(e) => setDetails(e)}
                  registration={register('details')}
                  error={formState.errors['details']}
                />
                <ParagraphField
                  type="text"
                  label="Product Materials"
                  placeholder="Materials"
                  value={materials}
                  onInput={(e) => setMaterials(e)}
                  registration={register('materials')}
                  error={formState.errors['materials']}
                />
                <ParagraphField
                  type="text"
                  label="Product Dimensions"
                  placeholder="Dimensions"
                  value={dimensions}
                  onInput={(e) => setDimensions(e)}
                  registration={register('dimensions')}
                  error={formState.errors['dimensions']}
                />
              </FormControl>
              <ButtonWrapper>
                <SpaceBetween>
                  <ButtonWrapper>
                    <ButtonRect
                      label={showProductForm.method == 'POST' ? 'Submit Product' : 'Update Product'}
                      type="submit"
                      className="register"
                    />
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
                  {showProductForm.method == 'PUT' && (
                    <ButtonRect
                      label="Delete Product"
                      color="#d83737"
                      type="button"
                      className="delete"
                      onClick={() => {
                        setShowModalInput({
                          show: true,
                          title: 'Delete Product',
                          message: 'Are you sure want to delete this Image ?',
                          action: [
                            {
                              label: 'Delete Product',
                              onClick: (e) => {
                                console.log('Delete Product');
                                deleteProduct(productValue.id)
                                  .then((result) => {
                                    console.log(result);
                                    setShowModal({
                                      show: true,
                                      message: 'Delete Product Success',
                                      status: 'success'
                                    });
                                    setShowProductForm(false);
                                    fetchProductsFn(productSetting).then((value) => {
                                      setProducts(value.data);
                                    });
                                  })
                                  .catch((err) => {
                                    setShowModal({
                                      show: true,
                                      message: 'Delete Product Fail',
                                      status: 'danger'
                                    });
                                  });
                              }
                            }
                          ]
                        });
                      }}
                    />
                  )}
                </SpaceBetween>
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
  productImage: PropTypes.array,
  productValue: PropTypes.object,
  setShowModal: PropTypes.func
};
