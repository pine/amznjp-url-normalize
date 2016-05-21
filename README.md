amznjp-url-normalize
--------------------
[![npm version](https://img.shields.io/npm/v/amznjp-url-normalize.svg?style=flat-square)](https://www.npmjs.com/package/amznjp-url-normalize)
[![Build Status](https://img.shields.io/travis/pine/amznjp-url-normalize/master.svg?style=flat-square)](https://travis-ci.org/pine/amznjp-url-normalize)
[![Coverage Status](https://img.shields.io/coveralls/pine/amznjp-url-normalize/master.svg?style=flat-square)](https://coveralls.io/r/pine/amznjp-url-normalize?branch=master)
[![Dependency Status](https://img.shields.io/david/pine/amznjp-url-normalize.svg?style=flat-square)](https://david-dm.org/pine/amznjp-url-normalize)
[![devDependency Status](https://img.shields.io/david/dev/pine/amznjp-url-normalize.svg?style=flat-square)](https://david-dm.org/pine/amznjp-url-normalize#info=devDependencies)

The URL normalizer of Amazon.co.jp. It works in Node.js, but any browsers not supported.

## Usage

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

## References

### normalize(url, cb)

```js
normalize("The URL of Amazon.co.jp", function (err, params) {
  // params.asin
  // params.url
});
```

### normalize(url, options, cb)

```js
var options = {
  prefix: 'http://www.amazon.co.jp/dp/', // A prefix of result URL
  suffix: '' // A suffix of result URL
};

normalize("The URL of Amazon.co.jp", options, function (err, params) {
  // params.asin
  // params.url
});
```

## License
MIT License
