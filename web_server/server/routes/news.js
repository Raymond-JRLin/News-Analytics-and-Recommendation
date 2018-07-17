var express = require('express');
var router = express.Router();

/* GET news listing. */
router.get('/', function(req, res, next) {
  news = [
    { 'url': 'http://us.cnn.com/2017/02/15/politics/andrew-puzder-failed-nomination/index.html',
      'title': "Inside Andrew Puzder's failed nomination",
      'description': "In the end, Andrew Puzder had too much baggage",
      'source': "cnn",
      'urlToImage': 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170215162504-puzder-trump-file-super-tease.jpg',
      'digest':"3RjuEomJo2601syZbU7OHA==\n",
      'reason': "Recommand"
    }, {
      'url': 'http://techcrunch.com/2017/03/23/zero-motorcycles-cto-abe-askenazi-on-the-future-of-two-wheeled-evs/index.html',
      'title': "Zero Motorcycles CTO Abe Askenazi on the future of two-wheeled EVs",
      'description': "In the end, Andrew Puzder had too much baggage",
      'source': "techcrunch",
      'urlToImage': 'https://techcrunch2011.files.wordpress.com/2017/03/screen-shot-2017-03-23-at-14-04-01.png?w=764&h=400&crop=1',
      'digest':"3RjuEomJo2601syZbU7OHA==\n",
      'time': "Today",
      'reason': "Hot"
    }
  ];
  res.json(news);
});

module.exports = router;
