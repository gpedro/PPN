var express = require('express');
var router = express.Router();
var _ctrl = require('./controllers');

router.get('/'     , _ctrl_getAll);
router.get('/:id'  , _ctrl.getOne);
router.put('/'     , _ctrl.createUser);
router.post('/:id' , _ctrl.editUser);

module.exports = function (app) {
  app.use('/users', router);
};