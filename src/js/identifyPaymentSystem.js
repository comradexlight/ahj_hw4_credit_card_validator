export default function identifyPaymentSystem(cardNumber) {
  const issuerIdentificationNumber = {
    2200: 'mir',
    2201: 'mir',
    2202: 'mir',
    2203: 'mir',
    2204: 'mir',
    31: 'jcb',
    34: 'americanexpress',
    35: 'jcb',
    37: 'americanexpress',
    4: 'visa',
    51: 'mastercard',
    52: 'mastercard',
    53: 'mastercard',
    54: 'mastercard',
    55: 'mastercard',
    62: 'unionpay',
  };

  let paymentSystem;

  for (const iin in issuerIdentificationNumber) {
    if (cardNumber.startsWith(iin)) {
      paymentSystem = issuerIdentificationNumber[iin];
    }
  }

  return paymentSystem;
}
