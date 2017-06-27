//tab 切换 js
;(function($){
	
	$.fn.tab=function(options){
		
		var defaults={
			
			//各种属性
			navClass:'active',
			
			tabNav:'.tab_title>a',
			
			tabCon:'.tab_content>div',
			
			type:'click'
			//定义事件类型//
		}
	
		//通过覆盖来传参数
		var options=$.extend(defaults,options);
		
		this.each(function(){
			
			var _this=$(this); // 
			
			//显示功能的代码
			_this.find(options.tabNav).bind(options.type,function(){
				
				$(this).addClass(options.navClass).siblings().removeClass(options.navClass);
					
				var index=$(this).index();  //当前第几个
				
				_this.find(options.tabCon).eq(index).show().siblings().hide();
			})
			
		});
		
		return this;
		
	}
	
})(jQuery);