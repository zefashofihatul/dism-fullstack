const addProduct = ({
  id,
  name,
  shortDescription,
  price,
  color,
  dimensions,
  details,
  materials,
  thumb,
  images,
  category,
  createdAt,
  updatedAt,
  productRepository,
}) => {
  return productRepository.add({
    id,
    name,
    shortDescription,
    price,
    color,
    dimensions,
    details,
    materials,
    category,
    thumb,
    images,
    createdAt,
    updatedAt,
  });
};

module.exports = addProduct;
