$(function(){
    Route.getcategorytitle(function(data){
        console.log(data);
        $('.cat_title_first').html( template('listTitle_tpl',data) );

        var titleid = $('.list_title').data('id');

        Route.getcategorylist({ titleid: titleid },function (data) {
            $('.cat_title_second').html(template('listitem_tpl', data));
        });
    });
    
    $('.cat_title_first').on('click','.list_title',function(){
        // console.log('hehe');
        var titleid = $(this).data('id');
        var that = $(this);
        Route.getcategorylist({ titleid: titleid },function (data){
            console.log(data);
            that.siblings().slideToggle();
            that.parent().siblings().find('.cat_title_second').slideUp();
            $('.cat_title_second').html(template('listitem_tpl', data));
        });
    })
})