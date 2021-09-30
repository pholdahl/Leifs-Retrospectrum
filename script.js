function toggleHide() {
  document.getElementById("adInfoContainer").classList.toggle("showAdInfo");
  document.getElementById("adInfo2Container").classList.remove("showAdInfo2");
  document.getElementById("adInfo2Container").classList.add("hidden");
}
function toggleHide2() {
  document.getElementById("adInfo2Container").classList.toggle("showAdInfo2");
  document.getElementById("adInfoContainer").classList.remove("showAdInfo");
  document.getElementById("adInfoContainer").classList.add("hidden");
}

function goToMusic() {
  if (document.getElementById("musicLink").onclick) {
    window.open("https://pholdahl.github.io/Leif_portfolio/portfolio.html","_self")
    }
}


    // document.getElementById("adInfoContainer").classList.toggle("showAdInfo");
    // document.getElementById("adInfo2Container").classList.remove("showAdInfo2");
    // document.getElementById("adInfo2Container").classList.add("hidden");

// window.onload = function() {
//   document.getElementById("my_audio").play();
// }

// document.addEventListener("readystatechange", event => {
//   if (event.target.readyState === "interactive") {


  // $(document).ready(function() {

    // setTimeout(function() {
    //   500;
    // });
    
    // toggleHide();