//OG CODE

/* const APIURL = "https://api.jikan.moe/v4/anime?q=pokemon";
async function getData(APIURL) {
  try {
    const response = await fetch(APIURL);
    const data = await response.json(); //makes data into JSON object
    for (let i = 0; i < data.data.length; i++) {
      console.log(data.data[i].title);

      const titles = data.data[i].title;
      document.getElementById("movielist").insertAdjacentHTML(titles);
    }
  } catch (error) {
    console.log(error);
  }
}
getData(APIURL); */

const APIURL = "https://api.jikan.moe/v4/anime?q=pokemon";

async function getData(APIURL) {
  try {
    const response = await fetch(APIURL);
    const data = await response.json();

    const movielist = document.getElementById("movielist");

    data.data.forEach((item) => {
      movielist.insertAdjacentHTML(
        "beforeend",
        `<div class="bg-amber-200">
        <p>${item.title}</p>
        <img src="${item.images.jpg.image_url}"></img>
        </div>`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

getData(APIURL);
