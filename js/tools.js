// 获取地址栏的参数

;(function(window){
    var tools = {
        getSearchObj: function () {
            var str = location.search;
            str = decodeURI(str);
            str = str.slice(1);
            var arr = str.split('&');
            var obj = {};
            var key;
            var value;
            arr.forEach(function (v) {
                key = v.split('=')[0];
                value = v.split('=')[1];
                obj[key] = value;
            });
            return obj;
            console.log(obj);
        },
        getSearch: function (key) {
            return this.getSearchObj()[key];
        }
    }

window.tools = tools;
})(window);