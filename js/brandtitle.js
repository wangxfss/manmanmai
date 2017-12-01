$(function(){
    Route.getbrandtitle(function(data){
        console.log(data);
        $('.cat_title').html(template('brandtitle_tpl',data));
    })
})