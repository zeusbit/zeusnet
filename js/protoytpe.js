//$('#content').on('mouseenter','.account-item',function () {
//	var val = $(this).find('span').html();
//	var that = this;
//	var index = layer.tips(val, that,{
//		maxWidth:540,
//		time:500000
//	});
//	$(this).data('index',index);
//})
//$('#content').on('mouseleave','.account-item',function () {
//	var index = $(this).data('index');
//	layer.close(index);
//})
//切换语言
$('#content').on('click','.item-language',function () {
	var lang = $(this).data('lang');
	localStorage.setItem('lang',lang);
	var index = layer.load(0, {shade: [0.5,'#000']}); //0代表加载的风格，支持0-2
	$('#content').data('loadingIndex',index);
	init(lang);
})
function render (content) {
	var temp = $('#template').html();
	var compiledTemplate = Template7.compile(temp);
	var context = content;
	var html = compiledTemplate(context);
	$('#content').html(html);
}
function init (lang) {
	if (!lang) {
		lang = localStorage.getItem('lang');
	}
	if (!lang) {
		lang = 'en';
	}
  jQuery.i18n.properties({
		name: 'strings', //资源文件名称
		path: '../i18n/prototype/', //资源文件路径
		mode: 'map', //用Map的方式使用资源文件中的值
		language: lang,
		callback: function(obj) { 
			var index = $('#content').data('loadingIndex');
			setTimeout(function () {
				layer.close(index);
			},500)
			var languageMap = $.i18n.map;
//			console.log(languageMap,'----');
			render(languageMap);
		}
	})
}
init();