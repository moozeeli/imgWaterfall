/*
 litong 
 瀑布流插件
 传入图片宽度
*/
(function($) {
	$.fn.waterfall = function(options){
		// console.log('adsf')
		var settings = $.extend({
				imgWidth:150,
			},options);

		// 设置图片宽度：
		var $box = this;
		$box.find('img').css('width',settings.imgWidth);

		var boxOuterWidth = $box.eq(0).outerWidth(true);
		//设置整体居中
		// console.log('图片宽度加margin'+imgWidth)
		
		var boxArr = []; // 存放第一行图片的所有高度。
		var colNum =  Math.floor(($(window).width())/boxOuterWidth);  // 计算可以放几列图片；
		console.log("可以放"+colNum+"列图片")

		this.each(function(index,value) {
			var $this = $(this);
			if(index<colNum){
				boxArr.push($this.outerHeight(true));
			}else{
				// 获取boxArr
				var minHeight = Math.min.apply(null,boxArr);
				// console.log(minHeight);
				var minIndex = boxArr.indexOf(minHeight);
				// console.log(minIndex)
				// console.log($box[minIndex])
				var left = $box.eq(minIndex).position().left;
				// console.log(left)
				var addHeight = $box.eq(index).css({
					"position":'absolute',
					"left":left,
					"top":minHeight
				}).outerHeight(true);

				boxArr[minIndex] += addHeight;
			}
			
		})
			console.log(boxArr)
	
	}
})(jQuery)