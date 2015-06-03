var Q3 = {
    exchange: function(string) {
        'use strict';
        
        var re = /(\d*)\s*(INR)/g;
        var exchangeRate = 9.95;

        function replace(str, value) {
            var newValue = parseFloat(value) / exchangeRate;

            return '£' + (Math.round(newValue * 100) / 100).toFixed(2);
        }

        return string.replace(re, replace);
    }
};

(function() {
    'use strict';

    var from = document.querySelector('#from');
    var to = document.querySelector('#to');

    to.innerHTML = Q3.exchange(from.value);

    from.addEventListener('blur', function() {
        to.innerHTML = Q3.exchange(from.value);
    });
})();