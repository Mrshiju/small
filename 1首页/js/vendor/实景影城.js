var show = $('.film_bottom img');
var showf = $('film')
showf.mouseenter(function () {
   show.css('opacity',1)
})
showf.mouseleave(function () {
    show.css('opacity',0.5)
})