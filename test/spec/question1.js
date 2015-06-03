/* global describe, it, expect, dataImg */

(function() {
    'use strict';

    describe('Question 1 - Gallery', function() {
        describe('Init Gallery', function() {
            it('Should have data to init the gallery', function() {
            	expect(dataImg.length).to.be.at.least(1);
            });
        });
    });
})();