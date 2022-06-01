var acc = document.querySelectorAll(".accordion");

for (let i = 0; i < acc.length; i++) {
  const element = acc[i];

  element.addEventListener("click", function () {
    this.classList.toggle("active");
    var item = this.nextElementSibling;
    if (item.style.display === "block") {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", () => {
//     console.log(acc[i]);
//   });
// }
