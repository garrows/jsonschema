'use strict';

/*jsl predef:define*/
/*jsl predef:it*/

var Validator = require('../lib/validator');
var should = require('chai').should();

describe('oneOf', function() {
  describe('simple oneOf', function() {
    beforeEach(function() {
      this.validator = new Validator();
    });

    it('should validate string or null', function() {
      this.validator.validate('im a string', {
        oneOf: [{
          type: 'string'
        }, {
          type: 'null'
        }]
      }).valid.should.be.true;
    });

    it('should validate null or string', function() {
      this.validator.validate('im a string', {
        oneOf: [{
          type: 'null'
        }, {
          type: 'string'
        }]
      }).valid.should.be.true;
    });

    it('should validate complex string or null', function() {

      var schema = {
        type: 'object',
        properties: {
          one: {
            oneOf: [{
              type: 'string'
            }, {
              type: 'null'
            }]
          }
        }
      };

      this.validator.validate({
        one: null
      }, schema).valid.should.be.true;
    });

    it('should validate complex null or string', function() {

      var schema = {
        type: 'object',
        properties: {
          one: {
            oneOf: [{
              type: 'null'
            }, {
              type: 'string'
            }]
          }
        }
      };

      this.validator.validate({
        one: null
      }, schema).valid.should.be.true;
    });


  });

});
