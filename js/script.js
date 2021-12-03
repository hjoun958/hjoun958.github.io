window.load = function () {};
$(document).ready(function () {
    // 위로가기 기능
    $('.gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });
    window.onload = function () {
        AOS.init();
    }

    // 부드럽게 위치 이동하는 코드
    var moveEl = $('.move');
    // 클릭시 해당위치로 부드럽게 이동한다.
    $.each(moveEl, function () {

        $(this).click(function (e) {
            // href 를 일단 막아서 위치이동 못하게함.
            e.preventDefault();
            // 가야하는 곳의 위치를 파악한다.
            var tg = $(this).attr('href');
            var num;
            // 혹시 #아이디 가 없다면
            if (tg == '#') {
                num = 0;
            } else {
                // 어느 만큼 이동해야 하는 지를 숫자로 파악한다.
                num = $(tg).offset().top;
            }
            // 움직이자
            $('html, body').stop().animate({
                scrollTop: num
            }, 500);
        });
    });

    //  상단 주메뉴 배경 관련
    var header = $('.header');
    var header_main_active_li_a = $('.header-main-active_li_a');

    $(window).scroll(function () {

        var scy = $(window).scrollTop();
        if (scy > 900) {
            header.addClass('header-active');
        } else {
            header.removeClass('header-active');
        }
    });

    // photoshop_성취율
    var photoshop = new ProgressBar.Line(skill_photoshop, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#6e1652',
        trailColor: '#ccc',
        trailWidth: 10,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#6e1652'
        },
        to: {
            color: '#6e1652'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // illust 성취율
    var illust = new ProgressBar.Line(skill_illust, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#6e1652',
        trailColor: '#ccc',
        trailWidth: 10,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#6e1652'
        },
        to: {
            color: '#6e1652'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // html 성취율
    var html = new ProgressBar.Line(skill_html, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#6e1652',
        trailColor: '#ccc',
        trailWidth: 10,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#6e1652'
        },
        to: {
            color: '#6e1652'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // css 성취율
    var css = new ProgressBar.Line(skill_css, {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 1400,
        color: '#6e1652z',
        trailColor: '#ccc',
        trailWidth: 10,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#6e1652'
        },
        to: {
            color: '#6e1652'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // jquery 성취율
    var jquery = new ProgressBar.Line(skill_jquery, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#6e1652',
        trailColor: '#ccc',
        trailWidth: 12,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#6e1652'
        },
        to: {
            color: '#6e1652'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    $(window).scroll(function () {
        // 스크롤바의 위치 값
        var scY = $(window).scrollTop();

        if (scY > 800) {
            // 애니메이션 실행
            photoshop.animate(0.9);
            illust.animate(0.75);
            html.animate(0.85);
            css.animate(0.85);
            jquery.animate(0.4);
        } else {
            // 원래모습으로 돌리기
            photoshop.set(0.0);
            illust.set(0.0);
            html.set(0.0);
            css.set(0.0);
            jquery.set(0.0);
        }

    });

    // 리디자인 슬라이드 영역
    var swiper_rede = new Swiper(".sw-rede", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var redesign_main_list_a = $('.redesign-main-list a');
    $.each(redesign_main_list_a, function (index, item) {
        $(this).click(function (e) {
            // href 이동 막기
            e.preventDefault();

            var temp = $(this).attr('red-tag')
            swiper_rede.slideTo(temp)
        });
    });


    var swiper_pub = new Swiper(".sw-publ", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var publishing_main_list_a = $('.publishing-main-list a');
    $.each(publishing_main_list_a, function (index, item) {
        $(this).click(function (e) {
            // href 이동 막기
            e.preventDefault();

            var temp = $(this).attr('pub-tag')
            swiper_pub.slideTo(temp)
        });
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })
});