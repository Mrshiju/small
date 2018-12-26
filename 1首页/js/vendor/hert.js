var $hands = $('.hert_show  img');
var $hand = $('.hert_showtwo img')
$hands.mouseenter(function () {
    $('.mask').css({
        'top': -450,
        'opacity': 0
    })
    $(this).siblings('.mask').css({
        'top': 0,
        'opacity': 1
    })
});
$('.hert_show>div').mouseleave(function () {
    $('.mask').css({
        'top': -450,
        'opacity': 0
    })
    // $(this).siblings('.mask').css({'top':0,'opacity':1})
});
$hand.mouseenter(function () {
    $('.mask').css({
        'top': -450,
        'opacity': 0
    })
    $(this).siblings('.mask').css({
        'top': 0,
        'opacity': 1
    })
});
$('.hert_showtwo>div').mouseleave(function () {
    $('.mask').css({
        'top': -450,
        'opacity': 0
    })
    // $(this).siblings('.mask').css({'top':0,'opacity':1})
});