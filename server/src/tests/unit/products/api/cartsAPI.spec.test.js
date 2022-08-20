process.env.NODE_ENV = 'test';

// Import the dev-dependencies
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../../../../server');

// Importing fixture
const { allCartsFixture, detailProductFixture } = require('./fixtures/carts');

chai.use(chaiHttp);

describe('API Carts Entity', () => {
  let idProduct, idCart, idUser;

  describe('POST /api/carts/:idUser', () => {
    let carts = {
      idUser: 'userId1',
      idProduct: 'product1',
      color: 'Blue',
      thumb: 'this is thumb',
      quantity: 1,
      price: 20000,
    };

    it('Should Adding product to a cart', (done) => {
      chai
        .request(server)
        .post(`/api/carts/${idUser}`)
        .send(carts)
        .end((err, res) => {
          // Testing Payload for Status Code
          res.should.have.status(200);

          // Testing Payload for body response
          res.body.should.be.a('object');
          res.body.status.should.be.a('string');
          res.body.message.should.be.a('string,');
          res.body.total.should.be.a('number');
          res.body.data.should.be.a('array');

          // Save product Id
          productId = res.body.data[0].idProduct;
          cartId = res.body.data[0].id;

          // Testing Payload for data response
          allCartsFixture(err, res);

          done();
        });
    });
  });

  describe('GET /api/carts/:idUser/:idCart', () => {
    it('Should getting cart detail', (done) => {
      chai
        .request(server)
        .get(`/api/carts/${idUser}/${idCart}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('status');
          res.body.status.should.be.a('string');

          res.body.should.have.property('message');
          res.body.message.should.be.a('string');

          res.body.data.should.be.a('object');

          // Testing payload for data response
          detailProductFixture(err, res);

          done();
        });
    });
  });

  describe('GET /api/carts/:idUser', () => {
    it('Should getting cart with cart', (done) => {
      chai
        .request(server)
        .get(`/api/carts/${idUser}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('status');
          res.body.status.should.be.a('string');

          res.body.should.have.property('message');
          res.body.message.should.be.a('string');

          res.body.data.should.be.a('array');

          // Testing payload for data response
          detailProductFixture(err, res);

          // Testing payload for data products
          res.body.data.should.have.property('productsData');

          done();
        });
    });
  });

  describe('UPDATE /api/carts/:idCart', () => {
    it('Should Increase product quantity with cart id', (done) => {
      chai
        .request(server)
        .get(`/api/carts/${idCart}?action=increase`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('status');
          res.body.status.should.be.a('string');

          res.body.should.have.property('message');
          res.body.message.should.be.a('string');

          res.body.should.have.property('quantity');
          res.body.quantity.should.be.a('number');

          res.body.quantity.should.equal(2);

          done();
        });
    });

    it('Should Decrease item quantity with cart id', (done) => {
      chai
        .request(server)
        .get(`/api/carts/${idCart}?action=decrease`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('status');
          res.body.status.should.be.a('string');

          res.body.should.have.property('message');
          res.body.message.should.be.a('string');

          res.body.should.have.property('quantity');
          res.body.quantity.should.be.a('number');

          res.body.quantity.should.equal(1);

          done();
        });
    });
  });

  describe('DELETE /api/cart/:idCart', () => {
    it('Should Delete item on cart', (done) => {
      chai
        .request(server)
        .delete(`/api/carts/${idCart}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('status');
          res.body.status.should.be.a('string');

          res.body.should.have.property('message');
          res.body.message.should.be.a('string');

          done();
        });
    });
  });
});
