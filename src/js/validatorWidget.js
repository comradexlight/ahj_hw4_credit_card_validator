import algorithmLuhn from './algorithmLuhn';
import identifyPaymentSystem from './identifyPaymentSystem';
import IconWidget from './iconWidget';

const iconWidget = new IconWidget('.card-list');

export default class ValidatorWidget {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }

    this.onBtnCLick = this.onBtnCLick.bind(this);
    this.onInput = this.onInput.bind(this);

    this._element = element;
    this._validBtn = this._element.querySelector('.valid-btn');
    this._inputNumber = this._element.querySelector('.valid-number');
    this._luhnCheck = this._element.querySelector('.valid-widget-check');
    this._validBtn.addEventListener('click', this.onBtnCLick);
    this._inputNumber.addEventListener('input', this.onInput);
  }

  onBtnCLick(event) {
    event.preventDefault();
    this._luhnCheck.classList.remove('checked');
    this._luhnCheck.classList.remove('unchecked');
    const number = this._inputNumber.value;
    if (number) {
      if (algorithmLuhn(number)) {
        this._luhnCheck.classList.add('checked');
      } else {
        this._luhnCheck.classList.add('unchecked');
      }
    }
  }

  checkCard() {
    if (this._inputNumber.value) {
      const cartNumber = this._inputNumber.value;
      const paymentSystem = identifyPaymentSystem(cartNumber);
      iconWidget.selCardEnable(paymentSystem);
    }
  }

  onInput(event) {
    event.preventDefault();
    iconWidget.setAllCardEnable();

    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    this._timeout = setTimeout(() => this.checkCard(), 350);
  }
}
