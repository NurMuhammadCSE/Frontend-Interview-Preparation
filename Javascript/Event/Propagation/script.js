const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

// Event Capturing -> Trickling

// parent.addEventListener("click", listener, {
//   capture: true,
// });

// form.addEventListener("click", listener, {
//   capture: true,
// });

// button.addEventListener("click", listener, {
//   capture: true,
// });

parent.addEventListener("click", listener);

form.addEventListener("click", listener, true);
// form.addEventListener("click", listener, { capture: true });

button.addEventListener("click", listener);

function listener(event) {
  console.log(this.tagName);
  //   console.log("click");
  //   console.log(event.target)
    // console.log(event.currentTarget)
  //   console.log(this);
}
