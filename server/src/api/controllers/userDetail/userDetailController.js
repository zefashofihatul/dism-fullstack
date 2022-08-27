const addUserDetail = require('../../application/use_cases/userDetails/addUserDetail');
const findUserDetailById = require('../../application/use_cases/userDetails/findUserDetailById');
const updateUserDetailById = require('../../application/use_cases/userDetails/updateUserDetailById');
const findUserDetailByProperty = require('../../application/use_cases/userDetails/findUserDetailbyProperty');

// Dependency
const { v4: uuidv4 } = require('uuid');
const InvariantError = require('../../middlewares/exceptions/InvariantError');

const userDetailController = (userDetailDbRepositoryPostgres) => {
  const dbRepository = userDetailDbRepositoryPostgres();

  const addNewUserDetail = (req, res, next) => {
    const { id } = req.user;
    const { fullname, gender, dateOfBirth, newslater } = req.body;
    console.log(fullname, gender, dateOfBirth, newslater);
    addUserDetail(dbRepository, {
      id: uuidv4(),
      idUser: id,
      fullname,
      gender,
      dateOfBirth,
      newslater,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then((result) => {
        if (!result) {
          throw new InvariantError('Fail to add user detail');
        }
        res.status(201).send({
          status: 'Success',
          message: `Success to add user with id: ${id}`,
          data: result.dataValues,
        });
      })
      .catch((err) => next(err));
  };

  const updateUserDetail = (req, res, next) => {
    const { id: idUser } = req.user;
    const { fullname, gender, dateOfBirth, newslater } = req.body;
    updateUserDetailById(dbRepository, idUser, {
      fullname,
      gender,
      dateOfBirth,
      newslater,
    })
      .then((result) => {
        if (!result) {
          throw new InvariantError('Fail to Update Detail User');
        }
        res.status(200).send({
          status: 'Success',
          message: `Update with id ${idUser} success`,
          data: result[1][0].dataValues,
        });
      })
      .catch((err) => next(err));
  };

  const fetchUserDetailById = (req, res, next) => {
    const { id } = req.user;
    findUserDetailByProperty(dbRepository, id, {
      idUser: id,
    })
      .then((result) => {
        return res.status(200).send({
          status: 'Success',
          data: result[0].dataValues,
        });
      })
      .catch((err) => next(err));
  };

  return {
    addNewUserDetail,
    updateUserDetail,
    fetchUserDetailById,
  };
};

module.exports = userDetailController;
