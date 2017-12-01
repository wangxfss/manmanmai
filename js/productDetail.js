$(function(){
    var productid = tools.getSearch('productid');
    var productCom = tools.getSearch('productCom');
    console.log(productid);

    Route.getproductdetail({ productid: productid},function(data){

        console.log(data);

        // 动态渲染三级目录
        var productName = data.result[0].productName.split(' ');

        $('.categoryName').text(productName[0]);

        if(data.result.length<=0){

            $('.pro_detail').html('<p style="margin-bottom:30px; padding-left:20px;font-size:14px;">抱歉，此商品已下架，请查看其他商品</p>');
            
            return false;

        }
        $('.pro_detail').html(template('detail_tpl',data) );

        $('.productCom').text(productCom);

    });
    Route.getproductcomment({ productid: productid },function(data){

        console.log(data);

        $('.assessmentCenter').html( template('comment_tpl',data) );

    })


})