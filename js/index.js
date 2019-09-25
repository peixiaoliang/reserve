$(function(){
    $(".resgiterBtn").click(function(){
        $(".container1").hide();
        $(".container3").show();
    })
    const windowHeight = window.innerHeight;
    var names=document.getElementById("name");
    var phones=document.getElementById("phone");
    var brands=document.getElementById("brand");
    var jobs=document.getElementById("job");
    var companys=document.getElementById("company");
    tagNames(names);
    tagNames(phones);
    tagNames(brands);
    tagNames(jobs);
    tagNames(companys);
    function tagNames(tags){
        tags.addEventListener('blur', function () {
            let windowFocusHeight = window.innerHeight
            if (windowHeight == windowFocusHeight) {
            return
            }
            console.log(windowHeight + '--' + windowFocusHeight);
            console.log('修复');
            let currentPosition;
            let speed = 1; //页面滚动距离
            currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
            currentPosition -= speed;
            window.scrollTo(0, currentPosition); //页面向上滚动
            currentPosition += speed; //speed变量
            window.scrollTo(0, currentPosition); //页面向下滚动
        })
    }
    function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    var sloe=GetQueryString("openid");
    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
         datetime = year + seperator1 + month + seperator1 + strDate;
        return datetime;
    }
    getNowFormatDate()
    $(".submit").click(function(){
        var formData=$("form").serialize();
        if($("form input[name='name']").val().length<2){
            alert("请输入正确的名字");
            return false;
        }
        if($("form input[name='phone']").val().length<11){
            alert("请输入正确的电话号码");
            return false;
        }
        if($("form input[name='company']").val().length<2){
            alert("请输入正确的公司名称");
            return false;
        }
        if($("form input[name='brand']").val().length<2){
            alert("请输入正确的品牌名称");
            return false;
        }
        if($("form input[name='job']").val().length<2){
            alert("请输入正确的职务");
            return false;
        }
        $.ajax({
            url: './php/register.php?openid='+sloe+"&"+formData,
            async: false,
            type: 'post',
            success: function(data){
                var data=eval('(' + data + ')'); 
                init(data.qrcode);
                $(".container3").hide();
                $(".container4").show();
                 
            }
        })
    })
    function generateQRCode(rendermethod, picwidth, picheight, url) {  
        $("#qrcode").qrcode({   
            render: rendermethod, // 渲染方式有table方式（IE兼容）和canvas方式  
            width: picwidth, //宽度   
            height:picheight, //高度   
            text: utf16to8(url), //内容   
            typeNumber:-1,//计算模式  
            correctLevel:2,//二维码纠错级别  
            background:"transparent",//背景颜色  
            foreground:"#000000"  //二维码颜色  
      
        });  
    } 
    function init(data) {  
        generateQRCode("canvas", 205, 205, "http://invitation.citymsg.cn/info/duijiang.html?qrcode="+data+'&openid='+sloe);  
    }
    function utf16to8(str) {  
        var out, i, len, c;  
        out = "";  
        len = str.length;  
        for (i = 0; i < len; i++) {  
            c = str.charCodeAt(i);  
            if ((c >= 0x0001) && (c <= 0x007F)) {  
                out += str.charAt(i);  
            } else if (c > 0x07FF) {  
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));  
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));  
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));  
            } else {  
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));  
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));  
            }  
        }  
        return out;  
    }
})