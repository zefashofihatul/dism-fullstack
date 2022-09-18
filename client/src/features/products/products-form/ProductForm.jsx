import {
  BackgroundProductForm,
  ProductFormInfoImageWrapper,
  ProductFormWrapper,
  ProductTitle,
  ProductInfoFormWrapper,
  DoubleInputWrapper,
  InputDouble,
  ImageFormWrapper,
  Image,
  DragSpot,
  ImageIcon,
  DragDescription,
  CloseWrapper
} from './style/ProductFormStyle';
import { Form } from 'components/Form';
import { TextField, ParagraphField } from './InputFieldDashboard';
import PropTypes from 'prop-types';
import imageIcon from 'assets/images/image_icon.svg';
import crossIcon from 'assets/images/cross_icon.svg';

export const ProductForm = ({ showForm, setShowForm }) => {
  console.log(showForm);
  return (
    <BackgroundProductForm showForm={showForm}>
      <ProductFormWrapper>
        <CloseWrapper onClick={() => setShowForm(false)}>
          <ImageIcon src={crossIcon} size="12px" />
        </CloseWrapper>
        <ProductTitle>Adding New Product</ProductTitle>
        <ProductFormInfoImageWrapper>
          <ProductInfoFormWrapper>
            <Form options={{ shouldUnregister: false }}>
              {({ register, formState }) => (
                <>
                  <TextField
                    type="text"
                    label="Product Name"
                    placeholder="Product Name"
                    error={formState.errors['name']}
                  />
                  <DoubleInputWrapper>
                    <InputDouble>
                      <TextField
                        type="text"
                        label="Product per Price"
                        placeholder="Product per Price"
                        error={formState.errors['name']}
                      />
                    </InputDouble>
                    <InputDouble>
                      <TextField
                        type="text"
                        label="Product Stock"
                        placeholder="Product Stock"
                        error={formState.errors['name']}
                      />
                    </InputDouble>
                  </DoubleInputWrapper>
                  <ParagraphField
                    type="text"
                    label="Product Description"
                    placeholder="Description"
                    error={formState.errors['name']}
                  />
                </>
              )}
            </Form>
          </ProductInfoFormWrapper>
          <ImageFormWrapper>
            <DragSpot>
              <ImageIcon src={imageIcon} size="60px" />
              <DragDescription>Drag or Click Product image Here</DragDescription>
            </DragSpot>
            <Image></Image>
            <Image></Image>
            <Image></Image>
            <Image></Image>
            <Image></Image>
          </ImageFormWrapper>
        </ProductFormInfoImageWrapper>
      </ProductFormWrapper>
    </BackgroundProductForm>
  );
};

ProductForm.propTypes = {
  showForm: PropTypes.bool,
  setShowForm: PropTypes.func
};
