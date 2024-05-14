for (let i = 0; i < 7; i++) {
  const trendingNews = document.createElement("div");
  const trendingNewsImage = document.createElement("img");
  const titleAndDescDiv = document.createElement("div");
  const trendTitle = document.createElement("h5");
  const trendDescription = document.createElement("p");

  trendTitle.textContent = "Title";
  trendingNews.classList.add("trendingNews");
  document.querySelector("#trendingNewsContainer").appendChild(trendingNews);

  trendingNewsImage.classList.add("trending-news__image");
  trendTitle.classList.add("trendingNews-title");
  trendDescription.classList.add("trendingNews-description");

  trendingNews.append(trendingNewsImage, titleAndDescDiv);
  titleAndDescDiv.append(trendTitle, trendDescription);

  document.querySelector("#trendingNewsContainer").appendChild(trendingNews);
}

for (let i = 0; i < 5; i++) {
  const breakingNewsContainer = document.querySelector(
    "#breakingNewsContainer"
  );
  const breakingNews = document.createElement("div");
  const breakingNewsImage = document.createElement("img");
  const breakingNewsTitleDiv = document.createElement("div");
  const breakingNewsTitle = document.createElement("h5");
  breakingNewsTitle.textContent = "Title";
  breakingNewsTitle.classList.add("breakingNewsTitle");

  breakingNews.classList.add("breakingNews");
  breakingNewsContainer.appendChild(breakingNews);
  breakingNews.appendChild(breakingNewsImage);
  breakingNews.appendChild(breakingNewsTitleDiv);
  breakingNewsTitleDiv.appendChild(breakingNewsTitle);
  breakingNewsImage.classList.add("breaking-news__image");
}

const headerNews = document.querySelector(".headingImage");
const trendingNews = document.querySelector(".trending-news__image");
const trendingNewsCatagories = document.querySelector(".trendingNews");
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=f9bce01001494f7dad469d0aeafbca16";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    headerNews.setAttribute("src", data.articles[1].urlToImage);
  })
  .catch((error) => console.error("Error:", error));

// for (let i = 0; i < 7; i++) {
//   var divClone = trendingNewsCatagories.cloneNode(true);

//   document.body.appendChild(divClone);
// }

const NewsAPI =
  "https://newsapi.org/v2/everything?sources=associated-press&apiKey=f9bce01001494f7dad469d0aeafbca16";

const allTrendingNews = document.querySelectorAll(".trendingNews");

fetch(NewsAPI)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < allTrendingNews.length; i++) {
      const singleTrendingNews = allTrendingNews[i].querySelector(
        ".trending-news__image"
      );
      const TrendingNews = allTrendingNews[i].querySelector(".trendingNews");
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

fetch(url)
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
