const list = document.getElementById("list");

list.addEventListener("click", (e) => {
    console.dir(e.target)
    if (e.target.matches("li")) {
        if (e.target.innerText === "জাভাস্ক্রিপ্ট") {
            e.target.style.backgroundColor = "yellow";
        } else {
            e.target.style.backgroundColor = "purple";
            e.target.style.color = "white";
        }
    }
});

function addElement() {
    const newElement = document.createElement("li");
    newElement.textContent = "ডট নেট";
    list.appendChild(newElement);
}