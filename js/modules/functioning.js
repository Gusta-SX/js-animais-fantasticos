export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]')
  const daysWeek = funcionamento.dataset.semana.split(',').map(Number);
  const hourWeek = funcionamento.dataset.horario.split(',').map(Number);
  
  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const hourNow = dateNow .getHours();
  
  const weekOpen = daysWeek.indexOf(dayNow) !== -1;
  const hourOpen = (hourNow >= hourWeek[0] && hourNow < hourWeek[1])
  
  if(weekOpen & hourOpen) {
    funcionamento.classList.add('open')
  }
}

