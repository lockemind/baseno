/**
 * Created by narc on 21/05/16.
 */
(function($,sr){

    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    // smartresize
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

// usage:
$(window).smartresize(function(){
    // code that takes it easy...
    setHeaderSize();
});

if (sessionStorage.navigation_reached) {
    var header_cover = $('.header');
    header_cover.css({"display":"none"});
    $('.baseno-nav').addClass('navbar-fixed-top');
}
setHeaderSize();


var navigation_reached = new Waypoint({
    element: document.getElementById('nav'),
    handler: function(direction) {
        if (sessionStorage.navigation_reached != true) {
            sessionStorage.navigation_reached = true;
            var header_cover = $('.header');
            header_cover.fadeOut();
            $(window).scrollTop(0);
            $('.baseno-nav').addClass('navbar-fixed-top');
        }
    }
});


$(document).ready(function() {
    console.log( "ready!" );
    var pathname = window.location.pathname; // Returns path only
    var url      = window.location.href;     // Returns full URL
    var hash = window.location.hash.substring(1);

    console.log("baseno: pathname" , pathname);
    console.log("baseno: url" , url);
    console.log("baseno: hash" , hash);

    if (hash) {
        scrollToAnchor(hash);
    }
});

function scrollToAnchor(aid, offset){
    if (offset == undefined) {
        offset = 0;
    }

    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top + offset},'slow');
}


function setHeaderSize(){
    var vHeight = $(window).height(),
        vWidth = $(window).width(),
        header_cover = $('.header');

    header_cover.css({"height":vHeight,"width":vWidth});
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('baseno-nav').addClass("sticky");
    }
    else{
        $('baseno-nav').removeClass("sticky");
    }
});