$(document).ready(function(){
  $("#check").click(function(){
    setTimeout(function () {
      // $("#Movie").toggle();
      $("#footer").toggle();
      $("#cast-content2").toggle();

    }, 100);
  });

  $("#ToggleBox").click(function(){
    setTimeout(function () {
      // $("#Movie").toggle();
      // $("hacker-confidential").css("display", "none");
      $("#card-container").toggle();
      // $("hacker-confidential").toggle();
      $("#hacker").toggle();


      // $('#card-container').css("display", "block");

    }, 100);
  });



});











// window.addEventListener("DOMContentLoaded", function() {
// 	console.log("heloooo");

// let popCast = document.getElementById("confidential");
// popCast.addEventListener('click', () => {
//     console.log("button is clicked");

// 	});
// });
