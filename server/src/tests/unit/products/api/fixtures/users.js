const usersResponseFixture = (err, res) => {
  res.body.data.should.have.property('id');
  res.body.data.id.should.be.a('string');

  res.body.data.should.have.property('fullName');
  res.body.data.fullName.should.be.a('string');

  res.body.data.should.have.property('emailAddress');
  res.body.data.emailAddress.should.be.a('string');

  res.body.data.should.have.property('dateOfBirth');
  res.body.data.dateOfBirth.should.be.a('string');

  res.body.data.should.have.property('gender');
  res.body.data.gender.should.be.a('string');

  res.body.data.should.have.property('cityOfAddress');
  res.body.data.cityOfAddress.should.be.a('string');

  res.body.data.should.have.property('newslater');
  res.body.data.newslater.should.be.a('boolean');
};

module.exports = { usersResponseFixture };
