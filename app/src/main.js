/* async function getData() {
  try {
    const response = await fetch(`https://www.freetogame.com/api/games`);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.name;
    }
  } catch (error) {
    console.error(error);
  }
}
getData();
 */

const URL = "https://official-joke-api.appspot.com/random_joke";

async function getData(URL) {
  const response = await fetch(URL);
  console.log(response);
  /* try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.content);
  } catch (error) {
    console.log(error);
  } */
}
getData(URL);
