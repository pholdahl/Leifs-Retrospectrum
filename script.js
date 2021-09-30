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