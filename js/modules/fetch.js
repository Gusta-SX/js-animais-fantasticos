import NumberAnime from "./number-animation";

export default function fetchAnimals(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div
  };

  const numerosGrid = document.querySelector(target)
  function preencherAnimals(ani) {
    const divAnimal = createAnimal(ani)
    numerosGrid.appendChild(divAnimal)
  }

  function animaNumberAnimal() {
    const animaNumber = new NumberAnime('[data-numero]', '.numeros', 'ativo');
    animaNumber.init();
  }

  async function createAnimals() {
    try {
      const animalsRes = await fetch(url);
      const animaisJson = await animalsRes.json();

      animaisJson.forEach(ani => preencherAnimals(ani));
      animaNumberAnimal();
    } catch (error) {
      console.log(error)
    }
  };

  return createAnimals();
}

