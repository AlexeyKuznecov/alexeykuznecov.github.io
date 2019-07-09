$(document).ready(function () {
    var navbarBurger = $('.navbar-burger');
    var navbar = $('.navbar-nav');
    var feedbackLink = $('.products-button, .button');
    //Если меню-бургер открыто, то по клику или на якорь-ссылку или на логотип менб закрывается и убирается крестик
    $('.navbar-nav-link, .logo').on('click', function () {
        if (($(window).width() < 676) && ($('.navbar-nav').is(':visible'))) {
            navbar.slideToggle(400);
            navbarBurger.toggleClass('navbar-burger_active');
        }
    });
    //Маска номера телефона
    $('[type="tel"]').mask("+7 (999) 999-99-99", { autoclear: false });
    // Добавление затемненности навбару при прокрутке от верха окна
    function scrollNavbar() {
        $(window).scroll(function () {
            if ($('.navbar').offset().top !== 0) {
                $('.navbar, .navbar-nav').addClass('navbar-dark');
                if ($(window).width() < 676) {
                    $('.header__logo-fill').addClass('logo-fill');
                }
            }
            else {
                $('.navbar, .navbar-nav').removeClass('navbar-dark');
                if ($(window).width() < 676) {
                    $('.header__logo-fill').removeClass('logo-fill');
                }
            }
        });
    }
    scrollNavbar();
    //Плавная прокрутка всех якорей на страницы, кроме тех, что в секции с табами
    $('a[href^="#"]:not(.services-nav__tab)').click(function (event) {
        event.preventDefault();
        var href = $(this).attr('href');
        $('html,body').animate({ scrollTop: $(href).offset().top - 80 }, 500);
        scrollNavbar();
    });
    //При переходе на любую ссылку, требующую обратной связи(купить, призыв к действию) прокручивает до форму и встает в инпут
    feedbackLink.on('click', function (event) {
        event.preventDefault();
        $('.feedback-input[type="text"]').focus();
    });
    
    // Удаление атрибута стиль для навбар при переходе на более высокое разрешение(из-за перестройки навбара, чтобы на ПК при
    // переходе было норм)
    $(window).resize(function () {
        if ($(window).width() > 676) {
            navbar.removeAttr('style');
        }
    });
    // Открытие бургер меню + добавление класса с крестиком
    navbarBurger.click(function () {
        navbar.slideToggle(400);
        navbarBurger.toggleClass('navbar-burger_active');
    }).resize();
    // Табы в Services
    var tab = $('.services-nav__tab');
    $(tab).on('click', function (event) {
        event.preventDefault();
        $('.services-info').removeClass('services-info_active');
        $('.services-img').removeClass('services-img_active');
        $('.services-nav__tab').removeClass('services-nav__tab_active');
        $(this).addClass('services-nav__tab_active');
        $('.services-info[data-tab=' + $(this).attr('data-tab') + ']')
            .toggleClass('services-info_active');
        $('.services-img[data-tab=' + $(this).attr('data-tab') + ']')
            .toggleClass('services-img_active');
    });
    // Правила для слайдера в Products
    $('.products-wrap').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('.slider-arrow_left'),
        nextArrow: $('.slider-arrow_right'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dotsClass: 'products__dots',
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    dotsClass: 'products__dots'
                }
            }
        ]
    });
    // Правила для лэйблов на невалидный инпут с телефоном
    $.validator.addMethod("minlenghtphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 10;
    },
        "Необходимо заполнить поле полностью");
    $.validator.addMethod("requiredphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 0;
    },
        "Поле должно быть заполнено");
    // Ограничение на ввод цифр в поле имя в форме обратной связи
    $('input[name="name"]').keypress(function (e) {
        if (e.which != 46 && e.which > 47 && e.which < 58) {
            return false;
        }
    });
    // Валидация формы в секции Feedback
    $(".valid-form").each(function () {
        let $form = $(this);
        $form.validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    requiredphone: true,
                    minlenghtphone: true
                }
            },
            messages: {
                name: {
                    required: 'Поле должно быть заполнено',
                    minlength: 'Длина имени должна быть не менее {0} символов'
                },
                phone: {
                    required: 'Поле должно быть заполнено',
                    minlength: 'Поле должно быть заполнено'
                }
            },
            errorClass: 'invalid-input',
            validClass: "valid-input"
        });
    });
    // Добавление Я.Карты при докрутке до секции services
    var services = $('.services');
    var servicesTop = services.offset().top;
    $(window).bind('scroll', function () {
        var windowTop = $(this).scrollTop();
        if (windowTop > servicesTop) {
            $('.map-opacity').prepend('<script type="text/javascript" charset="utf-8" async src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac1a1b5729850a1b8ad0b473d469270ce5617aed25c459e451f3f0aa3729ecaa9&amp;width=100%25&amp;height=560&amp;lang=ru_RU&amp;scroll=false"></script>')
            $(window).unbind();
        }
    });
});