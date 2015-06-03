/* global describe, it */

(function() {
    'use strict';

    describe('Question 1 - Gallery', function() {
        describe('Init Gallery', function() {
            it('Should have data to init the gallery', function() {
            	expect(dataImg).to.exist;
            	expect(dataImg.length).to.be.at.least(1);
            });

            it('Should have the same number of thumbs as the number', function() {
            	var galleryThumbs = document.querySelector('.thumbs');
            	var thumbNumber = galleryThumbs.querySelector('a');
            	expect(galleryThumbs).to.have.length.above(2);
            });
        });
    });
})();