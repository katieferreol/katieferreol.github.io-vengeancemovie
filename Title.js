window.addEventListener("load", function() {

  alert ("An Audio will be played in the background. Get your headphones!");


  function myFunction(x) {
    if (x.matches) { // If media query matches
      console.log("Phone")
      setTimeout(function () {
        let map2 = document.getElementById("map2").contentDocument;

        let loc2 = map2.getElementById("button2");
        loc2.addEventListener('click', () => {
          console.log("Play-Video on Phone is clicked");
          location.replace("Movie.html");
        });
      }, 100);
    } else {
      console.log("Laptop")
      let bg = document.getElementById("map");

      let map = document.getElementById("map").contentDocument;

      let loc1 = map.getElementById("button");
      loc1.addEventListener('click', () => {
        console.log("Play-Video is clicked");
        location.replace("Movie.html");
      });
    }
  }

  var x = window.matchMedia("(max-width:952px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
});




// function checkReady() {
//   var svg = document.getElementById("map2");
//   if (svg == null) {
//       console.log("Im in for")
//       setTimeout("checkReady()", 300);
//   }
//   else {
//     console.log("Im in else")
//     let map2 = document.getElementById("map2").contentDocument;
//
//     let loc2 = map2.getElementById("button2");
//     loc2.addEventListener('click', () => {
//       console.log("Play-Video on Phone is clicked");
//       window.open("Movie.html");
//     });
//   }
// }
// setTimeout(checkReady(), 100);
