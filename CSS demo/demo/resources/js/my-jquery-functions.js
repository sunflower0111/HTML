/** 自定义jquery函数 **/
//鼠标事件： click  mouseout移出，mouseover移入 ，mousedown鼠标按下， mouseenter相当于hover，与mouseleave移出一起用
$(document).ready(function() {

	$("#addclass").click(function() {
		$("p:first").addClass("ui-font-30"); //该方法不会移除已存在的 class 属性，仅仅添加一个或多个 class 属性。如需添加多个类，请使用空格分隔类名。
	});
	//----------------添加类------------------  
	$("#changeclass").click(function() {
		$("p:last").removeClass("ui-font-20").addClass('ui-font-30');
	});
	//--------------------修改类--------------

	$(".btn1").click(function() {
		$("#tog").toggleClass("ui-font-30");
	});
	//--------------------切换类--------------
	$(".btn2").click(function() {
		$('.ul-layout li').toggleClass(function() {
			return 'listitem_' + $(this).index(); //$(this).index() 产生序列
		});
	});
	//--------------------切换列表的类-------------- 
	$(".btn3").click(function() {
		//		    $("#attr").attr("background","url(../resources/images/input_icon_clear.png)"); //无效代码
		$("#attr > img").attr("height", "40");
		$("#attr > div").css("background-image", "url(../resources/images/input_icon_clear.png)");
	});
	//--------------------更改标签样式--------------

	$(".hide9").click(function() {
		$(".hide").hide();
	});
	//-------------hide隐藏和show显示函数------------
	$("#hide").click(function() {
		$(".p1").hide(); //hide(1000)表示动画效果为1000毫秒。（）中的数字表示的为速度。单位毫秒
	});
	$("#show").click(function() {
		$(".p1").show();
	});
	//-------------hide隐藏和show显示函数------------  
	$("#toggle").click(function() {
		$(".p2").toggle();
	});
	//-------------toggle隐藏和显示函数------------	  

//淡入淡出效果
  $(".btn5").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
//-------------fadein 将隐藏的div显示函数------------	 
  $(".btn6").click(function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
  });
//-------------fadeout 将显示的div隐藏函数------------	 
  $(".btn7").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });
//-------------fadeToggle div显示和隐藏效果------------
  $(".flip").click(function(){
  	$(".panel").slideDown();
//  $(".panel").slideDown("slow");
  });
//-------------slideDown函数 向下滑动------------  
    $(".flip2").click(function(){
	    $(".panel").slideUp("slow");
	});
//-------------slideup函数 向下滑动------------
	$(".flip3").click(function(){
    	$(".panel").slideToggle("slow");
  	});
//-------------slideToggle函数 向下向上滑动------------

});