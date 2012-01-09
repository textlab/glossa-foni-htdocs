(function($){
    var opts;
    var banger = function(arg){alert(arg);};
    var create_wrap = function(wrap) {
                wrap.mouseleave(function() {
                    picker.fadeOut('function');
                });
    };
    var create_label = function(txt) {
                label.text(txt);
                label.click(function() {
                    trigger.click()
                });
    };
    var create_trigger = function() {
                trigger.click(function() {
                    var offset = $(this).position();
                    var top = offset.top;
                    var left = offset.left + $(this).width() + 5;
                    $(picker).css({
                        'top': top,
                        'left': left
                    }).fadeIn('slow');
                });
    };
    var create_picker = function() {
                picker.append(info); // picker = the div, info = div
                for (var i in colors) {
                    picker.append('<span class="colorpicker-picker-span ' + (colors[i].color == $(obj).children(":selected").text() ? ' active' : '') + '" rel="' + colors[i].value + '" style="background-color: #' + colors[i].color + '; width: ' + options.size + 'px; height: ' + options.size + 'px;"></span>');
                }
                trigger.css('background-color', '#'+$(obj).children(":selected").text());
                picker.delegate(".colorpicker-picker-span", "click", function() {
                    $(obj).val($(this).attr('rel'));
                    $(obj).change();
                    picker.children('.colorpicker-picker-span.active').removeClass('active');
                    $(this).addClass('active');
                    trigger.css('background-color', $(this).css('background-color'));
                });
                $(obj).after(picker);
    };
    $.fn.jQLabel = function(options){
	alert('in');
        var defaults = {
            pointer:false,
            backgroundColor:"#CE0000", /* this will only be used if labels are not supplied */
	    colors:["red","orange","yellow","green","blue","purple","white"]
        }
        opts = $.extend(defaults, options);
	i = 0;

        $(this).each(function(){

	    var wrap = $('<div style="width:30px;height:20px;background-color:#f00;"></div>');
            var label = $('<div class="colorpicker-label"></div>');
            var trigger = $('<div class="colorpicker-trigger"></div>');
            var picker = $('<div style="width: ' + (options.size + 4) * options.count + 'px" class="colorpicker-picker"></div>');
            var info = $('<div class="colorpicker-picker-info"></div>');
            var clear = $('<div style="clear:both;"></div>');

            var key = $(this).text().toLowerCase();
	    var color = opts.colors[i++];
            $(this).css("backgroundColor", color);
	    $(this).text(color);
            if(opts['pointer']) $(this).css("cursor","pointer");
¼	    var txt = color.toUpperCase();
	    create_wrap(wrap);
	    wrap.text(txt + "!!!");
	    $(this).after(wrap);
        })
    }
})(jQuery);
