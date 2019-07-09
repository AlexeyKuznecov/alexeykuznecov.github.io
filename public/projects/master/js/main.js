jQuery(document).ready(function($)  {
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
		bl_top = $(target).offset().top-130;
		$('body,html').animate({scrollTop: bl_top}, 700);
		return false;
	});
	$(window).resize(function() {
		if ($(window).width() >= 768) {
			jQuery('.lightzoom').lightzoom({speed: 400, viewTitle: true});
		} else{
			jQuery('.lightzoom').lightzoom().remove();
		}
	});
	
	if ($(window).width() > 768) { 
		$(".hover").mouseleave(
			function () {
				$(this).removeClass("hover");
			});
	}
	else{
		$('a.lightzoom').on('click', function(event) {
			event.preventDefault();
		});
	}
});
jQuery(document).ready(function($) {
		width=window.innerWidth;//учитывает ширину экрана с полосой прокрутки
	if(!$('.navbar-collapse').hasClass('show')) {//Если Меню НЕ! открыто(нет класса show)
		$('button.navbar-toggler').on('click', function() {
			$('.navbar').toggleClass('pbfnavbar');
			$('.navbar-toggler').toggleClass("active");/*добавляет крестик по клику на бургер*/
		});

		$('nav a.navbar-brand').on('click', function () {
			$('.navbar-collapse').collapse('hide');
			$('.navbar').removeClass('pbfnavbar');/*По клику на якорь убирает класс 0 нижним отступом*/
			$('.navbar-toggler').removeClass("active");
		});
	}
});
function _resize() {
		width=window.innerWidth;//учитывает ширину экрана с полосой прокрутки
		if (width <= 991) {
			$('.navbar-toggler').removeClass("active");
			$('nav a[data-target^="anchor"]:not(.navbar-brand)').on('click', function () {
				$('.navbar-collapse').collapse('hide');/*Закрывает открытое меню по клику на якорь*/
				$('.navbar-toggler').toggleClass("active");/*Возвращает с крестика в бургер по выбору якоря*/
				$('.navbar').toggleClass('pbfnavbar');/*По клику на якорь убирает класс 0 нижним отступом*/
				$a = $($(this).attr('href'));/*РАЗОБРАТЬ ПО ЛУЧШЕ*/  
				return false;
			});
			}
			if($('.navbar-collapse').hasClass('show')) {
				$('nav a.navbar-brand').on('click', function () {
				$('.navbar-collapse').collapse('hide');
				
				$('.navbar').toggleClass('pbfnavbar');/*По клику на якорь убирает класс 0 нижним отступом*/
			$('.navbar-toggler').toggleClass("active");
			});
			} 
		if (width >= 992) {
            $('.navbar').removeClass('pbfnavbar');/*По клику на якорь убирает класс 0 нижним отступом*/
		}
}
	$(document).ready(function ()
	{
		_resize();
		$(window).resize(_resize);
});