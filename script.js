let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];
let vid = document.getElementsByClassName("vid")[0];
let body = document.getElementsByClassName("body")[0];

taskbar.addEventListener("click", () => {
  console.log("Click");

  if (startmenu.style.bottom == "50px") {
    startmenu.style.bottom = "-655px";
  } else {
    startmenu.style.bottom = "50px";
  }
});
// function doAdelay() {
//   setTimeout(function () {
//     vid.style.display = "none";
//     document.body.style.background = "black";
//     document.body.style.zIndex = "999";
//   }, 60000);
// }
// doAdelay();
