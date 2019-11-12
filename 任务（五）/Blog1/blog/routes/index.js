var express = require('express');
var {users,chapterList} = require('../data.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',function(req,res,next){
  if(users[0].username === req.body.un && users[0].password === req.body.pwd){
    res.redirect('/list');
  }else if(req.body.un === '' && req.body.pwd !== ''){
    res.end('plase enter account!!!')
  }else if(req.body.pwd === '' && req.body.un !== ''){
    res.end('plase enter password!!!')
  }else if(req.body.un === '' && req.body.pwd === ''){
    res.end('plase enter account and password!!!')
  }else{
    res.end('account or password is wrong!!!')
  }
});
module.exports = router;
