amznjp-url-normalize
--------------------

Amazon.co.jp の URL を正規化します。クロスドメイン XHR には対応していないので、ブラウザでは動作しません。

## 利用方法

```js
var normalize = require('amznjp-url-normalize');

normalize('http://www.amazon.co.jp/gp/product/B00Q5QBZCA/ref=s9_qpp_gw_p15_d7_i4?pf_rd_m=AN1VRQENFRJN5&pf_rd_s=center-3&pf_rd_r=05NNNANYG90DWEXJPA9W&pf_rd_t=101&pf_rd_p=155416509&pf_rd_i=489986', function (err, params) {
  if (err) {
    console.error(err);
  }
  
  console.log(params.asin); // => 'B00Q5Y1P5Y'
  console.log(params.url);  // => 'http://www.amazon.co.jp/dp/B00Q5Y1P5Y'
});
```

## ライセンス
MIT License<br />
Copyright (c) 2015 Pine Mizune
