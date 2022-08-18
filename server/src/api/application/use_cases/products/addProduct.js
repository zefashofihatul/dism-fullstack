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
    thumb,
    images,
  });
};

module.exports = addProduct;
