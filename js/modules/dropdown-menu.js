import outsideClick from "./outsideclick.js";

export default function initDropdown() {
  function handleCLick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo')
    })
  }

  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((evento) => {
      menu.addEventListener(evento, handleCLick)
    })
  })
}


