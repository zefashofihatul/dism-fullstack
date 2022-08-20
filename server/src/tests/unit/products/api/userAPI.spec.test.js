process.env.NODE_ENV = 'test';

// Import the dev-dependencies
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../../../../server');

// Importing fixture
const { usersResponseFixture } = require('./fixtures/users');

chai.use(chaiHttp);

describe('API Users Entity', () => {
  let idUser;

  describe('POST /api/users', () => {
    let users = {
      id: 'idUser1',
      fullName: 'John Doe',
      emailAddress: 'johndoe@gmail.com',
      dateOfBirth: new Date(),
      gender: 'laki-laki',
      cityOfAddress: 'John Doe Address',
      newslatter: true,
    };

    it('Should Adding User', (done) => {
      chai
        .request(server)
        .post(`/api/users`)
        .send(users)
        .end((err, res) => {
          // Testing Payload for Status Code
          res.should.have.status(200);

          // Testing Payload for body response
          res.body.should.be.a('object');
          res.body.status.should.be.a('string');
          res.body.message.should.be.a('string,');

          // Save product Id
          idUser = res.body.data.id;

          // Testing Payload for data response
          usersResponseFixture(err, res);

          done();
        });
    });
  });

  describe('UPDATE /api/users/:idUser', () => {
    it('Should Update users data', (done) => {
      chai
        .request(server)
        .put(`/api/users/${idUser}`)
        .send()
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('status');
          res.body.status.should.be.a('string');

          res.body.should.have.property('message');
          res.body.message.should.be.a('string');

          res.body.should.have.property('data');
          res.body.data.should.be.a('object');

          usersResponseFixture(err, res);

          done();
        });
    });
  });

  describe('DELETE /api/users/:idUser', () => {
    it('Should Delete user', (done) => {
      chai
        .request(server)
        .delete(`/api/users/${idUser}`)
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
