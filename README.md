# imgWaterfall


##### 使用方法：

引入jquery，及waterfall
```
<script src='jquery.js'></script>
<script src='waterfall.js'></script>
```

##### html结构：
```
<div class="box">
	<img src="src" alt="" class="img">
	<p class="inf">this is inf</p>
</div>
```

##### 使用方法:
```
<script>
	$(function(){
		$('.box').waterfall({
			imgWidth:190  //图片宽度
		})
	})
</script>
```

传入的配置参数目前只有一个，用于配置图片宽度