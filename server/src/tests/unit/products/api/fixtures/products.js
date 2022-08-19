const detailProductFixture = (err, res) => {
  // Testing id data type
  res.body.data.should.have.property('id');
  res.body.data.id.should.be.a('string');

  // Testing name data type
  res.body.data.should.have.property('name');
  res.body.data.name.should.be.a('string');

  // Testing shortDescription data type
  res.body.data.should.have.property('shortDescription');
  res.body.data.shortDescription.should.be.a('string');

  // Testing details data type
  res.body.data.should.have.property('details');
  res.body.data.details.should.be.a('string');

  // Testing color data type
  res.body.data.should.have.property('color');
  res.body.data.color.should.be.a('string');

  // Testing dimensions data type
  res.body.data.should.have.property('dimensions');
  res.body.data.dimensions.should.be.a('string');

  // Testing materials data type
  res.body.data.should.have.property('materials');
  res.body.data.materials.should.be.a('string');

  // Testing category data type
  res.body.data.should.have.property('category');
  res.body.data.category.should.be.a('string');

  // Testing price data type
  res.body.data.should.have.property('price');
  res.body.data.price.should.be.a('number');

  // Testing thumb data type
  res.body.data.should.have.property('thumb');
  res.body.data.thumb.should.be.a('string');

  // Testing images data type
  res.body.data.should.have.property('images');
  res.body.data.images.should.be.a('string');

  // Testing createdAt data type
  res.body.data.should.have.property('createdAt');
  res.body.data.createdAt.should.be.a('string');

  // Testing updateAt data type
  res.body.data.should.have.property('updatedAt');
  res.body.data.updatedAt.should.be.a('string');
};

const allProductsFixture = (err, res) => {
  // Testing id data type
  res.body.data[0].should.have.property('id');
  res.body.data[0].id.should.be.a('string');

  // Testing name data type
  res.body.data[0].should.have.property('name');
  res.body.data[0].name.should.be.a('string');

  // Testing price data type
  res.body.data[0].should.have.property('price');
  res.body.data[0].price.should.be.a('number');

  // Testing color data type
  res.body.data[0].should.have.property('color');
  res.body.data[0].color.should.be.a('string');

  // Testing category data type
  res.body.data[0].should.have.property('category');
  res.body.data[0].category.should.be.a('string');

  // Testing thumb data type
  res.body.data[0].should.have.property('thumb');
  res.body.data[0].thumb.should.be.a('string');

  // Testing images data type
  res.body.data[0].should.have.property('images');
  res.body.data[0].images.should.be.a('string');

  // Testing createdAt data type
  res.body.data[0].should.have.property('createdAt');
  res.body.data[0].createdAt.should.be.a('string');

  // Testing updateAt data type
  res.body.data[0].should.have.property('updatedAt');
  res.body.data[0].updatedAt.should.be.a('string');
};

module.exports = { detailProductFixture, allProductsFixture };
