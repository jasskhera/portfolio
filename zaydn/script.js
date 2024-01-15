$('.slider').slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100
  })

$('#search-btn').click(function(){
  $('#search').slideToggle()
})

$(".slidetoggle").click(function () {
  $(this).parent().children(".info").slideToggle()

  $(this).children("i").toggleClass("fa-minus")
  $(this).toggleClass("violet")
})
