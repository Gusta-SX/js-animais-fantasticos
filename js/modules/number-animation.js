export default function initNumberAnime() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((numero) => {
      const total = numero.innerText;
      const incre = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incre;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 10 * Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  const targetObs = document.querySelector(".numeros");
  observer = new MutationObserver(handleMutation);
  observer.observe(targetObs, { attributes: true });
}
