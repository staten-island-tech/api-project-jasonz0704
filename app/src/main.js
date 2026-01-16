const APIURL = "https://api.jikan.moe/v4/anime?q=pokemon";

let pokemonmovies = []; //store it in an array

async function getData(APIURL) {
  try {
    const response = await fetch(APIURL);
    const data = await response.json();

    pokemonmovies = data.data;
    displaycards(pokemonmovies);
  } catch (error) {
    errorlogging(error);
  }
}
getData(APIURL);

//displaying cards function
function displaycards(list) {
  const movielist = document.getElementById("movielist");
  movielist.innerHTML = "";

  list.forEach((item) => {
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
}

//errorlogging function
function errorlogging(error) {
  console.log(error);
  document.getElementById("errorlog").innerHTML = `
    <div class="text-red-500 text-center>
    <p class="font-bold text-2xl">Pretty sure something went wrong</p>
    <p class="text-3xl">${error.message}</p></div>`;
}

//searching
document.getElementById("search").addEventListener("input", (e) => {
  const searcheditem = e.target.value.toLowerCase();

  const filtereditems = pokemonmovies.filter((item) =>
    item.title.toLowerCase().includes(searcheditem)
  );

  displaycards(filtereditems);
});
