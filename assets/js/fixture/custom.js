console.clear();
$('.slick-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 800,
            settings: {
                centerMode: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: false,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 320,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                centerMode: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
