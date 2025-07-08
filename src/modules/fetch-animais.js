import NumberAnimation from "./number-animation.js";

export default function fetchAnimais(url, target) {
  const containerNumber = document.querySelector(target);

  async function createAnimals() {
    try {
      const data = await fetch(url);
      const jsonData = await data.json();

      jsonData.forEach(element => {
        animalAggregate(element);
      });

      numberAnimation();
    } catch (error) {
      console.log(error);
    }
  }

  function numberAnimation() {
    const animateNumber = new NumberAnimation(
      "[data-numero]",
      ".numeros",
      "active"
    );

    return animateNumber.init();
  }

  function animalAggregate(animal) {
    const divAnimal = createOne(animal);
    containerNumber.appendChild(divAnimal);
  }

  function createOne(animal) {
    const div = document.createElement("div");
    div.classList.add("animais-numeros");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  return createAnimals();
}
