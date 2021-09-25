function toggleHide() {
  document.getElementById("bildeAvMeg").classList.toggle("ascii");
  document.getElementById("creators").classList.remove("sitecreators");
  document.getElementById("creators").classList.add("hidden");
  // document.getElementById("asciiBildeAvMeg").classList.toggle("asciiBildeAvMeg");
}
function toggleHide2() {
  document.getElementById("creators").classList.toggle("sitecreators");
  document.getElementById("bildeAvMeg").classList.remove("ascii");
  document.getElementById("bildeAvMeg").classList.add("hidden");
  // document.getElementById("madeOf").classList.toggle("sitecreators");
}