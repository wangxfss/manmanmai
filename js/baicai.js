$(function(){
    var titleid = null;
    // 获取导航栏数据
    Route.getbaicai(function(data){
        console.log(data);
        $('.baicai_title ul').html( template('title_tpl',data) );
        titleid = data.result[0].titleId;
        $('.baicai_title').on('click','li',function(){
                titleid = $(this).data('titleid');
                $(this).find('a').addClass('active');
                $(this).siblings().find('a').removeClass('active');
                getData(titleid);
            }); 
    });

    setTimeout(function(){
        getData(titleid)
    });
    // 获取商品数据
    function getData(titleid){
        Route.getbaicaiid({ titleid: titleid},function(data){
            $('.baicai_content').html(template('product_tpl',data));
            console.log(data);
        });
    }
    // 设置进度条的进度
    // $('.bar>i>em').css({
    //     width: $('.bar>i>span').text()
    // });

    var startX = moveX = currentX = distanceX = 0;
    var maxSlide = 50;
    var minSlide = -($('.top_nav').width() - $('.baicai_title').width()-50);
    document.querySelector('.top_nav').addEventListener('touchstart',function(e){
        // console.log(1);
        startX = e.touches[0].clientX;
    });

    document.querySelector('.top_nav').addEventListener('touchmove', function (e) {
        // console.log(1);
        moveX = e.touches[0].clientX;
        distanceX = moveX-startX;
        if ((currentX + distanceX) < maxSlide && (currentX + distanceX) > minSlide){
            document.querySelector('.top_nav').style.transform = 'translateX('+ (currentX + distanceX) +'px)';
            
        }
        
    });

    var maxPosition = 0;
    var minPosition = -($('.top_nav').width() - $('.baicai_title').width());
    document.querySelector('.top_nav').addEventListener('touchend', function (e) {
       flag = false;
        // console.log(1);
        currentX += distanceX;
        if (currentX >= maxPosition ){
            currentX = maxPosition;
            document.querySelector('.top_nav').style.transform = 'translateX(' + currentX +'px)';            
        }
        if (currentX <= minPosition) {
            currentX = minPosition;
            document.querySelector('.top_nav').style.transform = 'translateX(' + currentX +'px)';
        }
    });
})