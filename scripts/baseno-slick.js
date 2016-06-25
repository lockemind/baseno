/**
 * Created by narc on 24/05/16.
 */
$(document).ready(function(){

    $('.project-slider').slick({
        arrows: false,
        adaptiveHeight: true
    });



    $('.slide-previous').hover(
        function() {
            $(this).find("i").hide();
            $(this).append( $( "<div class='slide-legend'>Previous Project</div>" ) );
        }, function() {
            $(this).find("i").show();
            $(this).find( "div:last" ).remove();
        }
    )

    $('.slide-next').hover(
        function() {
            $(this).find("i").hide();
            $(this).append( $( "<div class='slide-legend'>Next Project</div>" ) );
        }, function() {
            $(this).find("i").show();
            $(this).find( "div:last" ).remove();
        }
    )
});


