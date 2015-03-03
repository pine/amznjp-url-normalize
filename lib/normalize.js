/*jslint node: true */
/*jslint nomen: true */

// Amazon.co.jp は Bot からのアクセスを規定の URL にリダイレクトする。
// その機能を利用して、URL を正規化する。
var BOT_USERAGENT =
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

var AMAZON_URL_FORMAT = {
  prefix: 'http://www.amazon.co.jp/dp/',
  suffix: ''
};


var _ = require('lodash');
var request = require('request').defaults({
  followRedirect: false,
  headers: {
    'User-Agent': BOT_USERAGENT
  }
});


function normalize(url, format, cb) {
  'use strict';
  
  if (_.isFunction(format)) {
    cb = format;
    format = AMAZON_URL_FORMAT;
  }
  
  request.head(url, function (err, res) {
    if (err) return cb(err);
    
    // 既に正規化済みの URL にアクセスした場合、Location ヘッダが付かない
    // そのため、Location ヘッダがない場合は元の URL を流用
    var location = res.headers.location || url;
    
    var re = /dp\/(\w+)/;
    var matches = location.match(re);
    
    if (!matches) {
      return cb('URL is invalid');
    }
    
    var asin = matches[1];

    cb(null, {
      asin: asin,
      url: format.prefix + asin + format.suffix
    });
  });
}


module.exports = normalize;