const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.matches("li")) {
    if (e.target.innerText === "জাভাস্ক্রিপ্ট") {
      e.target.style.backgroundColor = "yellow";
    } else if (e.target.innerText === "C/C++") {
      e.target.style.backgroundColor = "blue";
    } else {
      e.target.style.backgroundColor = "purple";
    }
  }
});

function addElement() {
  const newElement = document.createElement("li");
  newElement.textContent = "C/C++";
  list.appendChild(newElement);
}
