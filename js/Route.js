/**
 * Created by wangxf on 2017/11/28.
 */
;(function(window){

    var Route = {
        url:'http://127.0.0.1:9090/',
        getindexmenu: getindexmenu,
        getindexcountlist: getindexcountlist,
        getcategorytitle: getcategorytitle,
        getcategorylist: getcategorylist,
        getproductdata: getproductdata,
        getproductdetail: getproductdetail,
        getproductcomment: getproductcomment,
        getmoneycart: getmoneycart,
        getmoneycartproduct: getmoneycartproduct,
        getinlanddiscount: getinlanddiscount,
        getinlanddiscountdetail: getinlanddiscountdetail,
        getbaicai: getbaicai,
        getbaicaiid: getbaicaiid,
        getskuproduct: getskuproduct,
        getskuarea: getskuarea,
        getgsproduct: getgsproduct,
        getcoupon: getcoupon,
        getcouponproduct: getcouponproduct,
        getsitenav: getsitenav,
        getbrandtitle: getbrandtitle,
        getbrand:getbrand,
        getbrandproductlist: getbrandproductlist,
        getproductcom: getproductcom
    };

    function getajax(url, callback){
        $.ajax({
            type: 'get',
            url: url,
            dataType: 'json',
            success: function (data) {
                callback && callback(data);
            }
        })
    }

// 获取首页菜单数据的请求 discount
    function getindexmenu(callback){
        getajax(Route.url + 'api/getindexmenu',callback);
    }
// 获取首页折扣列表的数据请求
   function getindexcountlist(callback){
       getajax(Route.url + 'api/getmoneyctrl', callback);
   }

//    分类列表标题的渲染
    function getcategorytitle(callback){
        getajax(Route.url + 'api/getcategorytitle', callback);
    }


    //    带参数的函数封装
    function getajaxAgument(url, option, callback) {
        $.ajax({
            type: 'get',
            url: url,
            data: option,
            dataType: 'json',
            success: function (data) {
                callback && callback(data);
            }
        })
    }
    // 商品列表的数据请求
    function getcategorylist(option, callback){
        getajaxAgument(Route.url + 'api/getcategory', option, callback);
    }
    // 商品数据请求
    function getproductdata(option, callback) {
        getajaxAgument(Route.url + 'api/getproductlist', option, callback);
    }
    // 商品详情页的请求
    function getproductdetail(option, callback){
        getajaxAgument(Route.url + 'api/getproduct', option, callback);
    }
    // 商品评论的请求
    function getproductcomment(option, callback) {
        getajaxAgument(Route.url + 'api/getproductcom', option, callback);
    }
    // 省钱控的数据请求
    function getmoneycart(option, callback) {
        getajaxAgument(Route.url + 'api/getmoneyctrl', option, callback);
    }
    function getmoneycartproduct(option, callback) {
        getajaxAgument(Route.url + 'api/getmoneyctrlproduct', option, callback);
    }

    // 国内折扣
    function getinlanddiscount(callback) {
        getajax(Route.url + 'api/getinlanddiscount', callback);
    }
    function getinlanddiscountdetail(option, callback) {
        getajaxAgument(Route.url + 'api/getdiscountproduct', option, callback);
    }
    // 白菜价
    function getbaicai(callback) {
        getajax(Route.url + 'api/getbaicaijiatitle', callback);
    }
    function getbaicaiid(option, callback) {
        getajaxAgument(Route.url + 'api/getbaicaijiaproduct', option, callback);
    }
    // 凑单品
    function getskuproduct(callback) {
        getajax(Route.url + 'api/getgsshop', callback);
    }
    function getskuarea(callback) {
        getajax(Route.url + 'api/getgsshoparea', callback);
    }

    // 凑单品
    function getgsproduct(option, callback) {
        getajaxAgument(Route.url + 'api/getgsproduct', option, callback);
    }
    // 优惠券
    function getcoupon(callback) {
        getajax(Route.url + 'api/getcoupon', callback);
    }
    function getcouponproduct(option, callback) {
        getajaxAgument(Route.url + 'api/getcouponproduct', option, callback);
    }
    // 商品导航
    function getsitenav(callback) {
        getajax(Route.url + 'api/getsitenav', callback);
    }
    // 品牌大全
    function getbrandtitle(callback) {
        getajax(Route.url + 'api/getbrandtitle', callback);
    }
    function getbrand(option, callback) {
        getajaxAgument(Route.url + 'api/getbrand', option, callback);
    }
    function getbrandproductlist(option, callback) {
        getajaxAgument(Route.url + 'api/getbrandproductlist', option, callback);
    }
    function getproductcom(option, callback) {
        getajaxAgument(Route.url + 'api/getproductcom', option, callback);
    }

    window.Route = Route;
})(window);