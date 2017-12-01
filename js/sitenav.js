$(function(){
    Route.getsitenav(function(data){
        console.log(data);
        $('.sitenav_box').html(template('sitenav_tpl',data))
    })
})