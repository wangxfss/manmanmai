$(function(){
    var brandtitleid = tools.getSearch('brandtitleid');
    var colorArr = ['#F10E0E', '#FF9314','#89DF5B'];

    Route.getbrand({ brandtitleid: brandtitleid},function(data){
        $('.pro_list').html(template('brand_tpl',data));
        var box = $('.pro_des');
        box.each(function(i,v){
            if(i < 3){
                $(v).find('.describe_l>p').css({ backgroundColor: colorArr[i]});
            }else{
                $(v).find('.describe_l>p').css({ backgroundColor: '#ccc' });
            }
        })
    });
    Route.getbrandproductlist({ brandtitleid: brandtitleid},function(data){
        console.log(data);
        $('.pro_hot').html(template('proHot_tpl',data));
        var productid = data.result[0].productId;
        var img = data.result[0].productImg;
        var title = data.result[0].productName;
        Route.getproductcom({ productid: productid }, function (data) {
            console.log(data);
            $('.new_comment').html(template('comment_tpl',data));
            $('.pro_img').html(img);
            $('.pro_name').html(title);
        });
    });
    
})