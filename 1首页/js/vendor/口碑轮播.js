// setInterval(function () {
//     var num = 0;
//     num += 10,
//     // ul.css('left',-num)
//     console.log(num)
// },1000);
var arrow1 = $('.inner .left_arrow');
var arrow2 = $('.inner .right_arrow');
var ul = $('.inner ul');
var lis = $('.inner ul li');
var inner =$('.inner')
var index = 0;
// var num = 0;
ul.append(lis.eq(0).clone()).append(lis.eq(1).clone()).append(lis.eq(2).clone()).append(lis.eq(3).clone());
arrow1.mouseover(function () {
    $(this).css('backgroundImage','url(img/shang1.png)')
}).click(  function(){
    toWest()});
    
arrow1.mouseout(function () {
    $(this).css('backgroundImage','url(img/shang.png)')
});
arrow2.hover(function () {
    $(this).css('backgroundImage','url(img/xia1.png)')
},function(){
    $(this).css('backgroundImage','url(img/xia.png)')
});
arrow2.click(function(){ 
    toEast()
});

var sum = 0;
index = parseInt(sum / 300);
// console.log(sum);
// console.log(index);
 var stop = setInterval(function () {
    if(sum > 3000){
        sum = 0;
    }
    sum += 10,
    ul.animate({'left': -sum + 'px'},100);
    // console.log(sum)
},100);
inner.mouseover(function () {
    clearInterval(stop);
    ul.css('left', -index * 300)
})
inner.mouseout(function () {
    stop = setInterval(function () {
        if(sum > 3000){
            sum = 0;
        }
        sum += 10,
        ul.css('left',-sum + 'px');
        console.log(sum)
    },100);
});

// arrow2.mouseout(function () {
//     $(this).css('backgroundImage','url(img/xia.png)')
// })
// arrow1.click(function () {
//     toWest()
// });

    function toEast() {

            if (index * 300 >= 3000) {
                ul.css("left", "0");
                index = 0;
            }
            index++;
            ul.stop().animate({left: -(index * 300 + 100)}, 700, function () {
                ul.animate({left: -index * 300}, 300);
            
            });
        }
    

    function toWest() {
    
            if (index === 0) {
                
                ul.css("left", "-3000px");
                index = 9;
                ul.stop().animate({left: -(index * 300 - 100)}, 700, function () {
                    ul.animate({left: -index * 300}, 300);
                    
                });
            } 
                
                index--;
                ul.stop().animate({left: -(index * 300 - 100)}, 700, function () {
                    ul.animate({left: -index * 300}, 300);
                    
                });
            
        };
