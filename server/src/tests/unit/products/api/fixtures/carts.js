const allCartsFixture = (err, res) => {
  res.body.data[0].should.have.property('id');
  res.body.data[0].id.should.be.a('string');

  res.body.data[0].should.have.property('idUser');
  res.body.data[0].idUser.should.be.a('string');

  res.body.data[0].should.have.property('idProduct');
  res.body.data[0].idProduct.should.be.a('string');

  res.body.data[0].should.have.property('color');
  res.body.data[0].color.should.be.a('string');

  res.body.data[0].should.have.property('quantity');
  res.body.data[0].quantity.should.be.a('number');

  res.body.data[0].should.have.property('price');
  res.body.data[0].price.should.be.a('number');

  res.body.data[0].should.have.property('thumb');
  res.body.data[0].thumb.should.be.a('string');

  res.body.data[0].should.have.property('createdAt');
  res.body.data[0].createdAt.should.be.a('string');

  res.body.data[0].should.have.property('updatedAt');
  res.body.data[0].updatedAt.should.be.a('string');
};

const detailProductFixture = (err, res) => {
  res.body.data.should.have.property('id');
  res.body.data.id.should.be.a('string');

  res.body.data.should.have.property('idUser');
  res.body.data.idUser.should.be.a('string');

  res.body.data.should.have.property('idProduct');
  res.body.data.idProduct.should.be.a('string');

  res.body.data.should.have.property('color');
  res.body.data.color.should.be.a('string');

  res.body.data.should.have.property('quantity');
  res.body.data.quantity.should.be.a('number');

  res.body.data.should.have.property('price');
  res.body.data.price.should.be.a('number');

  res.body.data.should.have.property('thumb');
  res.body.data.thumb.should.be.a('string');

  res.body.data.should.have.property('createdAt');
  res.body.data.createdAt.should.be.a('string');

  res.body.data.should.have.property('updatedAt');
  res.body.data.updatedAt.should.be.a('string');
};

module.export = { allCartsFixture, detailProductFixture };
