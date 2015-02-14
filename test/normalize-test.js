/*jslint node: true */
/*jslint nomen: true */
/*jslint expr: true */
/*globals describe, it */

var _ = require('lodash');
var chai = require('chai');
var expect = chai.expect;

var normalize = require('..');

var AMAZON_URLS = [
  {
    raw: 'http://www.amazon.co.jp/KiRa-KiRa-Sensation-Happy-maker-μ’s/dp/B00JZ20PEA/',
    normalized: 'http://www.amazon.co.jp/dp/B00JZ20PEA',
    asin: 'B00JZ20PEA'
  },
  {
    raw: 'http://www.amazon.co.jp/gp/product/B00PL9FQBS',
    normalized: 'http://www.amazon.co.jp/dp/B00PL9FQBS',
    asin: 'B00PL9FQBS'
  },
  {
    raw: 'http://www.amazon.co.jp/dp/B00Q5Y1P5Y/ref=s9_qpp_gw_p15_d7_i3',
    normalized: 'http://www.amazon.co.jp/dp/B00Q5Y1P5Y',
    asin: 'B00Q5Y1P5Y'
  }
];

describe('Normalize test', function () {
  'use strict';
  
  _.each(AMAZON_URLS, function (url, index) {
    var subject = 'should normalize url (index = ' + index + ', asin = ' + url.asin + ')';
    
    it(subject, function (done) {
      normalize(url.raw, function (err, params) {
        try {
          expect(err).to.not.be.ok;
          expect(params.asin).to.equal(url.asin);
          expect(params.url).to.equal(url.normalized);
          done();
        } catch (e) {
          done(e);
        }
      });
    });
  });
});