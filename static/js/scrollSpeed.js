// scrollSpeed.js
(function($){
    jQuery.scrollSpeed = function(step, speed, easing) {
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0,
            scroll = false,
            direction = 'up',
            step = step || 100,
            speed = speed || 800;

        var rootFinder = function(event) {
            var scrollTop = $window.scrollTop();
            if (!scroll) root = scrollTop;
            if (event.deltaY < 0) direction = 'up';
            else direction = 'down';
        };

        var scrollAnimator = function(event) {
            event.preventDefault();
            scroll = true;
            var delta = event.originalEvent.deltaY;
            if (direction == 'up') root -= step;
            else root += step;

            $body.stop().animate({ scrollTop: root }, speed, option, function() {
                scroll = false;
            });
        };

        $window.on('wheel', rootFinder);
        $window.on('wheel', scrollAnimator);
    };

    jQuery.easing['default'] = function (x,t,b,c,d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
})(jQuery);
