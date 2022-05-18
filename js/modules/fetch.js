import initNumberAnime from './number-animation.js';

export default function initFetch() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div
  };
  
  async function fetchAnimals(url) {
    try {
      const animalsRes = await fetch(url);
      const animaisJson = await animalsRes.json();
      const numerosGrid = document.querySelector('.numeros-grid')
    
      animaisJson.forEach(ani => {
        const divAnimal = createAnimal(ani)
        numerosGrid.appendChild(divAnimal)
      });
      initNumberAnime();
    } catch (error) {
      console.log(error)
    }
  };
  
  fetchAnimals('./animaisapi.json');  
}

