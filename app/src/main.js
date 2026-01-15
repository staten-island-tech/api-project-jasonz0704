const APIURL = "https://api.jikan.moe/v4/anime?q=pokemon";

async function getData(APIURL) {
  try {
    const response = await fetch(APIURL);
    const data = await response.json();

    const movielist = document.getElementById("movielist");

    data.data.forEach((item) => {
      movielist.insertAdjacentHTML(
        "beforeend",
        `<div id="card" class="bg-blue-400 m-6 flex items-center p-6 flex-col w-72 h-auto">
        <p class="font-bold text-2xl p-2 text-center h-24">${item.title}</p>
        <img class="p-4 h-96"src="${item.images.jpg.image_url}">
        <p>Type: ${item.type}</p>
        <p>Rating: ${item.score} / 10</p>
        <p>Started Airing: ${item.aired.prop.from.day} / ${item.aired.prop.from.month} / ${item.aired.prop.from.year}</p>
        </div>`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

getData(APIURL);
