process.env.NODE_ENV = 'test';

// Import the dev-dependencies
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../../../../server');

chai.use(chaiHttp);

const generateId = (name) => name.split(' ').join('_');

describe('API Products Entity', () => {
  let productId;

  describe('POST /api/products', () => {
    let product = {
      name: 'Cabacity Log Bag',
      shortDescription:
        'Cabacity Log Bag, Tas serba bisa yang sangat bagus dan berkualitas',
      price: 70000,
      color: 'White',
      dimensions: '90L',
      details: 'Details mengenai Cabacity Log Bag',
      thumb: 'uploads/thumb',
      category: 'Life Style',
      images: 'images/image',
      materials: 'crock',
    };

    it('It Should POST a Products', (done) => {
      chai
        .request(server)
        .post('/api/products')
        .send(product)
        .end((err, res) => {
          res.should.have.status(200);

          res.body.should.be.a('object');
          res.body.data.should.be.a('object');
          res.body.status.should.be.a('string');

          res.body.data.should.have.property('id');
          res.body.data.id.should.be.a('string');

          productId = res.body.data.id;

          res.body.data.should.have.property('name');
          res.body.data.name.should.be.a('string');

          res.body.data.should.have.property('shortDescription');
          res.body.data.shortDescription.should.be.a('string');

          res.body.data.should.have.property('details');
          res.body.data.details.should.be.a('string');

          res.body.data.should.have.property('color');
          res.body.data.color.should.be.a('string');

          res.body.data.should.have.property('dimensions');
          res.body.data.dimensions.should.be.a('string');

          res.body.data.should.have.property('materials');
          res.body.data.materials.should.be.a('string');

          res.body.data.should.have.property('category');
          res.body.data.category.should.be.a('string');

          res.body.data.should.have.property('price');
          res.body.data.price.should.be.a('number');

          res.body.data.should.have.property('thumb');
          res.body.data.thumb.should.be.a('string');

          res.body.data.should.have.property('images');
          res.body.data.images.should.be.a('string');

          res.body.data.should.have.property('createdAt');
          res.body.data.createdAt.should.be.a('string');

          res.body.data.should.have.property('updatedAt');
          res.body.data.updatedAt.should.be.a('string');

          done();
        });
    });

    it('It Should getting Error', (done) => {
      chai
        .request(server)
        .post('/api/products')
        .send(product)
        .end((err, res) => {
          // TODO : Validator products for INPUT
          console.log(res.body);
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('GET from Endpoint /api/products', () => {
    it('Should GET all the Products', (done) => {
      chai
        .request(server)
        .get('/api/products')
        .end((err, res) => {
          res.should.have.status(200);

          res.body.should.be.a('object');
          res.body.data.should.be.a('array');
          res.body.status.should.be.a('string');

          res.body.data[0].should.have.property('id');
          res.body.data[0].id.should.be.a('string');

          res.body.data[0].should.have.property('name');
          res.body.data[0].name.should.be.a('string');

          res.body.data[0].should.have.property('price');
          res.body.data[0].price.should.be.a('number');

          res.body.data[0].should.have.property('color');
          res.body.data[0].color.should.be.a('string');

          res.body.data[0].should.have.property('category');
          res.body.data[0].category.should.be.a('string');

          res.body.data[0].should.have.property('thumb');
          res.body.data[0].thumb.should.be.a('string');

          res.body.data[0].should.have.property('images');
          res.body.data[0].images.should.be.a('string');

          res.body.data[0].should.have.property('createdAt');
          res.body.data[0].createdAt.should.be.a('string');

          res.body.data[0].should.have.property('updatedAt');
          res.body.data[0].updatedAt.should.be.a('string');

          done();
        });
    });
  });

  describe('UPDATE from Endpoint /api/products/:productId', () => {
    let product = {
      name: 'Cabacity Log Bag Setelah Update',
      shortDescription:
        'Cabacity Log Bag, Tas serba bisa yang sangat bagus dan berkualitas',
      price: 70000,
      color: 'White',
      dimensions: '90L',
      details: 'Details mengenai Cabacity Log Bag',
      thumb: 'uploads/thumb',
      category: 'Life Style',
      images: 'images/image',
      materials: 'crock',
    };
    it('Should update products', (done) => {
      chai
        .request(server)
        .put(`/api/products/${productId}`)
        .send(product)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');

          res.body.should.have.property('status');
          res.body.status.should.be.a('string');

          res.body.should.have.property('data');
          res.body.data.should.be.a('object');

          res.body.should.have.property('message');
          res.body.message.should.be.a('string');

          res.body.data.id.should.be.a('string');
          res.body.data.name.should.be.a('string');
          res.body.data.shortDescription.should.be.a('string');
          res.body.data.price.should.be.a('number');
          res.body.data.color.should.be.a('string');
          res.body.data.dimensions.should.be.a('string');
          res.body.data.details.should.be.a('string');
          res.body.data.thumb.should.be.a('string');
          res.body.data.images.should.be.a('string');
          res.body.data.createdAt.should.be.a('string');
          res.body.data.updatedAt.should.be.a('string');
          done();
        });
    });
  });

  describe('DELETE from Endpoint /api/products/:productId', () => {
    it('Should delete that product', (done) => {
      chai
        .request(server)
        .delete(`/api/products/${productId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.status.should.be.a('string');
          res.body.should.have.property('message');
          res.body.message.should.be.a('string');
          done();
        });
    });
  });
});
