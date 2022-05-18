/* $ (document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active'); 
        $('body').toggleClass('lock');
    });
}); */
$(document).ready(function(){
    $('.slider2').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:2000,
        easing:'ease-in',
        infinite:true,
        autoplay:true,
        autoplaySpeed:4000,
        rows:1,
    });
});