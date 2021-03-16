export function doSomething() {
  console.log("Put some code in here!");
  window.onscroll = stickyFunction;

  var container = document.getElementById("main-menu-container");
  var sticky = container.offsetTop;

  function stickyFunction() {
    console.log("sticky");
    if (window.pageYOffset > sticky) {
      container.classList.add("sticky");
      // if (TopBanner.showing = true)
    } else {
      container.classList.remove("sticky");
    }
  }

  const buttonHTML = document.getElementById("mturk-top-banner-inner-span");
  buttonHTML.style.display = "flex";
  buttonHTML.style.flexDirection = "row-reverse";

  const text = document.createElement("p");
  text.innerText = "Show/Hide Task Pane";
  text.style.lineHeight = "30px";
  text.style.marginRight = "1rem";

  buttonHTML.appendChild(text);

  // const button = document.getElementById("mturk-top-banner-arrow");

  // button.addEventListener("click", function () {
  //   const wholePage = document.getElementById("wrapper");
  //   console.log("in here");
  //   console.log({ wholePage });
  //   wholePage.style.top = "300px";
  // });

  // function pushDown() {
  //   if (TopBanner.showing = true) {
  //     window.pageYOffset
  //   }
  // }
}
