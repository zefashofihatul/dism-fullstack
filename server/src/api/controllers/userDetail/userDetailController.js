const addUserDetail = require('../../application/use_cases/userDetails/addUserDetail');
const findUserDetailById = require('../../application/use_cases/userDetails/findUserDetailById');
const updateUserDetailById = require('../../application/use_cases/userDetails/updateUserDetailById');

// Dependency
const { v4: uuidv4 } = require('uuid');
const InvariantError = require('../../middlewares/exceptions/InvariantError');

const userDetailController = (userDetailDbRepositoryPostgres) => {
  const dbRepository = userDetailDbRepositoryPostgres();

  const addNewUserDetail = (req, res, next) => {
    const { id } = req.params;
    const { fullname, gender, dateOfBirth, newslater } = req.body;

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
        console.log(result);
        if (!result) {
          throw new InvariantError('Fail to add user detail');
        }
        res.status(200).send({
          status: 'Success',
          message: `Success to add user with id: ${id}`,
          data: result.dataValues,
        });
      })
      .catch((err) => next(err));
  };

  const updateUserDetail = (req, res, next) => {
    const { id: idUser } = req.params;
    const { fullname, gender, dateOfBirth, newslater } = req.body;
    updateUserDetailById(dbRepository, idUser, {
      fullname,
      gender,
      dateOfBirth,
      newslater,
    })
      .then((result) => {
        console.log(result);
        if (!result) {
          throw new InvariantError('Fail to Update Detail User');
        }
        res.status(200).send({
          status: 'Success',
          Message: `Update with id ${idUser} success`,
          data: result[1][0].dataValues,
        });
      })
      .catch((err) => next(err));
  };

  return {
    addNewUserDetail,
    updateUserDetail,
  };
};

module.exports = userDetailController;
