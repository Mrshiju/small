// 第一个导航导航栏
var $btn = $('.first .first_head img');
$btn.mouseenter(function () {
    $(this).css('top', '26px')
})
$btn.mouseleave(function () {
    $(this).css('top', '34px')
});

// 第一个盒子高亮显示
var imgs = $('.first .list a img')
imgs.mouseover(function () {
    imgs.css("opacity", 0.5);
    $(this).css("opacity", 1);
});
imgs.mouseout(function () {
    imgs.css("opacity", 1);

});

//第二个导航标题
var $btn1 = $('.two .two_head img');
$btn1.mouseenter(function () {
    $(this).css('top', '26px')
})
$btn1.mouseleave(function () {
    $(this).css('top', '36px')
})

//鼠标点到区域 ,遮罩
var $hands = $('.two .xiqngqin img');
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
$('.xiqngqin>div').mouseleave(function () {
    $('.mask').css({
        'top': -450,
        'opacity': 0
    })
    // $(this).siblings('.mask').css({'top':0,'opacity':1})
});


//点击切换
var $btns = $('.w_nav span');
// for(var i = 0; i < $btns.length ; i++){
//     $btns[i] = i;
// };
$btns.click(function () {
    $(this).addClass('bgc').siblings().removeClass('bgc')
    var index = $(this).index();

    $('.xiqngqin>div')
        .removeClass('active')
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')
});


// 大图随小图切换
var $sm_btn = $('.botton_smallb img');
var $sm = $('.botton_smallb')
var $bg_p = $('.top_big a img');
var $tiao = $('.xuanfuk');
var $addbtn = $('.addbtn');

$sm_btn.click(function () {
    //获取图片按钮的引索
    var index = $(this).index();
    $bg_p.removeClass('now')
    $bg_p.eq(index).addClass('now').siblings().removeClass('now');
    $sm_btn.eq(index).addClass('setive').siblings().removeClass('setive');
    $sm_btn.eq(index).css('opacity',1).siblings().css('opacity',0.6);
    
    switch (index) {
        case 0:

            $tiao.position().left > 0 ? $tiao.animate({
                left: "-100px"
            }, 300, function () {
                $tiao.animate({
                    left: "0"
                }, 100);
            }) : $tiao.animate({
                left: "100px"
            }, 300, function () {
                $tiao.animate({
                    left: "0"
                }, 100);
            });
            break;
        case 1:

            $tiao.position().left > 297 ? $tiao.animate({
                left: "197px"
            }, 300, function () {
                $tiao.animate({
                    left: "297px"
                }, 100);
            }) : $tiao.animate({
                left: "397px"
            }, 300, function () {
                $tiao.animate({
                    left: "297px"
                }, 100);
            });
            break;
        case 2:

            $tiao.position().left > 694 ? $tiao.animate({
                left: "494px"
            }, 300, function () {
                $tiao.animate({
                    left: "594px"
                }, 100);
            }) : $tiao.animate({
                left: "694px"
            }, 300, function () {
                $tiao.animate({
                    left: "594px"
                }, 100);
            });
            break;
        case 3:

            $tiao.position().left > 891 ? $tiao.animate({
                left: "791px"
            }, 300, function () {
                $tiao.animate({
                    left: "891px"
                }, 100);
            }) : $tiao.animate({
                left: "991px"
            }, 300, function () {
                $tiao.animate({
                    left: "891px"
                }, 100);
            });
            break;
    }
});
var num =0;
$addbtn.click(function () {
    
    
    if(num > 3){
        num = 0;
    }

    $bg_p.removeClass('now');
    $bg_p.eq(num).addClass('now').siblings().removeClass('now');
    $sm_btn.eq(num).addClass('setive').siblings().removeClass('setive');
    switch (num) {
        case 0:

            $tiao.position().left > 0 ? $tiao.animate({
                left: "-100px"
            }, 300, function () {
                $tiao.animate({
                    left: "0"
                }, 100);
            }) : $tiao.animate({
                left: "100px"
            }, 300, function () {
                $tiao.animate({
                    left: "0"
                }, 100);
            });
            break;
        case 1:

            $tiao.position().left > 297 ? $tiao.animate({
                left: "197px"
            }, 300, function () {
                $tiao.animate({
                    left: "297px"
                }, 100);
            }) : $tiao.animate({
                left: "397px"
            }, 300, function () {
                $tiao.animate({
                    left: "297px"
                }, 100);
            });
            break;
        case 2:

            $tiao.position().left > 694 ? $tiao.animate({
                left: "494px"
            }, 300, function () {
                $tiao.animate({
                    left: "594px"
                }, 100);
            }) : $tiao.animate({
                left: "694px"
            }, 300, function () {
                $tiao.animate({
                    left: "594px"
                }, 100);
            });
            break;
        case 3:

            $tiao.position().left > 891 ? $tiao.animate({
                left: "791px"
            }, 300, function () {
                $tiao.animate({
                    left: "891px"
                }, 100);
            }) : $tiao.animate({
                left: "991px"
            }, 300, function () {
                $tiao.animate({
                    left: "891px"
                }, 100);
            });
            break;
    }
    num++;
    
});
var sto = setInterval(function () {
    $addbtn.click();
},2000);
$sm_btn.mouseenter(function () {
    clearInterval(sto);
});
$sm_btn.mouseleave(function () {
    // $sm_btn.css('opacity',1)
    sto = setInterval(function () {
        $addbtn.click();
    },2000);
});
$sm.mouseleave(function () {
    $sm_btn.css('opacity',1)

});


// 影城导航栏显示
var $btn1 = $('.film .film_head img');
$btn1.mouseenter(function () {
    $(this).css('top', '26px')
})
$btn1.mouseleave(function () {
    $(this).css('top', '36px')
});

//影视城动画效果
var $btn3 = $('.three .three_head img');
$btn3.mouseenter(function () {
    $(this).css('top', '26px')
})
$btn3.mouseleave(function () {
    $(this).css('top', '36px')
})

// 微电影导航栏
var $btn1 = $('.four_head img');
$btn1.mouseenter(function () {
    $(this).css('top', '26px')
})
$btn1.mouseleave(function () {
    $(this).css('top', '36px')
});

//弹窗
var tanchuan = $('.tanchuan');
setTimeout(function () {
    tanchuan.slideDown();
},5000);
$('.tanchuan img').click(function () {
    tanchuan.slideUp();
    setTimeout(function () {
        tanchuan.slideDown();
    },20000);
})