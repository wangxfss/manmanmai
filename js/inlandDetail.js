$(function(){
    var productid = tools.getSearch('productid');
    Route.getinlanddiscountdetail({productid: productid},function(data){
        console.log(data);
        $('.productDetail').html(template('moneyctrl_tpl',data));
    })
})