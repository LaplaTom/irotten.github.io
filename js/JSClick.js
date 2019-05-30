// ==UserScript== 
// @name         鼠标点击冒泡                                              .-~~~~~~~~~-._       _.-~~~~~~~~~-.
// @namespace    https://djzhao.js.org                                __.'              ~.   .~              `.__
// @version      1.0                                                .'//                  \./                  \\`.
// @description  一个用JS写的鼠标左击特效                           .'//                     |                     \\`.
// @author       一碗单炒饭                                      .'// .-~"""""""~~~~-._     |     _,-~~~~"""""""~-. \\`.
// @include      /[a-zA-z]+://[^\s]*/                         .'//.-"                 `-.  |  .-'                 "-.\\`.
// @run-at       document_start                             .'//______.============-..   \ | /   ..-============.______\\`.
// @Author of Secondary Development  阿福~                .'______________________________\|/______________________________`.
// @Second revision 优化代码，并根据个人需要进行了修改，添加了一些注释
// @use          各有用法，自己百度吧
// ==/UserScript==
onload = function() {
    var str=["OωO","(๑•́ ∀ •̀๑)","(๑•́ ₃ •̀๑)","(๑•̀_•́๑)","（￣へ￣）","(╯°口°)╯(┴—┴","૮( ᵒ̌皿ᵒ̌ )ა","╮(｡>口<｡)╭","( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃","(ꐦ°᷄д°᷅)",
             "(*^▽^*)","(^_−)☆","o(´^｀)o","o(╥﹏╥)o","!!!∑(ﾟДﾟノ)ノ","ψ(*｀ー´)ψ","(•́へ•́╬)","ヽ(ー_ー)ノ","Thanks♪(･ω･)ﾉ","(σﾟ∀ﾟ)σ..:*☆哎哟不错哦",
             "＿|￣|●","(●—●)","(✖人✖)","I'm LCQ","990345019","我不休息我还能学    ⊂(‘ω’⊂ )))Σ≡=─༄༅༄༅༄༅༄༅༄༅"," "] //定义字符串数组，目前共27个
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];  
    $html.onclick = function(e) {                          
        var $elem = document.createElement("b");           
        $elem.style.color = "#191970";                     //颜色
        $elem.style.zIndex = 9999;                         //使之成为当前层  
        $elem.style.position = "absolute";                 //页面全覆盖
        $elem.style.select = "none";
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);

        var d = new Date()                                 //定义时间= =
        var click_cnt = d.getTime();                       //获取当前时间与1970年的差，ms为单位
        if((click_cnt%50)>(str.length-1))
            $elem.innerText = "❤";
        else
            $elem.innerText =str[click_cnt%50];
        

        $elem.style.fontSize = Math.random() * 10 + 8 + "px";   //随机大小，random是生成0~1的随机数


        var increase = 0;                                        //下面我也不知道干啥子的，我又不学这玩意儿~~~
        var anim;                                                //我估计是大到多少消失吧= =
        setTimeout(function() {
        	anim = setInterval(function() {
	            if (++increase == 150) {
	                clearInterval(anim);
			$body.removeChild($elem);
	            }
	            $elem.style.top = y - 20 - increase + "px";
	            $elem.style.opacity = (150 - increase) / 120;
	        }, 8);
        }, 70);
        $body.appendChild($elem);
    };
};
