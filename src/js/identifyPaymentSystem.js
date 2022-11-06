export default function identifyPaymentSystem(cardNumber) {
  if (cardNumber[0] === '2') {
    return 'mir';
  }
  if (cardNumber[0] === '4') {
    return 'visa';
  }
  if (cardNumber[0] === '5') {
    return 'mastercard';
  }
  if (cardNumber.slice(0, 2) === '34' || cardNumber.slice(0, 2) === '37') {
    return 'americanexpress';
  }
  if (cardNumber.slice(0, 2) === '31' || cardNumber.slice(0, 2) === '35' || cardNumber.slice(0, 2) === '36') {
    return 'jcb';
  }
  if (cardNumber.slice(0, 2) === '62') {
    return 'unionpay';
  }

  return undefined;
}
