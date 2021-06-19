$(window).scroll(function () {
    $(".section-title").each(function () {
        let position = $(this).offset().top;

        let topOfWindow = $(window).scrollTop();
        if(position < topOfWindow+650) {
            $(this).addClass("animate__flash");
        }
    });
});

$(window).scroll(function () {
    $(".future-item").each(function () {
        let position = $(this).offset().top;

        let topOfWindow = $(window).scrollTop();
        if(position < topOfWindow+650) {
            $(this).addClass("animate__zoomIn");
        }
    });
});
