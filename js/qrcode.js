$(function(){
    function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    var qrcode=GetQueryString("qrcode");
    var openid=GetQueryString("openid");
    init(qrcode) 
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
    function init(code) {  
        generateQRCode("canvas", 205, 205, "http://invitation.citymsg.cn/info/duijiang.html?qrcode=" + code+'&openid='+openid);
        console.log("http://invitation.citymsg.cn/info/duijiang.html?qrcode=" + code+'&openid='+openid)  
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