const addProductWithImage = ({
  id,
  name,
  shortDescription,
  price,
  color,
  dimensions,
  details,
  materials,
  productImage,
  category,
  createdAt,
  updatedAt,
  dbRepository,
}) => {
  return dbRepository.addWithImage({
    id,
    name,
    shortDescription,
    price,
    color,
    dimensions,
    details,
    materials,
    category,
    productImage,
    createdAt,
    updatedAt,
  });
};

module.exports = addProductWithImage;
