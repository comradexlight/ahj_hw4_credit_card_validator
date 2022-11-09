import './css/style.css';
import ValidatorWidget from './js/validatorWidget';
import '../licenses.txt';

document.addEventListener('DOMContentLoaded', () => {
  new ValidatorWidget('.valid-widget');
});
