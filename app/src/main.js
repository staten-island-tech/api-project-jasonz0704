async function getData() {
  try {
    const response = await fetch(`https://www.freetogame.com/api/${games}`);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      data.forEach((card) => console.log(card));
    }
  } catch (error) {
    console.log(error);
  }
}
getData();
