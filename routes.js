const routes = require('next-routes')();

routes
  .add('/mailBox/:address', '/mailBox/showMailBox')
  .add('/mailBox/:address/manage', '/manage/manageMailBox')
  .add('/about','/about/about');

module.exports = routes;
