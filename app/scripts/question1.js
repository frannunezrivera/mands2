var dataImg = [{
    thumb: 'http://placehold.it/140x100&text=Image+One',
    large: 'http://placehold.it/350x150&text=Image+One+Large',
    type: 'img'
}, {
    thumb: 'http://placehold.it/140x100&text=Image+Two',
    large: 'http://placehold.it/350x150&text=Image+Two+Large',
    type: 'video'
}, {
    thumb: 'http://placehold.it/140x100&text=Image+Three',
    large: 'http://placehold.it/350x150&text=Image+Three+Large',
    type: 'img'
}];

var tpl = {
    img: '<img src="{{source}}" data-index="{{index}}"/>',
    video: '<video width="350" height="150" controls="" autoplay="" data-index="{{index}}"><source src="http://clips.vorwaerts-gmbh.de/VfE.webm" type="video/webm"></video>'
};

(function() {
    'use strict';

    var template = function(tpl, data) {
        var re = /{{([^}}]+)?}}/g,
            match = re.exec(tpl);

        while (match !== null) {
            tpl = tpl.replace(new RegExp(match[0], 'g'), data[match[1]]);
            match = re.exec(tpl);
        }
        return tpl;
    };

    function showBig(e) {
        e.preventDefault();
        var data = {};
        var type;

        data.source = e.currentTarget.href;
        data.index = e.currentTarget.dataset.index;
        type = e.currentTarget.dataset.type;

        largeImgContainer.innerHTML = template(tpl[type], data);
    }

    function addThumbs() {
        var tpl = '<a href="{{large}}" title="Image {{index}}" data-index="{{index}}" data-type="{{type}}"><img src="{{thumb}}" /></a> ';
        var html = '';

        dataImg.forEach(function(obj, index) {
            obj.index = index + 1;
            html += template(tpl, obj);
        });
        galleryThumbs.innerHTML = html;

        var thumbs = galleryThumbs.querySelectorAll('a');
        for (var i = 0; i < thumbs.length; i++) {
            thumbs[i].onclick = showBig;
        }

        return thumbs;
    }

    function navigate(e) {
        e.preventDefault();
        var index;
        var element = largeImgContainer.childNodes[0];
        if (e.target.dataset.navigate === 'prev') {
            index = parseInt(element.dataset.index) - 1;
            if (index < 1) {
                return;
            } else {
                thumbs.item(index - 1).click();
            }
        } else {
            index = parseInt(element.dataset.index) + 1;
            if (index > thumbs.length) {
                return;
            } else {
                thumbs.item(index - 1).click();
            }
        }
    }

    var largeImgContainer = document.querySelector('#largeImgContainer');
    var galleryThumbs = document.querySelector('.thumbs');
    var navigatorLinks = document.querySelector('#largeImg').querySelectorAll('a');
    var thumbs = addThumbs();

    for (var i = 0; i < navigatorLinks.length; i++) {
        navigatorLinks[i].onclick = navigate;
    }
})();