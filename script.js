function toggleHide() {
  document.getElementById("adInfoContainer").classList.add("showAdInfo");
  document.getElementById("adInfoContainer").classList.remove("hidden");
  document.getElementById("adInfo2Container").classList.remove("showAdInfo2");
  document.getElementById("adInfo2Container").classList.add("hidden");
  // console.log("working");
}
function toggleHide2() {
  document.getElementById("adInfo2Container").classList.add("showAdInfo2");
  document.getElementById("adInfo2Container").classList.remove("hidden");
  document.getElementById("adInfoContainer").classList.remove("showAdInfo");
  document.getElementById("adInfoContainer").classList.add("hidden");
  // console.log("working");
}