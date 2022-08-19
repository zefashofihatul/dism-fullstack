process.env.NODE_ENV = 'test';

// Import the dev-dependencies
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../../../../server');

// Importing fixture
const {
  detailProductFixture,
  allProductsFixture,
} = require('./fixtures/products');

chai.use(chaiHttp);

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
          // Testing Payload for Status Code
          res.should.have.status(200);

          // Testing Payload for body response
          res.body.should.be.a('object');
          res.body.data.should.be.a('object');
          res.body.status.should.be.a('string');

          // Save product Id
          productId = res.body.data.id;

          // Testing Payload for data response
          detailProductFixture(err, res);

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
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('GET from Endpoint /api/products/${productId}', () => {
    it('Should Get detail Product', (done) => {
      chai
        .request(server)
        .get(`/api/products/${productId}`)
        .end((err, res) => {
          // console.log(res.body);
          // Testing response Status, Code, & Message
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.status.should.be.a('string');

          // Testing response data type
          res.body.data.should.be.a('object');

          // Testing all data response
          detailProductFixture(err, res);

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
          // Testing response Status, Code & Message
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.status.should.be.a('string');

          // Testing response data type
          res.body.data.should.be.a('array');

          // Testing all data response
          allProductsFixture(err, res);

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
          // Testing response Status, Code & Message
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.status.should.be.a('string');

          // Testing response data type
          res.body.data.should.be.a('object');

          // Testing all data response
          detailProductFixture(err, res);

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
