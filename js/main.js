// document.getElementById("demo").addEventListener("mouseover", mouseOver);
// document.getElementById("demo").addEventListener("mouseout", mouseOut);
// 
// function mouseOver() {
//   // document.getElementById("demo").style.color = "red";
//   var x = document.getElementsByClassName("w__book-now");
//   x.classList.add("mystyle");
//   console.log('mouseOver');
// }
// 
// function mouseOut() {
//   // document.getElementById("demo").style.color = "black";
//   var x = document.getElementsByClassName("w__book-now");
//   x.classList.add("mouseOut");
// }
// 
// 
// console.log('asdfasdf');

$(document).ready(function(){
  $("#demo").mouseover(function(){
    $(".w__book-now").css("transform", "translateY(-100%)");
    console.log('over');
  });
  $("#demo").mouseout(function(){
      $(".w__book-now").css("transform", "translateY(0%)");
    console.log('out');
  });
});

