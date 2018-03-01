$('#content').on('click','.item-team',function () {
	var team = document.getElementById('team');
	$(document.body).scrollTo(team,300);
})
$('#content').on('click','.item-scenario',function () {
	$(document.body).scrollTo($('#scenario'),300);
})
$('#content').on('click','.item-route',function () {
	$(document.body).scrollTo($('#route'),300);
})
$('#content').on('click','.item-contact',function () {
	$(document.body).scrollTo($('#contact'),300);
})
$('#content').on('click','.header-top-right .icon-menu',function () {
	var width = window.innerWidth;
	if (width < 768) {
		$('.header-top-right>ul').toggle();
	}
})
$('#content').on('click','.icon-close',function () {
	$('.header-top-right>ul').toggle();
})
$('#content').on('click','.header-top-right>.nav-menu>li',function () {
//	console.log($(this),$(this).hasClass('item-language'));
	if ($(this).hasClass('item-language')){
		return false;
	}
	var width = window.innerWidth;
	if (width < 768) {
		$('.header-top-right>ul').toggle();
	}
})
$('#content').on('click','.team-inner',function () {
	var width = window.innerWidth;
	if (width > 640 ) {
		return;
	}
	var img_path = $(this).find('.portrait').css('background-image');
	var name = $(this).find('.partner-name').html();
	var indro = $(this).find('.partner-indro p').html();
//	return;
	sessionStorage.setItem('img_path',img_path);
	sessionStorage.setItem('name',name);
	sessionStorage.setItem('indro',indro);
	location.assign('./person.html');
})
$('#content').on('click','.consultant-inner',function () {
	var width = window.innerWidth;
	if (width > 640 ) {
		return;
	}
	var img_path = $(this).find('.portrait').css('background-image');
	var name = $(this).find('.consultant-name').html();
	var indro = $(this).find('.consultant-indro p').html();
//	return;
	sessionStorage.setItem('img_path',img_path);
	sessionStorage.setItem('name',name);
	sessionStorage.setItem('indro',indro);
	location.assign('./person.html');
})
window.onresize = function () {
	var width = window.innerWidth;
	if(width>768) {
		$('.header-top-right>ul').show().css({
			background:'transparnet'
		});
	}else {
		$('.header-top-right>ul').css({
			background:'background: linear-gradient(to bottom right,#5a306f 10%,#303c62);'
		});
	}
}
window.onscroll = function () {
	var scrollTop = $(document).scrollTop();
	if (scrollTop>400){
		$('#backtop').fadeIn();
	}else {
		$('#backtop').fadeOut();
	}
	var width = window.innerWidth;
	if(width<768) {
		$('.header-top-right>ul').hide();
	}
}
//$('#content').on('touchstart',function () {
//	$('.header-top-right>ul').hide();
//})
$('#content').on('click','#backtop',function () {
	$(document.body).scrollTo($('.header'),300);
	var w = window.innerWidth;
})
function initSlider (obj) {
	if (!obj) {
			obj = {
			speed:1,
			time:1,
			rate:0.06
		};
	}
	var speed = obj.speed;
	var time = obj.time;
	$('.speed-value span').html(speed);
	$('.time-value span').html(time);
	$('#speed').slider({
		value:speed,
		formatter: function(value) {
			$('.speed-value span').html(value);
			obj.speed = value;
			changeValue(obj)
			return value;
		}
	});
	$('#time').slider({
		value:time,
		formatter: function(value) {
			$('.time-value span').html(value);
			obj.time = value;
			changeValue(obj)
			return value;
		}
	});
}
function changeValue (obj) {
	var dayEarning = obj.speed * obj.time * obj.rate;
	var weekEarning = dayEarning * 7;
	var monthEarning = dayEarning * 30;
	dayEarning = dayEarning.toFixed(2);
	weekEarning = weekEarning.toFixed(2);
	monthEarning = monthEarning.toFixed(2);
	$('.day-earning-value span').html(dayEarning);
	$('.week-earning-value span').html(weekEarning);
	$('.month-earning-value span').html(monthEarning);
}
//header mouseover事件
$('#content').on('mousemove','.header-content .float-right',function (e) {
//	console.log(e.offsetX,e.offsetY);
	var offsetX = e.offsetX;
	var offsetY = e.offsetY;
	var boxWidth = 720;
	var boxHeight = 360;
	var x = -offsetX + boxWidth / 2;
	var y = -offsetY + boxHeight / 2;
//	console.log(offsetY,'translate('+ (x/90)+ 'px,'+ y/45 +'px)');
	$('.header-content .float-right').css({
		transform:'translate('+ (x/50)+ 'px,'+ y/25 +'px)'
	})
})
