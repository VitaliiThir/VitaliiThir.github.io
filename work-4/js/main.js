$(document).ready(function () {


    //	slide2id - плавная прокрутка по ссылкам внутри страницы
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector: "nav a"
    });

    //mobile-navigftion
    var pull = $("#mobile-navigation");
    var nav = $("#mobile-nav");
    $(pull).on("click", function (e) {
        e.preventDefault();
        $(nav).slideToggle();
        $(this).toggleClass('mobile-navigation--activ');
    });

    //При клике извне меню закрывается
    $(document).click(function (event) {
        "use strict";
        if ($(event.target).closest("#mobile-navigation").length)
            return;
        $("#mobile-nav").slideUp("slow");
        event.stopPropagation();
    });
    $(window).resize(function () {
        var w = $(window).width();
        if (w > 576) {
            nav.removeAttr('style');
        }
    });
});
