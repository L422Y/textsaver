var textsaver = (function (AnsiLove) {
    "use strict";

    var 
        _ansilove = AnsiLove,
        _files = [],
        _running = true,
        _ratio =  $(window).width() / 640,
        _px_per_col = $(window).width()/80,
        _px_per_row = 16,
        _scrollPos = 0,
        _scrollInterval,
        _last_canvas,
        _timeout,
        _src_data,
        _src_context,
        _scrollTo,
        _screen_canvas,
        _screen_context,
        _offscreen_canvas,
        _offscreen_context;


    var opts = {
           time_per_row: 200 //ms
        }

    var _go = function (files, opts) {
            _files = files;



            _offscreen_canvas = document.createElement('canvas');
            _offscreen_canvas.width = 640;
            _offscreen_canvas.height = 400;
            _offscreen_context = _offscreen_canvas.getContext("2d");

            _screen_canvas = document.createElement('canvas');
            _screen_canvas.width = 640;
            _screen_canvas.height = 400;
            _screen_context = _screen_canvas.getContext("2d");

            $('body').append(_screen_canvas);

            _nextRandom();
        }

    var _nextRandom = function () {
        var _file = _files[Math.floor(Math.random() * _files.length)];
        _ansilove.render(_file, function (canvas, sauce) {
                _last_canvas = canvas;
                _src_context = canvas.getContext("2d");
                _src_data = _src_context.getImageData(0, 0, _src_context.canvas.width, _src_context.canvas.height);
                _scrollIt(canvas);
            },
            {"font": "80x25", "bits": "8", "icecolors": 1, "columns": 80});

    }
    
    var _scrollIt_canvas;
    var _window_height = $(window).height();
    var _old_data = null;
    var _old_offset = 0;

    var _scrollIt = function ($canvas) {
        _window_height = $(window).height();
        _scrollPos = 400;
        _scrollTo = -$canvas.height + _screen_canvas.height;
        _scrollIt_canvas = $canvas;
        _scrollIt_next();
    }

    var _scrollIt_next = function () {
        _scrollPos-=_px_per_row;
        if(_scrollPos<=_scrollTo){
            _old_data = _offscreen_context.getImageData(0, 0, _src_context.canvas.width, _src_context.canvas.height, 0, _scrollPos);
          _nextRandom();
          _old_offset = -_px_per_row;
          return  
        } 
        _old_offset-=_px_per_row;
        if(_old_data)_offscreen_context.putImageData(_old_data,0,_old_offset);
        _offscreen_context.putImageData(_src_data, 0, _scrollPos);
        _screen_context.drawImage(_offscreen_canvas, 0, 0);

        clearTimeout(_scrollInterval);
        //* (_scrollPos>20?_scrollPos/_scrollTo:1)
        _scrollInterval = setTimeout(_scrollIt_next,opts.time_per_row);
    }

    return {
        go: _go
    };


}(AnsiLove));