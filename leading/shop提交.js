
$(document).ready(function(){
    $(".a_post").on("click",function(event){
        event.preventDefault(); // 使a自带的方法失效，即无法向addStudent.action发出请求
        $.ajax({
            type: "POST", // 使用post方式
            url: "http://127.0.0.1:8080/shop_submit",
            contentType:"application/json",
            data: JSON.stringify({shop_name:$('#shop_name').html(), shop_address:$('#shop_address').html(),shop_price:$('#shop_price').html()}), // 参数列表，stringify()方法用于将JS对象序列化为json字符串
            dataType:"json",
            success: function(result){
// 请求成功后的操作
            },
            error: function(result){
// 请求失败后的操作
            }
        });
    });
});
