'use strict';

module.exports = {
  routes: [ //custom routes
    {
      method: 'GET',
      path: '/book/:id/like',
      handler: 'book.like'
    }
  ]
}