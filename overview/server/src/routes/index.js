const express = require('express');
const todoRoutes = require('./todo.route');

const router = express.Router();
const defaultRoutes = [
  {
    path: '/todo',
    routes: todoRoutes,
  },
];

defaultRoutes.forEach((r) => {
  router.use(r.path, r.routes);
});

module.exports = router;
