;(function($) {
    $.fn.positionNav = function(settings) {

        var opts = $.extend({
            style:"active",
            attr:"pnav",
            speed:300
        }, settings);

        return this.each(function() {
            var $this = $(this);

            var scrollModuls = $(getAttrStr()).filter(function() {
                return !$(this).closest($this).length;
            });

            $this.find(getAttrStr()).on("click", function() {
                var top = scrollModuls.filter(getAttrStr($(this).attr(opts.attr))).offset().top;
                $('html,body').animate({scrollTop: top}, opts.speed);
            });

            $(window).on("scroll", function(event) {
                scrollModuls.each(function(i, modul) {
                    var $modul = $(modul);
                    var scrollTop = $(window).scrollTop();
                    var modulTop = $modul.offset().top;
                    var nav = $this.find(getAttrStr($modul.attr(opts.attr)));
                    if((modulTop + $modul.outerHeight(true) >= scrollTop) &&
                            modulTop <= scrollTop && !nav.hasClass(opts.style)) {
                        $this.find(getAttrStr()).removeClass(opts.style);
                        nav.addClass(opts.style);
                    }
                });
            }).scroll();

            function getAttrStr(value) {
                return "[" + opts.attr + (value ? ("='" + value + "'") : "") + "]";
            }
        });
    };
})(jQuery);
