$(function(){
$("body").css("height",document.body.clientHeight);
console.log(document.body.clientHeight)
$(window).resize(function () { 
	$("body").css("height",document.body.clientHeight);
	})
$('.yanzheng_btn').click(function(){
        var numVal=$('.number').val();
        // console.log(document.documentElement.clientHeight)
        window.scrollTo(0, document.documentElement.clientHeight);
        if(numVal=='123'||numVal=='456'||numVal=='789'){
            function GetQueryString(name){
                var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if(r!=null)return  unescape(r[2]); return null;
               }
            var sloe=GetQueryString("openid")
            var dt=GetQueryString("qrcode")
            $('.number').val('');
            $.ajax({
            url: './php/expiry.php?openid='+sloe+'&qrcode='+dt,
            async: false,
            type: 'get',
            success: function(dava){
                var datas=eval('(' + dava + ')');
                if(datas['state']==3){
                    $(".yanzheng").css('display','none');
                    $(".example").css('display','block');
                    $(".expried img").attr('src','./images/expired.png');
                    $(".texttips").text('签到日期已过期');
                }else if(datas['state']==1){
                    $(".yanzheng").css('display','none');
                    $(".example").css('display','block');
                    $(".prizeText").text(datas['name']);
                    
                }else if(datas['state']==-1){
                    alert('网络不稳定，请检查网络重新验证！');
                }else if(datas['state']==0){
                    $(".yanzheng").css('display','none');
                    $(".example").css('display','block');
                    $(".expried img").attr('src','./images/expired.png');
                    $(".texttips").text('未查询到注册信息');
                }
                else if (datas['state'] == 2) {
                    $(".yanzheng").css('display', 'none');
                    $(".example").css('display', 'block');
                    $(".expried img").attr('src', './images/expired.png');
                    $(".texttips").text('已经签到，请勿重复签到');
                }
            }
            })
            
        }else{
            $('.yan_tips').css('display','block');
        }
        })
        $(".number").focus(function(){
            $('.yan_tips').css('display','none');
        })
})
$("input").blur(function(){
    console.log(document.documentElement.clientHeight)
   window.scrollTo(0, document.documentElement.clientHeight);
});
