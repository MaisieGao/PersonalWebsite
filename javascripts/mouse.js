// photo move when mouse move
$(function () { 
    $('.photo_words').mousemove(function (e) {
        var X = e.pageX;
        var Y = e.pageY;
        $(".image_XY").css({ "width": "39px", "height": "30px", "position": "absolute",'border-radius':10,"left": e.pageX - 20, "top": e.pageY - 15});
    });
});
