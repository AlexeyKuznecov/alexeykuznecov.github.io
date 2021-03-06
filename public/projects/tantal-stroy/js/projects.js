   $(function() {
    var menu = $('.hero-nav');
		var menuPos = $('.hero-nav').offset().top;//Отступ меню от верхней границы окна
        var navHeight = $('.hero-nav').outerHeight(true);
        var navLink = $('.hero-nav nav a');
        $(window).scroll(function name() {
		var winPos = $(window).scrollTop();//Сколько высота в пикселях от верхушки окна
        if (winPos >= menuPos) {
           menu.addClass('hero-nav-fixed');
       } else {
           menu.removeClass('hero-nav-fixed');
       }
   });
        $(window).resize(name);
        /*Sticky-Menu*/
        var navbarBurger = $('.hero-nav-burger');
        var navbar = $('nav ul:not(.submenu)');
        /*Удаление атрибута стиль для навбар при переходе на более высокое разрешение(из-за перестройки навбара, чтобы на ПК при переходе было норм)*/
        $(window).resize(function () {
            if ($(window).width() > 767) {
                navbar.removeAttr('style');
            }
        });
        /* Открытие бургер меню + добавление класса с крестиком */
        navbarBurger.click(function () {
            navbar.slideToggle(400);
            navbarBurger.toggleClass('hero-nav-burger_active');
        }).resize();

        /* Если меню-бургер открыто, то по клику на якорь-ссылку мен. закрывается и убирается крестик*/
        $('.hero-nav nav a:not(.dropdown-link)').on('click', function () {
            if (($(window).width() < 767) && (navbar.is(':visible'))) {
                navbar.slideToggle(400);
                navbarBurger.toggleClass('hero-nav-burger_active');
            }
        });
        /*Плавная прокрутка всех якорей*/
        $('a[href^="#"]:not(.dropdown-link):not(.submenu__link)').click(function (event) {
            event.preventDefault();
            var href = $(this).attr('href');
            $('html,body').animate({ scrollTop: $(href).offset().top - 60 }, 500);
        });
        /* E-mail label сверху*/
        $('[type="email"]').on('focusout', function(event) {
            var email = $.trim($('[type="email"]').val());
            if (email) {
                $('.feedback-form .input-wrap input[type="email"] ~ span').addClass('spanUp');
            }
            else { $('.feedback-form .input-wrap input[type="email"] ~ span').removeClass('spanUp'); }
        });
        /* RED BORDER INVALID INPUT*/
        $('.feedback-form input').on('focusout', function(event) {
            var inputTrim =  $.trim($(this).val());
            var input = $(this);
            if (inputTrim && $(input).is(':invalid')) {
                $(this).addClass('invalid-input');
            }
            else { $(this).removeClass('invalid-input'); }
        });
        $('[type="tel"]').mask("+7 (999) 999-99-99", { autoclear: false });
    });