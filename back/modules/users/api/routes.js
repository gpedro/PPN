var _ctrl = require('./controllers');

var rotas = [
  {
    method:'get',
    cb:_ctrl.getAll,
    url:'/'
  },
  {
    method:'get',
    cb:_ctrl.getOne,
    url:'/:id'
  },
  {
    method:'put',
    cb: _ctrl.createUser,
    url:'/'
  },
  {
    method:'post',
    cb:_ctrl.editUser,
    url:'/:id'
  }
];

module.exports = function (router) {
  routeMaker(rotas, router);
  return router;
};
