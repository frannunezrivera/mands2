/* global describe, it, assert, Q3 */

(function() {
    'use strict';

    describe('Question 3 - Exchange Rate', function() {
        describe('Giving a correct string: The price of the leather bag is 590 INR', function() {
            it('Should return the string: The price of the leather bag is £59.30', function() {
                var str = 'The price of the leather bag is 590 INR';
                assert.equal(Q3.exchange(str), 'The price of the leather bag is £59.30');
            });
        });

        describe('Giving a correct string: The price of the leather bag is 590INR', function() {
            it('Should return the string: The price of the leather bag is £59.30', function() {
                var str = 'The price of the leather bag is 590INR';
                assert.equal(Q3.exchange(str), 'The price of the leather bag is £59.30');
            });
        });

        describe('Giving a correct string: The price of the leather bag is 100 INR', function() {
            it('Should return the string: The price of the leather bag is 10.05 INR', function() {
                var str = 'The price of the leather bag is 100 INR';
                assert.equal(Q3.exchange(str), 'The price of the leather bag is £10.05');
            });
        });

        describe('Giving a wrong string: The price of the leather bag is $123', function() {
            it('Should return the string: The price of the leather bag is £59.30', function() {
                var str = 'The price of the leather bag is 590INR';
                assert.equal(Q3.exchange(str), 'The price of the leather bag is £59.30');
            });
        });
    });
})();