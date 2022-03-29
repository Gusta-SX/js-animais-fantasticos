import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuLst = document.querySelector('[data-menu="list"]');
  const events = ['click', 'touchstart']
    
  if(menuBtn) {
    function openMenu() {
      menuLst.classList.add('active');
      menuBtn.classList.add('active');
      outsideClick(menuLst, events, () => {
        menuLst.classList.remove('active');
        menuBtn.classList.remove('active');
      });
    }
    
    events.forEach((event) => {
      menuBtn.addEventListener(event, openMenu)
    })
  }
}

