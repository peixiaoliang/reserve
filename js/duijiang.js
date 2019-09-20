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
            var dt=GetQueryString("datetime")
            $('.number').val('');
            $.ajax({
            url: './php/expiry.php?openid='+sloe+'&datetime='+dt,
            async: false,
            type: 'get',
            success: function(dava){
                var datas=eval('(' + dava + ')');
                if(datas['state']==2){
                    $(".yanzheng").css('display','none');
                    $(".example").css('display','block');
                    $(".expried img").attr('src','./images/expired.png');
                    $(".texttips").text('兑换日期已过期');
                }else if(datas['state']==1){
                    $(".yanzheng").css('display','none');
                    $(".example").css('display','block');
                    if(datas['giftID']==="1"){
                        $(".prizeText").text('T恤');
                    }else if(datas['giftID']==="2"){
                        $(".prizeText").text('笔记本');
                    }else if(datas['giftID']==="3"){
                        $(".prizeText").text('徽章');
                    }else if(datas['giftID']==="4"){
                        $(".prizeText").text('旅行套装');
                    }else if(datas['giftID']==="5"){
                        $(".prizeText").text('帽子');
                    }else if(datas['giftID']==="6"){
                        $(".prizeText").text('三里屯礼盒');
                    }else if(datas['giftID']==="7"){
                        $(".prizeText").text('书包');
                    }else if(datas['giftID']==="8"){
                        $(".prizeText").text('贴纸');
                    }else if(datas['giftID']==="9"){
                        $(".prizeText").text('玩具球套装');
                    }else if(datas['giftID']==="10"){
                        $(".prizeText").text('文具套装');
                    }
                    
                }else if(datas['state']==-1){
                    alert('网络不稳定，请检查网络重新验证！');
                }else if(datas['state']==0){
                    $(".yanzheng").css('display','none');
                    $(".example").css('display','block');
                    $(".expried img").attr('src','./images/expired.png');
                    $(".texttips").text('未查询到中奖信息');
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
