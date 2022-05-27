export default class Modal {
  constructor(open, close, container) {
    this.openButton = document.querySelector(open);
    this.closeButton = document.querySelector(close);
    this.containerModal = document.querySelector(container);
    this.activeClass = 'ativo';

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.offModal = this.offModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle(this.activeClass);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  offModal(event) {
    if(event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  addModalEvent() {
    this.openButton.addEventListener('click', this.eventToggleModal);
    this.closeButton.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.offModal);
  }

  init() {
    if(this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvent();
    }
    return this
  }
}

