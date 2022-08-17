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
  dbRepository,
}) => {
  return dbRepository.addNewProduct({
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
