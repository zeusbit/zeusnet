var ani;//应用场景动画
function initLanguae (lang,country,index) {
//	console.log(lang);
	var obj = {
		speed:100,
		time:8,
		rate:0.06
	}
	if (!lang) {
		lang = localStorage.getItem('lang');
	}
	if (!lang) {
		lang = 'en';
	}
	if (!index) {
		index = localStorage.getItem('countryIndex') || '1';
	}
	jQuery.i18n.properties({
		name: 'strings', //资源文件名称
		path: 'i18n/', //资源文件路径
		mode: 'map', //用Map的方式使用资源文件中的值
		language: lang,
		callback: function() { //加载成功后设置显示内容
			var languageMap = $.i18n.map;
			languageMap.lang = lang;
//			console.log(languageMap);
			if (!languageMap.menu_index) {
				initLanguae('zh');
			}
			if (lang != 'zh' && lang != 'en') {
				lang = 'en';
			}
			if (lang == 'en') {
				languageMap['roadmap'] = 'img/svg/roadmap-en.svg';
				languageMap['unit'] = '$';
				obj.rate = obj.rate / 6.28;
			}else {
				languageMap['roadmap'] = 'img/svg/roadmap-zh.svg';
				languageMap['unit'] = '¥';
			}
			render(languageMap);
			//加载记录在localStorage里边的语言对应的国旗
			if (lang == 'en'){
				index = 1;
			}else {
				index = 0;
			}
			index = index.toString();
			if (!index || !index.match(/^\d$/)) {
				index = 0;
			}else {
				index = index * 1;
			}
			var target = $('.choose-language ul li').eq(index).siblings();
//			console.log(index,target);
			target.remove();
			$('.choose-language ul').prepend(target);
			initSlider(obj);//初始化slider，，index.js
			if(lang == 'en'){
				document.title = 'ZeusNet';
				$('body').addClass('en');
			}else {
				document.title = '超算网';
				$('body').removeClass('en');
			}
			$('.choose-language ul').addClass('normal');
			//动画
			ani = setInterval(function () {
				var num1 = Math.random()*2;
				var num2 = Math.random()*3+2;
				var num3 = Math.random()*2+5;
				var num4 = Math.random()*3+7;
				num1 = Math.floor(num1);
				num2 = Math.floor(num2);
				num3 = Math.floor(num3);
				num4 = Math.floor(num4);
//				console.log(num1,num2,num3,num4);
				$('.circle').removeClass('active');
				$('.circle').removeClass('active1');
				$('.circle').removeClass('active2');
				$('.circle').removeClass('active3');
				setTimeout(function () {
					$('.circle').eq(num1).addClass('active');
					$('.circle').eq(num2).addClass('active1');
					$('.circle').eq(num3).addClass('active2');
					$('.circle').eq(num4).addClass('active3');
					},50)
			},6500)
		}
	});
};
function render (content) {
	var template = $('#template').html();
	// compile it with Template7
	var compiledTemplate = Template7.compile(template);
	 
	// Now we may render our compiled template by passing required context
	var context = content;
	var html = compiledTemplate(context);
	$('#content').html(html);
}
initLanguae();
//选择语言
$('#content').on('click','.choose-language li',function (){
	var currentLang = localStorage.getItem('lang');
	var lang = $(this).data('lang');
	var country = $(this).data('country');
	var index = $(this).data('index');
	if (ani) {
		clearInterval(ani);
	}
//	if (($('.choose-language li').eq(0).data('index') == index)) {
//		return;
//	}
	localStorage.setItem('lang',lang);
	localStorage.setItem('countryIndex',index);
	initLanguae(lang,country,index);
})
//语言选择出现与否
$('#content').on('click','.choose-language ul',function (e) {
	$(this).toggleClass('active');
})
$('#content').on('mouseleave','.choose-language ul',function () {
	$(this).removeClass('active');
})
