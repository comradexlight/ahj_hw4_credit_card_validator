export default class IconWidget {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    this._element = element;
    this._cardArray = this._element.querySelectorAll('.card');
  }

  setAllCardDisable() {
    this._cardArray.forEach((card) => card.classList.add('disabled'));
  }

  setAllCardEnable() {
    this._cardArray.forEach((card) => {
      if (card.classList.contains('disabled')) {
        card.classList.remove('disabled');
      }
    });
  }

  selCardEnable(paymentSystem) {
    this._cardArray.forEach((element) => {
      if (!element.classList.contains(paymentSystem)) {
        element.classList.add('disabled');
      }
    });
  }
}
