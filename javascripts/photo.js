
// when the mouse is over a Photo, other photos become dark.
$(function(){
    $('.box').hover(function(){
        $(this).siblings().fadeTo(400, 0.2);
    }, function(){
        $(this).siblings().fadeTo(400, 1);
    })
})
