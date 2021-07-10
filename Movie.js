$(document).ready(function(){
  $("#check").click(function(){
    setTimeout(function () {
      $("#Movie").toggle();
      $("#footer").toggle();

    }, 100);
  });
});
