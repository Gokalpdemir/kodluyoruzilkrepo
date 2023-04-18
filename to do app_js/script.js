let listDOM = document.querySelector("#list");
let inputDOM = document.querySelector("#task");
const alertDOM = document.querySelector("#liveToast");
let removeBtn = ` <div class="icon"><i class="fas fa-times"></i></div>;`;

function uyarıGöster() {
  const uyarıKutusu = document.querySelector(".success");
  const uyarı = new bootstrap.Toast(uyarıKutusu);
  uyarı.show();
}
function uyarıGöster2() {
  const uyarıKutusu = document.querySelector(".error");
  const uyarı = new bootstrap.Toast(uyarıKutusu);
  uyarı.show();
}

function newElement() {
  if (inputDOM.value === "") {
    uyarıGöster2();
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputDOM.value;

    let removeItem = document.createElement("i");
    removeItem.classList.add("fas", "fa-times");

    li.appendChild(removeItem);
    listDOM.appendChild(li);
    inputDOM.value = "";
    uyarıGöster();
  }
}

listDOM.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "I") {
      e.target.parentElement.remove();
    }
  },false);
