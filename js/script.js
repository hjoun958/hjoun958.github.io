window.load = function () {};
$(document).ready(function () {
    // 위로가기 기능
    $('.gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });

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