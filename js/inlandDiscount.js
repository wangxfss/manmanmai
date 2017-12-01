$(function(){
    Route.getinlanddiscount(function(data){
        console.log(data);
        $('.discountProduct ul').html( template('discount_tpl',data) );
    })
})