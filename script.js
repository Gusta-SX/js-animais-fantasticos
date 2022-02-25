const activeClass = 'ativo';
function initTabNav() {
  const tabmenu = document.querySelectorAll('.js-tabmenu li');
  const tabcontent = document.querySelectorAll('.js-tabcontent section');
  if(tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add(activeClass)

    function ativeTab(index) {
      tabcontent.forEach((section) => {
        section.classList.remove(activeClass);
      })
      tabcontent[index].classList.add(activeClass);
    }

    tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        ativeTab(index)
      })
    })
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)
    function activeAccordion() {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }
    accordionList.forEach((title) => {
      title.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion();

function scrollSuave() {
  const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]')
  function scrollSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    const top = section.offsetTop
    window.scrollTo({
      top: top,
      behavior: 'smooth',
    });
  }
  linksInterno.forEach((link) => {
    link.addEventListener('click', scrollSection)
  })
}
scrollSuave();

function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const windowUser = window.innerHeight * 0.5;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowUser) < 0;
      if(isSectionVisible) {
        section.classList.add('ativo');
      } else {
        section.classList.remove('ativo');

      }
    })
  }
  animaScroll();
  window.addEventListener('scroll', animaScroll);
}

initAnimationScroll();