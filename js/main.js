
$(document).ready(function() {
  pointer();
  $("#demo").mouseover(function(){
    $(".w__book-now").css("transform", "translateY(-100%)");
    console.log('over');
  });
  $("#demo").mouseout(function(){
      $(".w__book-now").css("transform", "translateY(0%)");
    console.log('out');
  });
});


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





