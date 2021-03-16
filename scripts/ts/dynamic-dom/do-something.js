export function doSomething() {
  console.log("Put some code in here!");
  window.onscroll = stickyFunction;

  var container = document.getElementById("main-menu-container");
  var sticky = container.offsetTop;

  function stickyFunction() {
    console.log("sticky");
    if (window.pageYOffset > sticky) {
      container.classList.add("sticky");
    } else {
      container.classList.remove("sticky");
    }
  }
}
