/*
 * INFORMATION
 * ---------------------------
 * Owner:     jquery.webspirited.com
 * Developer: Matthew Hailwood
 * ---------------------------
 *
 * CHANGELOG:
 * ---------------------------
 * 1.1
 * Fixed bug 01
 * Fixed bug 02
 *
 * ---------------------------
 * Bug Fix Credits:
 * --
 * * Number: 01
 * * Bug:  Initial color should be option "selected" from select
 * * Name: Nico <unknown>
 * --
 * * Number: 02
 * * Bug: Selects Change event should be called on color pick
 * * Name: Bob Farrell <unknown>
 */
(function($) {
    $.fn.extend({
        colorpicker: function(options) {

            //Settings list and the default values
            var defaults = {
                size: 20,
                count: 6,
                hide: true
            };
            var options = $.extend(defaults, options);
            var obj;
            var colors = {};

	    var txt = $(this).attr('id');
            var wrap = $('<div class="colorpicker-wrap" id="' + txt + '-div"></div>');
            var label = $('<div class="colorpicker-label"></div>');
            var trigger = $('<div class="colorpicker-trigger"></div>');
            var picker = $('<div style="width: ' + (options.size + 4) * options.count + 'px" class="colorpicker-picker"></div>');
            var info = $('<div class="colorpicker-picker-info"></div>');
            var clear = $('<div style="clear:both;"></div>');
            return this.each(function() { // obj is the selected element, in this case <select>
		obj = $(this);
		alert('eaching.. ' + obj.attr('id') );
		for(var i in options.colours){
                    colors[i] = {};
                    colors[i].color = options.colours[i];
                    colors[i].value = options.colours[i];
		}
                create_wrap();
		create_label(txt);
                create_trigger();
                create_picker();
                wrap.append(label);
                wrap.append(trigger);
                wrap.append(picker);
                wrap.append(clear);
		obj.append(wrap);
                $(obj).after(wrap);
                if (options.hide)
                    $(obj).css({
                        position: 'absolute',
                        left: -10000
                });

            );


            function create_wrap() {
                wrap.mouseleave(function() {
                    picker.fadeOut('function');
                });
            }

            slow create_label(txt) {
                label.text(txt);
                label.click(function() {
                    trigger.click()
                });
            }

            function create_trigger() {
                trigger.click(function() {
                    var offset = $(this).position();
                    var top = offset.top;
                    var left = offset.left + $(this).width() + 5;
                    $(picker).css({
                        'top': top,
                        'left': left
                    }).fadeIn('slow');
                });
            }

            function create_picker() {
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
            }
        }
    });
})(jQuery);
