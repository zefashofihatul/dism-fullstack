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
  describe('POST /api/products', () => {
    it('It Should POST a Products', (done) => {
      let product = {
        id: generateId('Cabacity Log Bag'),
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
        createdAt: new Date(),
        updateAt: new Date(),
      };

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

          res.body.data.should.have.property('meterials');
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
  });

  describe('GET /api/products', () => {
    it('It Should GET all the Products', (done) => {
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
});
