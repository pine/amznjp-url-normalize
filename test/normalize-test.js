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
  },
  {
    raw: 'http://www.amazon.co.jp/ソフトウェア・テストの技法-G-J-マイヤーズ/dp/4764900599',
    normalized: 'http://www.amazon.co.jp/dp/4764900599',
    asin: '4764900599'
  },
  {
    raw: 'http://www.amazon.co.jp/GAMBARU-SHOP-iPhone5%E5%AF%BE%E5%BF%9C-%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84-%E3%82%A2%E3%83%BC%E3%83%A0%E3%83%90%E3%83%B3%E3%83%89/dp/B00D8QF4A4/ref=sr_1_6?ie=UTF8&qid=1425571891&sr=8-6&keywords=%E3%83%A9%E3%83%B3%E3%83%8B%E3%83%B3%E3%82%B0',
    normalized: 'http://www.amazon.co.jp/dp/B00D8QF4A4',
    asin: 'B00D8QF4A4'
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
        }
        
        catch (e) {
          done(e);
        }
      });
    });
  });
  
  it('should normalize url with options', function (done) {
    var url = AMAZON_URLS[0];
    var options = {
      prefix: '[PREFIX]',
      suffix: '[SUFFIX]'
    };
    
    normalize(url.raw, options, function (err, params) {
      try {
        expect(err).to.not.be.ok;
        expect(params.asin).to.equal(url.asin);
        expect(params.url).to.equal(options.prefix + url.asin + options.suffix);
        done();
      }
      
      catch (e) {
        done(e); 
      }
    });
  });
  
  it('should normalize url failed because url is invalid', function (done) {
    normalize('http://www.xamazon.co.jp/invalid_url', function (err, params) {
      try {
        expect(err).to.be.ok;
        done();
      }
      
      catch (e) {
        done(e);
      }
    });
  });
  
  it('should normalize url failed because url isn\'t a item page', function (done) {
    var url = 'http://www.amazon.co.jp/gp/help/customer/display.html?ie=UTF8&nodeId=642938';
    normalize(url, function (err, params) {
      try {
        expect(err).to.be.ok;
        done();
      }
      
      catch (e) {
        done(e);
      }
    });
  });
});