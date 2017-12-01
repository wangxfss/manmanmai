$(function(){
    var currentPage = null;
    var allpage = null;
    // 页面上来的第一次的ajax请求
    Route.getmoneycart({ pageid: 1},function(data){
        console.log(data);
        // 渲染商品信息的列表
        $('.moneyctrl').html( template('moneyctrl_tpl',data) );
        // 渲染分页
        $('.moneyctrl_page').html( template('page_tpl',data) );
        // 动态设置select框中option的值
        allpage = Math.ceil(data.totalCount / data.pagesize);
        $('.page_list option').each(function(i,v){
            if(i == 0){
                $(v).attr('selected',true);
                currentPage = i+1;
            }
            $(v).text((i+1) + '/' + allpage);
        });
    });

    // 上一页按钮
    $('.moneyctrl_page').on('click','.page_prve',function(){
        // console.log(111);
        currentPage = $('.page_list').val();
        console.log(currentPage);
        console.log(typeof currentPage);
        if (currentPage == 1){
            return false;
        }

        currentPage--;

        render(currentPage, allpage);

    });

    // 下一页按钮

    $('.moneyctrl_page').on('click', '.page_next', function () {
        // console.log(111);
        currentPage = $('.page_list').val();
        console.log(currentPage);
        console.log(typeof currentPage);
        if (currentPage == allpage) {
            return false;
        } 

        currentPage++;
        render(currentPage, allpage);

    });

    // select 框的状态同步
    $('.moneyctrl_page').on('change','.page_list',function(){
        var currentPage = $(this).val();
        render(currentPage, allpage);
    });


    // 每次请求完成重新渲染select的值，和option的值
    function render(page, allpage){
        
        Route.getmoneycart({ pageid: page }, function (data) {
            // 渲染商品信息的列表
            $('.moneyctrl').html(template('moneyctrl_tpl', data));
            $('.page_list option').each(function (i, v) {
                if (i == page - 1) {
                    $(v).attr('selected', true).siblings().attr('selected', false);
                }
                $(v).text((i + 1) + '/' + allpage);
                // 同步select框的value
                $('.page_list').val(page);
            })
        })
    }

})