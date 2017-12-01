$(function(){
    var categoryid = tools.getSearch('categoryid');
    var category = tools.getSearch('category');
    var pageid = 1
    var allPage = null;
    $('.categoryName').text(category);
   
        Route.getproductdata({ categoryid: categoryid, pageid: pageid }, function (data) {
            console.log(data);
            $('.pro_list_box').html(template('prolist_tpl', data));
            $('.page_list option').each(function (i, v) {
                if (i == 0) {
                    $(v).attr('selected', true);
                }
                allPage = Math.ceil(data.totalCount / data.pagesize);
                v.innerText = (i+1) + "/" + allPage;
                v.className = (i + 1);
            })

        });

   
    $('.pro_list_box').on('click','.page_prve',function(){
        var currentP = $('.page_list option[selected="selected"]').text().slice(0, 1);
        if (currentP == 1) {
            return false;
        }
        currentP--;
        Route.getproductdata({ categoryid: categoryid, pageid: currentP }, function (data) {
            // console.log(data);
            $('.pro_list_box').html(template('prolist_tpl', data));

            $('.page_list option').each(function (i, v) {
                if (i == currentP-1) {
                    $(v).attr('selected', true);
                }
                v.innerText = (i + 1) + "/" + Math.ceil(data.totalCount / data.pagesize);
            })
        });    
    });

    $('.pro_list_box').on('change','.page_list', function () {

        $('option[selected="selected"]').attr('selected',false);

        var currentP = $('.page_list').val();

        Route.getproductdata({ categoryid: categoryid, pageid: currentP }, function (data) {
            console.log(data);
            $('.pro_list_box').html(template('prolist_tpl', data));
            $('.page_list option').each(function (i, v) {
                if (i == currentP-1) {
                    $(v).attr('selected', true);
                }
                allPage = Math.ceil(data.totalCount / data.pagesize);
                v.innerText = (i + 1) + "/" + allPage;
            })
        });    
    });

    $('.pro_list_box').on('click','.page_next', function () {
        var currentP = $('.page_list option[selected="selected"]').text().slice(0,1);
        // console.log(currentP);
        if (currentP == allPage) {
            return false;
        }else{
           currentP++;
           console.log(currentP);
            Route.getproductdata({ categoryid: categoryid, pageid: currentP }, function (data) {
                // console.log(data);

                $('.pro_list_box').html(template('prolist_tpl', data));

                $('.page_list option').each(function (i, v) {
                    if (i == currentP-1) {
                        $(v).attr('selected', true);
                    }
                    v.innerText = (i+1) + "/" + Math.ceil(data.totalCount / data.pagesize);
                })
            });   
        }
        
    });
})