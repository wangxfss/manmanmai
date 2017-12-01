$(function(){
    // 发送ajax请求，获取菜单栏数据
    Route.getindexmenu(function(data){
        console.log(data);
        $('.nav ul').html( template('menu_tpl1',data) );
    });

    $('.nav ul').on('click','.btn_more',function(){
        $('.nav ul').toggleClass('now');
    })

    // 发送ajax请求，获取折扣列表数据
    Route.getindexcountlist(function(data){
        console.log(data);
        $('.rec_product').html(template('list_tpl', data));
    })


})