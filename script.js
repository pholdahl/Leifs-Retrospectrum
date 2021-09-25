document.getElementById("btn1").onClick = toggleHide()

function toggleHide() {
  document.getElementById("collapsible").classList.toggle("ascii");
  document.getElementById("bildeAvMeg").classList.toggle("hide");
}