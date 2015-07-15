var express = require('express'),
    router = express.Router(),
    path = require('path');

router.get('/:module/:template',function (req, res){
    var module = req.params.module;
    var template = req.params.template;
    res.render(path.join(module,template));
});

module.exports = router;
