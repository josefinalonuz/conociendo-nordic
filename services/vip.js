/**
 * Modules dependencies
 */
const restclient = require('nordic/restclient')({
  timeout: 5000,
  baseURL: '/vip/cosa'
});

/**
 * Service interface
 */
class Service {
  static getSellerId(id) {
    return restclient.get(`/jose-api/${id}`)
      .then(response => response.data);
  };
}

/**
 * Expose Service
 */
module.exports = Service;
