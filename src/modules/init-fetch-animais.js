import NumberAnimation from "./number-animation.js";

export default function initFetchAnimais() {
  return fetchAnimais("./animaisapi.json");
}

async function fetchAnimais(url) {
  try {
    const data = await fetch(url);
    const jsonData = await data.json();
    const containerNumber = document.querySelector(".numeros-grid");
    jsonData.forEach(element => {
      const divAnimal = createAnimal(element);
      containerNumber.appendChild(divAnimal);
    });
    const animateNumber = new NumberAnimation(
      "[data-numero]",
      ".numeros",
      "active"
    );

    animateNumber.init();
  } catch (error) {
    console.log(error);
  }
}

function createAnimal(animal) {
  const div = document.createElement("div");
  div.classList.add("animais-numeros");

  div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
  return div;
}
