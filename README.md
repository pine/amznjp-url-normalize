amznjp-url-normalize
--------------------
[![npm version](https://badge.fury.io/js/amznjp-url-normalize.svg)](http://badge.fury.io/js/amznjp-url-normalize)
[![Build Status](https://travis-ci.org/pine/amznjp-url-normalize.svg?branch=master)](https://travis-ci.org/pine/amznjp-url-normalize)
[![Coverage Status](https://coveralls.io/repos/pine/amznjp-url-normalize/badge.svg?branch=master)](https://coveralls.io/r/pine/amznjp-url-normalize?branch=master)
[![Dependency Status](https://david-dm.org/pine/amznjp-url-normalize.svg)](https://david-dm.org/pine/amznjp-url-normalize)
[![devDependency Status](https://david-dm.org/pine/amznjp-url-normalize/dev-status.svg)](https://david-dm.org/pine/amznjp-url-normalize#info=devDependencies)

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
