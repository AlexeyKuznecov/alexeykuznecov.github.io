$(function() {
	/*Настройка select*/
	$('.select').on('click', function() {
		$(this).children('.select__dropdown').toggleClass('select__dropdown_open');
		/*Клик вне элемента - закрывает список*/
		$(document).mouseup(function (e) {
			var select = $('.select');
			if(!select.is(e.target) && select.has(e.target).length === 0) {
				select.children('.select__dropdown').removeClass('select__dropdown_open');
			}
		});
	});
	$('.select__option').on('click', function() {
		var value = $(this).attr('data-value');
		$(this).parent().siblings('.select_checked').removeClass('select_checked_active');
		$(this).parents('.select').removeClass('select__dropdown_open');
		$('#select-stage').val(value);
		$(this).parent().siblings('.select_checked').text(value).addClass('select_checked_active');
	});
	$('[type="tel"]').mask("+7 (999) 999-99-99", { completed:function(){
		$(this).addClass('valid-input');
	}});
	/* RED BORDER INVALID INPUT*/
	$('[name="name"]').on('focusout', function(event) {
		var inputTrim =  $.trim($(this).val());
		var input = $(this);
		if (inputTrim && $(input).is(':invalid')) {
			$(this).addClass('invalid-input');
		}
		else { $(this).removeClass('invalid-input'); }
		if (inputTrim && $(input).is(':valid')) {
			$(this).addClass('valid-input');
		}
		else { $(this).removeClass('valid-input'); }
	});
	$('[name="phone"]').on('focusout', function(event) {
		var inputTrim =  $.trim($(this).val());
		var input = $(this);
		if (inputTrim && $(input).is(':invalid')) {
			$(this).addClass('invalid-input');
		}
		else { $(this).removeClass('invalid-input'); }
		if (inputTrim && $(input).is(':valid')) {
			$(this).addClass('valid-input');
		}
		else { $(this).removeClass('valid-input'); }
	});
	/* checkbox confidential*/
	// $('.modal-btn').on('click', function(e) {
	// 	// e.preventDefault();
	// 	if (($('#form-question-label-name').hasClass('valid-input')) && ($('#form-question-label-phone').hasClass('valid-input'))) {
	// 		console.log('Yep 2 fields valid');

	// 	}
	// });
});