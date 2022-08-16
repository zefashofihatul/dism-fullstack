const findAll = (params, postRepository) => {
  return postRepository.findAll(params);
};
module.exports = findAll;
