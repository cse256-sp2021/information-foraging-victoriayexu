import { HTMLLoader } from "../core/utils/html_loader";
import { Accordion } from "./accordion";
import { doSomething } from "./do-something";
import { HTMLContent, itemsToCache } from "./html-imports";
import { Slideshow } from "./slideshow";

// Put all function calls that need to be made on every page load inside the setupAll function body.
export function PutStudentPageLoadOperationsInsideThisStudentBody() {
  // TODO: Put all operations that you want to happen on ever page load in this function.
  // For example you could write: Sticky.setup()
  doSomething();
  // banner sticky stuff
  const banner = document.querySelector("#mturk-top-banner-drop-down-column");
  var header = document.getElementById("main-menu-container");
  console.log(banner);
  if (banner?.classList.contains("none")) {
    header?.classList.remove("banner");
  }

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type == "attributes") {
        if (header?.classList.contains("banner")) {
          header.classList.remove("banner");
          console.log("banner removed");
        }

        if (banner?.classList.contains("display")) {
          header?.classList.add("banner");
          console.log("banner added");
        }
      }
    });
  });
  if (banner != null) {
    observer.observe(banner, {
      attributes: true,
    });
  }
  // end of banner sticky stuff
}

export async function setupAll() {
  await new Promise((r: any) => setTimeout(r, 100));
  console.log("reloading");
  Slideshow.setupAll();
  Accordion.setupAll();
  PutStudentPageLoadOperationsInsideThisStudentBody();
  console.log("reloaded");
}

itemsToCache.forEach((item: HTMLContent) => {
  HTMLLoader.cacheHTML(item.name, item.content);
});
(window as any).HTMLLoader = HTMLLoader;

// sticky navbar

console.log("dynamic-dom loaded");
// Do not touch this line, needed to reinitialize code in the dynamic-dom.ts setupAll function
window.addEventListener("newPageLoad", () => setupAll());
