$(function(){
    var shopid = null;
    var areaid = null;
    Route.getskuproduct(function(data){
        console.log(data);
        shopid = data.result[0].shopId;
        $('.nav_box>li>a').eq(0).text(data.result[0].shopName);
        $('.market_list').html(template('market_tpl', data));
    });

    Route.getskuarea(function (data) {
        console.log(data);
        areaid = data.result[0].areaId;
        $('.area_list').html(template('area_tpl',data));
        // console.log(data.result[0].areaName.split('（')[0]);
        $('.nav_box>li>a').eq(1).text(data.result[0].areaName.split('（')[0]);
    });
    // 三级菜单显示隐藏
    $('.nav_box>li').each(function(i,v){
        $(v).index = i;
        $(v).on('click',function(){
            $('.list_box>div').eq(i).toggle(500).siblings().hide();
        })
    });
    setTimeout(function () {
        render(shopid, areaid);
    })
    function render(shopid, areaid){
        Route.getgsproduct({ shopid: shopid, areaid: areaid }, function (data) {
            console.log(data);
            $('.pro_box ul').html(template('product_tpl', data));
        });
    }
    
    // 三级菜单的选择动态渲染
    $('.market_list').on('click','a',function(){
        shopid = $(this).data('shopid');
        var txt = $(this).text();
        $('.nav_box>li>a').eq(0).text(txt);
        $('.market_list').hide();

        Route.getgsproduct({ shopid: shopid, areaid: areaid},function(data){
            render(shopid, areaid);
        });
    });
    $('.area_list').on('click','a',function(){
        areaid = $(this).data('areaid');
        var txt = $(this).text().split('（')[0];
        $('.nav_box>li>a').eq(1).text(txt);
        $('.area_list').hide();

        Route.getgsproduct({ shopid: shopid, areaid: areaid }, function (data) {
            render(shopid, areaid);
        });
    })

   
})