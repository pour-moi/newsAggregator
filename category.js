window.onload = function () {
  const categoryTitle = document.querySelector(".category-title");
  const urlParams = new URLSearchParams(window.location.search);
  let category = urlParams.get("category");

  categoryTitle.textContent = category + " News";

  for (let i = 0; i < 100; i++) {
    const categoryDiv = document.querySelector(".category-container");
    const categoryInfo = document.createElement("div");
    const categoryImg = document.createElement("img");
    const categoryNewsTitle = document.createElement("h4");
    const categoryNewsContent = document.createElement("p");
    categoryDiv.appendChild(categoryInfo);
    categoryInfo.append(categoryImg, categoryNewsTitle, categoryNewsContent);

    categoryInfo.classList.add("category-news");
    categoryNewsTitle.classList.add("category-news-title");
    categoryNewsContent.classList.add("category-news-content");
    categoryImg.classList.add("category-image");
  }

  let source;
  switch (category) {
    case "Sport":
      source = "espn";
      break;
    case "Bussinnes":
      source = "bloomberg";
      break;
    case "Technology":
      source = "techcrunch";
      break;
    case "Entertainment":
      source = "nbc-news";
      break;
    case "Politics":
      source = "espn";
      break;
  }

  fetchNews(source);
};

function fetchNews(source) {
  const url = `https://newsapi.org/v2/everything?sources=${source}&apiKey=f9bce01001494f7dad469d0aeafbca16`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const allCategoryNews = document.querySelectorAll(".category-news");

      for (let i = 0; i < allCategoryNews.length; i++) {
        const categoryImage =
          allCategoryNews[i].querySelector(".category-image");
        const categoryNewsTitle = allCategoryNews[i].querySelector(
          ".category-news-title"
        );
        const categoryNewsContent = allCategoryNews[i].querySelector(
          ".category-news-content"
        );

        categoryImage.setAttribute("src", data.articles[i].urlToImage);
        categoryNewsTitle.textContent = data.articles[i].title;
        categoryNewsContent.textContent = data.articles[i].content.substring(
          0,
          200
        );
        allCategoryNews[i].addEventListener("click", function () {
          window.location.href = data.articles[i].url;
        });
      }
    });
}
