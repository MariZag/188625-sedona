var link = document.querySelector(".btn-search-popup");
var popup = document.querySelector(".search-form");

link.addEventListener("click",
  function (event) {
    event.preventDefault();
    popup.classList.toggle("search-form-show");
  });
