const addUserDetail = (dbRepository, dataUserDetail) => {
  return dbRepository.add(dataUserDetail);
};

module.exports = addUserDetail;
