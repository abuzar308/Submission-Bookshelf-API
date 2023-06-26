const {
  addBooksHandler,
  getBooksHandler,
  getBooksDetailHandler,
  putBooksHandler,
  deleteBooksHandler,
} = require('./handler');
const schema = require('./validate');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
    options: {
      validate: {
        payload: schema,
      },
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBooksDetailHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: putBooksHandler,
    options: {
      validate: {
        payload: schema,
      },
    },
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksHandler,
  },
];

module.exports = routes;
