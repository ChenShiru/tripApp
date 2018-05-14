
<html>

	<head>
		<meta charset="utf-8" />		
		<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">		
		<meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,width=device-width">
		<meta name="apple-mobile-web-app-title" content="Vue选项卡">
		<title>Vue实现选项卡</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<style>
		* {
			padding: 0;
			margin: 0;
		}
		
		.box {
			width: 800px;
			height: 200px;
			margin: 0 auto;
			border: 1px solid #000;
		}
		
		.tabs li {
			float: left;
			margin-right: 8px;
			list-style: none;
		}
		
		.tabs .tab-link {
			display: block;
			width: 250px;
			height: 49px;
			text-align: center;
			line-height: 49px;
			background-color: #5597B4;
			color: #fff;
			text-decoration: none;
		}
		
		.tabs .tab-link.active {
			height: 47px;
			border-bottom: 2px solid #E35885;
			transition: .3s;
		}
		
		.cards {
			float: left;
		}
		
		.cards .tab-card {
			display: none;
		}
		
		.clearfix:after {
			content: "";
			display: block;
			height: 0;
			clear: both;
		}
		
		.clearfix {
			zoom: 1;
		}
	</style>

	<body>
		<div id="app" class="box">
			<ul class="tabs clearfix">
				<li v-for="(tab,index) in tabsName">
					<a href="#" class="tab-link" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">{{tab.name}}</a>
				</li>
			</ul>

			<div class="cards">
				<div class="tab-card" style="display: block;">这里是HTML教程</div>
				<div class="tab-card">欢迎来到CSS模块</div>
				<div class="tab-card">嗨，这里是Vue</div>
			</div>
		</div>
	</body>

	<script>
		var app = new Vue({
			el: "#app",
			data: {
				tabsName: [{
					name: "HTML",
					isActive: true
				}, {
					name: "CSS",
					isActive: false
				}, {
					name: "Vue",
					isActive: false
				}],
				active: false
			},
			methods: {
				tabsSwitch: function(tabIndex) {

					var tabCardCollection = document.querySelectorAll(".tab-card"),
						len = tabCardCollection.length;

					for(var i = 0; i < len; i++) {
						tabCardCollection[i].style.display = "none";
						this.tabsName[i].isActive = false;
					}
					this.tabsName[tabIndex].isActive = true;
					tabCardCollection[tabIndex].style.display = "block";
				}
			}
		})
	</script>

</html>