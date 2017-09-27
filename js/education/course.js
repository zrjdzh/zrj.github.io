index = 0;
flag = 1;
sign = 1;

$(".icon-bottom").addClass("changbuttonA");

$(".icon-bottom p:eq(0)").click(function() {
	
	if(index !== 0){
	    $(".icon-bottom").addClass("changbuttonA");
	    index = 0;
	    if(flag == 0){
	    	$(".section-introA").animate({left: '+=99%'}, "slow");
	    	$(".col-twelve").css('display','block');
	    	flag = 1;
	    } 
	    if(sign == 0){
        	$(".section-introB").animate({left: '+=199%'}, "slow");
        	sign = 1;
        	$(".col-twelve").css('display','block');
        }
	    $(".icon-bottom").removeClass("changbuttonB");
	    $(".icon-bottom").removeClass("changbuttonC");
	}  
})

$(".icon-bottom p:eq(1)").click(function() {
	
	if(index !== 1){
	    $(".icon-bottom").addClass("changbuttonB");
	    index = 1;
	    
        $(".section-introA").animate({left: '-=99%'}, "slow");
        $(".col-twelve").css('display','none');
        flag = 0;
        if(sign == 0){
        	$(".section-introB").animate({left: '+=199%'}, "slow");
        	sign = 1;
        }
	    $(".icon-bottom").removeClass("changbuttonA");
	    $(".icon-bottom").removeClass("changbuttonC");
	}  
})

$(".icon-bottom p:eq(2)").click(function() {
	
	if(index !== 2){
	    $(".icon-bottom").addClass("changbuttonC");
	    index = 2;
	    $(".section-introB").animate({left: '-=199%'}, "slow");
	    $(".col-twelve").css('display','none');
	    sign = 0;
	    if(flag == 0){
	    	$(".section-introA").animate({left: '+=99%'}, "slow");
	    	flag = 1;
	    	
	    } 
	    $(".icon-bottom").removeClass("changbuttonB")
	    $(".icon-bottom").removeClass("changbuttonA")
	}  
})

