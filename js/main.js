
$(document).ready(function(){
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
    $(".cursor").css({ top: e.pageY - 10, left: e.pageX - 10 });
  });
  $("body,html").click(function () {
    $(".cursor").addClass("expand");
    setTimeout(function () {
      $(".cursor").removeClass("expand");
    }, 500);
  });
}

