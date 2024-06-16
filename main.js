// for (let i = 0; i < 7; i++) {
//   const trendingNews = document.createElement("div");
//   const trendingNewsImage = document.createElement("img");
//   const titleAndDescDiv = document.createElement("div");
//   const trendTitle = document.createElement("h5");
//   const trendDescription = document.createElement("p");

//   trendTitle.textContent = "Title";
//   trendingNews.classList.add("trendingNews");
//   document.querySelector("#trendingNewsContainer").appendChild(trendingNews);

//   trendingNewsImage.classList.add("trending-news__image");
//   trendTitle.classList.add("trendingNews-title");
//   trendDescription.classList.add("trendingNews-description");

//   trendingNews.append(trendingNewsImage, titleAndDescDiv);
//   titleAndDescDiv.append(trendTitle, trendDescription);
// }

// for (let i = 0; i < 5; i++) {
//   const breakingNewsContainer = document.querySelector(
//     "#breakingNewsContainer"
//   );
//   const breakingNews = document.createElement("div");
//   const breakingNewsImage = document.createElement("img");
//   const breakingNewsTitleDiv = document.createElement("div");
//   const breakingNewsTitle = document.createElement("h5");
//   breakingNewsTitle.textContent = "Title";
//   breakingNewsTitle.classList.add("breakingNewsTitle");
//   breakingNews.classList.add("breakingNews");

//   breakingNewsContainer.appendChild(breakingNews);
//   breakingNews.appendChild(breakingNewsImage);
//   breakingNews.appendChild(breakingNewsTitleDiv);
//   breakingNewsTitleDiv.appendChild(breakingNewsTitle);

//   breakingNewsImage.classList.add("breaking-news__image");
// }

const headerNews = document.querySelector(".headingImage");
const trendingNews = document.querySelector(".trending-news__image");
const trendingNewsCatagories = document.querySelector(".trendingNews");
const url =
  "https://newsapi.org/v2/everything?sources=associated-press&apiKey=07db1280554f4a77b08ddc20766da064";
const headingTitle = document.querySelector(".heading-title-box");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    headerNews.setAttribute("src", data.articles[7].urlToImage);
    headingTitle.textContent =
      data.articles[7].content.substring(0, 199) + "...";
  })
  .catch((error) => console.error("Error:", error));

const NewsAPI =
  "https://newsapi.org/v2/everything?sources=associated-press&apiKey=07db1280554f4a77b08ddc20766da064";

const allTrendingNews = document.querySelectorAll(".trendingNews");

fetch(NewsAPI)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < allTrendingNews.length; i++) {
      const singleTrendingNews = allTrendingNews[i].querySelector(
        ".trending-news__image"
      );

      allTrendingNews[i].addEventListener("click", function () {
        window.location = data.articles[i].url;
      });
      const singleTrendingNewsTitle = allTrendingNews[i].querySelector(
        ".trendingNews-title"
      );
      const singleTrendingNewsDescription = allTrendingNews[i].querySelector(
        ".trendingNews-description"
      );
      singleTrendingNews.setAttribute("src", data.articles[i].urlToImage);
      singleTrendingNewsTitle.textContent = data.articles[i].title;
      singleTrendingNewsDescription.textContent = data.articles[i].description;
    }
  })
  .catch((error) => console.error("Error:", error));

const allBreakingNews = document.querySelectorAll(".breakingNews");
const breakingNewsAPI =
  "https://newsapi.org/v2/everything?sources=fox-news&apiKey=07db1280554f4a77b08ddc20766da064";
fetch(breakingNewsAPI)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < allBreakingNews.length; i++) {
      const breakingNewsImage = allBreakingNews[i].querySelector(
        ".breaking-news__image"
      );
      allBreakingNews[i].addEventListener("click", function () {
        window.location = data.articles[i].url;
      });
      const breakingNewsTitle =
        allBreakingNews[i].querySelector(".breakingNewsTitle");
      const breakingNewsDescription = allBreakingNews[i].querySelector(
        ".breakingNews-description"
      );

      breakingNewsImage.setAttribute("src", data.articles[i].urlToImage);
      breakingNewsTitle.textContent = data.articles[i].title;
      breakingNewsDescription.textContent = data.articles[i].description;
    }
  })
  .catch((error) => console.error("Error:", error));

const categories = document.querySelector("ul");
let category;

categories.addEventListener("click", function (e) {
  e.preventDefault();
  category = e.target.innerHTML;

  window.location.href =
    "./categoryNews.html?category=" + encodeURIComponent(category);
});
