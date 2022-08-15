export default function productController() {
  const getAllProduct = (req, res, next) => {
    res.send('Ini adalah router baru');
  };

  return { getAllProduct };
}
