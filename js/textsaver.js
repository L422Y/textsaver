var textsaver = (function (AnsiLove) {
    "use strict";

    var _ansilove = AnsiLove;
    var _files = [];
    var _last_canvas = null;
    var _timeout = null;
    var _running = true;
    var _current_time = 120;
    var opts = {
        time_per_px: 10 //ms
    }

    var _go = function (files, opts) {
        _files = files;
        _nextRandom();

    }

    var _nextRandom = function () {
        var _file = _files[Math.floor(Math.random() * _files.length)];
        _ansilove.render(_file, function (canvas, sauce) {
                console.log(sauce);
                var _canvas = $(canvas);
                if (_last_canvas) $(_last_canvas).fadeOut(10, function () {
                    $(this).remove();
                });
                _canvas.hide().appendTo($('body'));
                _canvas.css('top', $(window).height()).show();
                clearTimeout(_timeout);
                _last_canvas = _canvas;
                _current_time = _canvas.height() * opts.time_per_px;

                _scrollIt(_canvas);
                _timeout = setTimeout(_nextRandom, _current_time);

            },
            {"font": "80x25", "bits": "8", "icecolors": 1, "columns": 80});

    }

    var _scrollIt = function ($canvas) {
        var _scrollTo = $canvas.height();
        $($canvas).animate({top: -_scrollTo}, {
            duration: _current_time,
            step: function (now, fx) {
                fx.now = parseInt(now /16) * 16;
            },
            easing: 'linear'
        });
    }

    return {
        go: _go
    };


}(AnsiLove));