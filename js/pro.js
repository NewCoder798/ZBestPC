$(function(){
	/************商品筛选***************/
	$(".choice .default").click(function(){
		$(this).siblings("ul").toggle();
		$(this).toggleClass("on");
	});
	$(".choice .select li").click(function(){
		var txt = $(this).text();
		$(".choice .default").text(txt).removeClass("on");
		$(this).parent("ul").slideUp('fast');
	});
	/*************鼠标悬浮*************/
	$(".proList li").on('mouseenter',function(){
		var html="";
		html = '<p class="quick">快速浏览</p>';
		$(this).css('border','1px solid #000').append(html);
		$(".quick").on('click',function(){
			$(".mask").show();
			$(".proDets").show();
		});
		$(".btns .cart").click(function(){
			if($(".categ p").hasClass("on")){
				$(".proDets").hide();
				$(".mask").hide();
			}
		});
	});
	$(".proList li").on('mouseleave',function(){
		$(this).find("p").remove();
		$(this).css('border','1px solid #fff');
	});
	//关闭按钮
	$(".off").click(function(){
		$(".mask").hide();
		$(".proDets").hide();
		$(".pleaseC").hide();
	});
/**********************************************共用*****************************************************/
/**********************商品提示************************************/
	$(".proIntro .smallImg p img").hover(function(){
		$(this).parents(".smallImg").find("span").remove();
		var lf = $(this).position().left;
		var con = $(this).attr("alt");
		$(this).parent("p").addClass('on');
		$(this).parents(".smallImg").append('<span>'+con+'</span>');
		$(".smallImg").find("span").css("left",lf);
	},function(){
		$(this).parents(".smallImg").find("span").remove();
		$(this).parent("p").removeClass('on');
	});
	$(".proIntro .smallImg img").click(function(){
		var offset = $(this).attr("data-src");
		//小弹框和详情页图片大小不一样
		$(this).parents(".proCon").find('.proImg').children(".det").attr("src",offset).css({'width':'580px','height':'580px'});
		$(this).parents(".proCon").find('.proImg').children(".list").attr("src",offset).css({'width':'360px','height':'360px'});
		$(this).parents(".smallImg").find("span").remove();
		$(this).parent("p").addClass('on').siblings().removeClass('on');
		//移除鼠标离开事件
		$(this).off("mouseleave").parent('p').siblings().find('img').on('mouseleave',function(){
			$(this).parents(".smallImg").find("span").remove();
			$(this).parent("p").removeClass('on');
		})
	});
	/**********************无规格不结算************************************/
	$(".btns a").click(function(){
		if($(".categ p").hasClass("on")){
			if($(this).children().hasClass("buy")){
				$(this).attr("href","order.html");
			}
			$(".proIntro").css("border","none");
			$(".num .please").hide();
		}else{
			$(".proIntro").css("border","1px solid #c10000");
			$(".num .please").show();
		}
	})
	/*************************小图切换大图*****************************/
	$(".smallImg > img").mouseover(function(){
		$(this).css("border","1px solid #c10000").siblings("img").css("border","none");
		var src = $(this).attr("data-src");
		$(this).parent().siblings(".det").attr("src",src).css({'width':'580px','height':'580px'});
		$(this).parent().siblings(".list").attr("src",src).css({'width':'360px','height':'360px'});
	})
	
	/**********proDetail tab***************/
	$(".msgTit a").click(function(){
		var index = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".msgAll").children("div").eq(index).show().siblings().hide();
	});
	
	/***********************order***************/
	$(".addre").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	$(".way img").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	$(".dis span").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
	$(".addre").on('click','.setDefault',function(){
		$(this).next().remove();
		$(this).parent("p").prev().append('<span class="default">[默认地址]</span>').parents('.addre').addClass("on").siblings().removeClass("on")
		.find(".default").remove().end().find(".tit p").eq(1).prepend('<a href="#" class="setDefault">设为默认</a><span>|</span>');
		$(this).parent("p").prev().parents('.addre').prependTo(".addres");
		$(this).remove();
	})
	/************************ok************************/
	var seconds = $(".ok span").text();
	function time(){
		seconds--;
		$(".ok span").text(seconds);
		if(seconds==0){
			window.location.href=("myorderq.html")
		}
	}
	setInterval(time,1000);
	/************************forget************************/
	$(".next").click(function(){
		$(".two").show();
		$(".one").hide();
		$(".forCon ul li").eq(1).addClass("on").siblings("li").removeClass("on");
	});
})
