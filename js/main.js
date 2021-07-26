
$(document).ready(function() {
  pointer();
  changeNavBG();
  $("#demo").mouseover(function(){
    $(".w__book-now").css("transform", "translateY(-100%)");
    console.log('over');
  });
  $("#demo").mouseout(function(){
      $(".w__book-now").css("transform", "translateY(0%)");
    console.log('out');
  });
  
  $('#menuOpenBtn').click(function(event) {
    $('.NavMenuWraper').fadeIn();
  });
  $('#closeBtn').click(function(event) {
    $('.NavMenuWraper').fadeOut();
  });

  
  
});


function changeNavBG() {
  
  $('._home').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/home.jpg)')
  $('.bg-view').css('backgroundImage','url(images/menu_bg/home.jpg)')
    $('.overlay_bg').addClass('bg_animation');
  });
  $('._home').mouseout(function(event) {
    $('.overlay_bg').removeClass('bg_animation');
  });
  
  
  $('._concept').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/concept.jpg)')
  $('.bg-view').css('backgroundImage','url(images/menu_bg/concept.jpg)')
  $('.overlay_bg').addClass('bg_animation');
  });
  $('._concept').mouseout(function(event) {
    $('.overlay_bg').removeClass('bg_animation');
  });
  
  $('._rooms').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/rooms.jpg)')
  $('.bg-view').css('backgroundImage','url(images/menu_bg/rooms.jpg)')
  $('.overlay_bg').addClass('bg_animation');
  });
  $('._rooms').mouseout(function(event) {
    $('.overlay_bg').removeClass('bg_animation');
  });
  
  
  $('._access').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/access.jpg)')
  $('.bg-view').css('backgroundImage','url(images/menu_bg/access.jpg)')
  $('.overlay_bg').addClass('bg_animation');
  });
  $('._access').mouseout(function(event) {
    $('.overlay_bg').removeClass('bg_animation');
  });
  
  
  $('._cafe').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/cafe.jpg)')
  $('.bg-view').css('backgroundImage','url(images/menu_bg/cafe.jpg)')
  $('.overlay_bg').addClass('bg_animation');
  });
  $('._cafe').mouseout(function(event) {
    $('.overlay_bg').removeClass('bg_animation');
  });
  
  $('._gallery').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/gallery.jpg)')
  $('.bg-view').css('backgroundImage','url(images/menu_bg/gallery.jpg)')
  $('.overlay_bg').addClass('bg_animation');
  });
  $('._gallery').mouseout(function(event) {
    $('.overlay_bg').removeClass('bg_animation');
  });
  
  $('._kitchen').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/kitchen.jpg)')
  $('.bg-view').css('backgroundImage','url(images/menu_bg/kitchen.jpg)')
  $('.overlay_bg').addClass('bg_animation');
  });
  $('._kitchen').mouseout(function(event) {
    $('.overlay_bg').removeClass('bg_animation');
  });
  
  
  $('._dar').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/dar.jpg)')
  $('.bg-view').css('backgroundImage','url(images/menu_bg/dar.jpg)')
  $('.overlay_bg').addClass('bg_animation');
  });
  $('._dar').mouseout(function(event) {
    $('.overlay_bg').removeClass('bg_animation');
  });

}


function pointer() {
  $("body,html").mousemove(function (e) {
    $(".cursor").css({ top: e.pageY - 4, left: e.pageX - 5 });
  });
  $("body,html").click(function () {
    $(".cursor").addClass("expand");
    setTimeout(function () {
      $(".cursor").removeClass("expand");
    }, 500);
  });
}

window.addEventListener("scroll", function(e) {
  // const target = document.querySelector('.scroll');
  // const target1 = document.querySelector('.scroll1');
  // const imageView = document.querySelector('.anims');
  var scrolled = window.pageYOffset;
  var rate = scrolled * -0.500;
  var rate1 = scrolled * -0.500;
  var imageViewRate = scrolled * -0.500;
  
  // target.style.transform = 'translate3d(0px,'+rate+'px,0px)';
  // target1.style.transform = 'translate3d(-50%,'+rate1+'px,0px)';
  // imageView.style.transform = 'translate(0px'+imageViewRate+'px)';
});





