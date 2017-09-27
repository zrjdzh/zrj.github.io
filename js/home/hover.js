flag = 0;

/*显示左面菜单*/
$(".logo").click(function() {
	
	if(flag == 0){
	    $(".main").animate({left: '+=300px'}, "slow");
	    $(".main").addClass("extended");
	    flag++;
	}else{
		$(".main").animate({left: '-=300px'}, "slow");
		$(".main").removeClass("extended");
		flag--;
	}
    
})

/*返回主页*/
$(".home").click(function(){
    $(".aboutUs").remove();
})

/*弹出介绍页面*/
$(".about").click(function(){
	var div = $("<div class='aboutUs'><p>杭州物托邦三维科技有限公司是专业从事3D打印设备制造、3D打印培训和平台运营的创新型企业，</br>公司已开发Aere（艾丽）系列的3D打印教育机型，研发面向青少年的3D打印培训“飞呀”系列课程，</br>极大提高青少年的创新能力</p></div>");
    $(".main").append(div);
})

setInterval(function() {
    var now = (new Date()).toLocaleString();
    $('#current-time').text(now);
}, 1000);