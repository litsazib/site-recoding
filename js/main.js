
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
});


function changeNavBG() {
  
  $('._home').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/home.jpg)')
  });
  
  $('._concept').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/concept.jpg)')
  });
  
  $('._rooms').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/rooms.jpg)')
  });
  
  $('._access').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/access.jpg)')
  });
  
  $('._cafe').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/cafe.jpg)')
  });
  
  $('._gallery').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/gallery.jpg)')
  });
  
  $('._kitchen').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/kitchen.jpg)')
  });
  

  
  $('._dar').mouseover(function(event) {
  $('.overlay_bg').css('backgroundImage','url(images/menu_bg/dar.jpg)')
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





