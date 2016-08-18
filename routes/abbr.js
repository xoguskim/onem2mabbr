var express = require('express');
var router = express.Router();
var abbrStore = require('../persist/abbrStore');

router.get('/', function(req, res, next) {
  var result = abbrStore.getWordList();
  res.json(result);
});

router.get('/:word', function(req, res, next) {
  var result = abbrStore.getWordList(req.params.word);
  res.json(result);
});


router.put('/:word', function(req, res, next) {
  var result = abbrStore.putWord(req.params.word, req.body.desc);
  res.json(result);
});

router.put('/', function(req, res, next) {
  var result = abbrStore.putWord(req.body.key, req.body.desc);
  res.json(result);
});



router.delete('/:word', function(req, res, next) {
  var result = abbrStore.deleteWord(req.params.word);
  res.json(result);
});

module.exports = router;
