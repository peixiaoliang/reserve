$(function(){
    $(".resgiterBtn").click(function(){
        $(".container2").show();
    })
    const windowHeight = window.innerHeight
    $("input").addEventListener('blur', function () {
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
    $(".agreeBtn").click(function(){
        $(".container1").hide();
        $(".container2").hide();
        $(".container3").show();
    })
    $(".submit").click(function(){
        // console.log($("form").serialize());
        // console.log($("form").serialize());
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
            url: './php/index.php?'+formData,
            async: false,
            type: 'post',
            success: function(data){
                console.log(data)
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
    init(); 
    function init() {  
        generateQRCode("canvas",205, 205, "http://www.baidu.com");  
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