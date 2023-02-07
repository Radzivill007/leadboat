// На десктопе открываем услуги по наведению
$('.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn()
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut()
})


$(".navbar-toggler").click(function () {
  $(".navbar").toggleClass("navbar-shadow")
})