const headerNews = document.querySelector(".headingImage");
const trendingNews = document.querySelector(".trending-news__image");
const trendingNewsCatagories = document.querySelector(".trendingNews");
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=f9bce01001494f7dad469d0aeafbca16";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    headerNews.setAttribute("src", data.articles[8].urlToImage);
  })
  .catch((error) => console.error("Error:", error));

// for (let i = 0; i < 7; i++) {
//   var divClone = trendingNewsCatagories.cloneNode(true);

//   document.body.appendChild(divClone);
// }

const NewsAPI =
  "https://newsapi.org/v2/everything?sources=associated-press&apiKey=f9bce01001494f7dad469d0aeafbca16";

const all = document.querySelectorAll(".trendingNews");

fetch(NewsAPI)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < all.length; i++) {
      const singletrendingNews = all[i].querySelector(".trending-news__image");
      const singlTrendingNewsTitle = all[i].querySelector(
        ".trendingNews-title"
      );
      const singlTrendingNewsDescription = all[i].querySelector(
        ".trendingNews-description"
      );
      singletrendingNews.setAttribute("src", data.articles[i].urlToImage);
      singlTrendingNewsTitle.textContent = data.articles[i].title;
      singlTrendingNewsDescription.textContent = data.articles[i].description;
    }
  })
  .catch((error) => console.error("Error:", error));

const alll = document.querySelectorAll(".breakingNews");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < alll.length; i++) {
      const breakingNewsImage = alll[i].querySelector(".breaking-news__image");
      const breakingNewsTitle = alll[i].querySelector(".breakingNewsTitle");

      breakingNewsImage.setAttribute("src", data.articles[i].urlToImage);
      breakingNewsTitle.textContent = data.articles[i].title;
    }
  })
  .catch((error) => console.error("Error:", error));

const sportsAll = document.querySelectorAll(".sportPage");
const sportURL =
  "https://newsapi.org/v2/everything?sources=espn&apiKey=f9bce01001494f7dad469d0aeafbca16";
fetch(sportURL)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < sportsAll.length; i++) {
      const sportsImage = sportsAll[i].querySelector(".sportNews-image");
      sportsImage.setAttribute("src", data.articles[i].urlToImage);
    }
  });
