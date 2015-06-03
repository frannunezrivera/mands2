/* global describe, it, assert, Q2 */

var tpl = '<input id="name" type="text"><span></span>';
var div = document.createElement('div');
div.innerHTML = tpl;
var input = div.querySelector('input');
var users = ['test@test.com'];

(function() {
    'use strict';


    describe('Question 2 - Validation', function() {


        describe('Validate Number', function() {

            it('2 should be valid', function() {

                input.value = 2;
                assert.equal(Q2.validate.validateNumber(input), true);
            });

            it('200 should be valid', function() {
                input.value = 200;
                assert.equal(Q2.validate.validateNumber(input), true);
            });

            it('2.4 should not be valid', function() {
                input.value = 2.4;
                assert.equal(Q2.validate.validateNumber(input), false);
            });
        });

        describe('Validate Email', function() {

            it('fran should not be valid', function() {
                input.value = 'fran';
                assert.equal(Q2.validate.validateEmail(input), false);
            });

            it('fran@test should not be valid', function() {
                input.value = 'fran@test';
                assert.equal(Q2.validate.validateEmail(input), false);
            });

            it('fran@test.3 should not be valid', function() {
                input.value = 'fran@test.3';
                assert.equal(Q2.validate.validateEmail(input), false);
            });

            it('fran@test.com should not be valid', function() {
                input.value = 'fran@test.com';
                assert.equal(Q2.validate.validateEmail(input, users), true);
            });
        });

    });
})();