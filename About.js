$(document).ready(function(){
  $("#check").click(function(){
    setTimeout(function () {
      $("#Content").toggle();
      $("#footer").toggle();

    }, 100);
  });
});
