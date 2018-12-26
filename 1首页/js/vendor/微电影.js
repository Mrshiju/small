var head = $('.four .four_bottom  img');
head.mouseover(function () {
    head.css('opacity',0.6)
    $(this).css('opacity',1)
    $(this).siblings().css('opacity',0.6)
})
head.mouseleave(function () {
    head.css('opacity',1)
})