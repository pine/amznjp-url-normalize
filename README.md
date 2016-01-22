amznjp-url-normalize
--------------------
[![npm version](https://badge.fury.io/js/amznjp-url-normalize.svg)](http://badge.fury.io/js/amznjp-url-normalize)
[![Build Status](https://travis-ci.org/pine613/amznjp-url-normalize.svg?branch=master)](https://travis-ci.org/pine613/amznjp-url-normalize)
[![Coverage Status](https://coveralls.io/repos/pine613/amznjp-url-normalize/badge.svg?branch=master)](https://coveralls.io/r/pine613/amznjp-url-normalize?branch=master)
[![Dependency Status](https://david-dm.org/pine613/amznjp-url-normalize.svg)](https://david-dm.org/pine613/amznjp-url-normalize)
[![devDependency Status](https://david-dm.org/pine613/amznjp-url-normalize/dev-status.svg)](https://david-dm.org/pine613/amznjp-url-normalize#info=devDependencies)

Amazon.co.jp の URL を正規化します。クロスドメイン XHR には対応していないので、ブラウザでは動作しません。

## 利用方法

```js
var normalize = require('amznjp-url-normalize');

var url = 'http://www.amazon.co.jp/gp/product/B00Q5QBZCA/ref=s9_qpp_gw_p15_d7_i4?'
  + 'pf_rd_m=AN1VRQENFRJN5&pf_rd_s=center-3&'
  + 'pf_rd_r=05NNNANYG90DWEXJPA9W&pf_rd_t=101&'
  + 'pf_rd_p=155416509&pf_rd_i=489986';

normalize(url, function (err, params) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(params.asin); // => 'B00Q5QBZCA'
  console.log(params.url);  // => 'http://www.amazon.co.jp/dp/B00Q5QBZCA'
});
```

## リファレンス

### normalize(url, cb)

```js
normalize("Amazon.co.jp の商品ページの URL", function (err, params) {
  // params.asin
  // params.url
});
```

### normalize(url, options, cb)

```js
var options = {
  prefix: 'http://www.amazon.co.jp/dp/', // ASIN の前につける文字列
  suffix: '' // ASIN の後につける文字列
};

normalize("Amazon.co.jp の商品ページの URL", options, function (err, params) {
  // params.asin
  // params.url
});
```

## License
MIT License
