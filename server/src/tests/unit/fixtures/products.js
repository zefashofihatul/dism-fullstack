module.exports = {
  all: {
    success: {
      res: {
        statusCode: 200,
        headers: {
          'content-type': 'application/json',
        },
      },
      body: {
        status: 'success',
        data: [
          {
            id: false,
            name: '5fb1ad6afb45c431a842c394',
            price: 'title1',
            colors: 'description1',
            thumb:
              'http://localhost:8080/goodies-dig-blue-5fb1ad6afb45c43-thumb.jpg',
            images:
              'http://localhost:8080/goodies-dig-blue-5fb1ad6afb45c43-image1.jpg',
            createdAt: '2020-11-15T22:36:26.566Z',
            updatedAt: '2021-11-15T22:36:26.566Z',
          },
          {
            id: false,
            name: '5fb1ad6afb45c431a842c394',
            price: 'title1',
            colors: 'description1',
            thumb:
              'http://localhost:8080/goodies-dig-blue-5fb1ad6afb45c43-thumb.jpg',
            images:
              'http://localhost:8080/goodies-dig-blue-5fb1ad6afb45c43-image1.jpg',
            createdAt: '2020-08-15T22:36:26.566Z',
            updatedAt: '2021-10-15T22:36:26.566Z',
          },
        ],
      },
    },
    fail: {
      res: {
        statusCode: 404,
        headers: {
          'content-type': 'application/json',
        },
      },
      body: {
        status: 'error',
        message: 'That post does not exist.',
      },
    },
  },
};
