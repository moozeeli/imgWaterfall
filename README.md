# imgWaterfall


#### 引入jquery：

引入jquery，及waterfall
```
<script src='jquery.js'></script>
<script src='waterfall.js'></script>
```

#### html结构：
```
<div class="box">
	<img src="src" alt="" class="img">
	<p class="inf">this is inf</p>
</div>
<div class="box">
	<img src="src" alt="" class="img">
	<p class="inf">this is inf</p>
</div>
<div class="box">
	<img src="src" alt="" class="img">
	<p class="inf">this is inf</p>
</div>
<!--可以多添加一些box-->
```

#### 使用方法:
```
<script>
	$(function(){
		$('.box').waterfall({
			imgWidth:190  //图片宽度
		})
	})
</script>
```

传入的配置参数目前只有一个，用于配置图片宽度。

##### 演示
请clone下来打开demo目录下的index.html文件查看演示