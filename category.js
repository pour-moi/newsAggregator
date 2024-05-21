window.onload = function () {
  const categoryTitle = document.querySelector(".category-title");

  const urlParams = new URLSearchParams(window.location.search);

  let category = urlParams.get("category");

  categoryTitle.textContent = category + " News";
};
