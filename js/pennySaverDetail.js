$(function(){
    var productid = tools.getSearch('productid');
    console.log(productid);
    Route.getmoneycartproduct({ productid: productid },function(data){
        console.log(data);
        $('.productDetail').html(template('moneyctrl_tpl',data));
        if (!data.result[0].productCity ){
            $('.pro_city').html('<p></p>');
        }else{
            $('.pro_city').html(data.result[0].productCity);
        }
    });
})