const {
  addBooksHandler,
  getBooksHandler,
  getBooksDetailHandler,
  putBooksHandler,
  deleteBooksHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
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
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksHandler,
  },
];

module.exports = routes;
