/**
 * Created by narc on 21/05/16.
 */


$( document ).ready(function() {
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

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}