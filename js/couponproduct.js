$(function(){
    var couponid = tools.getSearch('couponid');
    var coupontitle = tools.getSearch('coupontitle');
    var imgArr = [];
    $('title').text(coupontitle+'优惠券');
    $('.topbar .text h2').text(coupontitle + '优惠券');
    console.log(coupontitle);
    Route.getcouponproduct({ couponid: couponid},function(data){
        console.log(data);
        $('.couponproduct').html(template('couponproduct_tpl',data));
        $('.couponproduct').on('click','.product_agu',function(){
            $('.masked').show();
            var img1 = $(this).find('img').attr('src');
            var img2 = $(this).next().find('img').attr('src');
            var img3 = $(this).next().next().find('img').attr('src');
            imgArr.push(img3, img2, img1);
            imgArr.forEach(function (v, i) {
                var li = '<li><a href="javascript:;"><img src="'+v+'" alt=""></a></li>';
                $('.masked .swiper ul').append(li);
            });
        });

        var count = 0;
        var zIndex = 1;
        $('.arrow_r').on('click',function(){
            count++;
            if(count >2){
                count=0;
            }
            $('.swiper ul li').eq(count).css({ zIndex: zIndex++});
        })
        $('.arrow_l').on('click', function () {
            count--;
            if (count < 0) {
                count = 2;
            }
            $('.swiper ul li').eq(count).css({ zIndex: zIndex++ });
        })
    });
    $('.mark').on('click',function(){
        $('.masked').hide();
    })
    
})