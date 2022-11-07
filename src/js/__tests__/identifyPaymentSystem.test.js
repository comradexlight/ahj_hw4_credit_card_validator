import identifyPaymentSystem from '../identifyPaymentSystem';

test.each([
  ['4556096969656006', 'visa'],
  ['5539112511588784', 'mastercard'],
  ['3589513220926724', 'jcb'],
  ['349239676229796', 'americanexpress'],
  ['6214836468343138', 'unionpay'],
  ['2203302937307024', 'mir'],
])('Positive testing of the identifyPaymentSystem function with %s cardNumber and %s paymentSystem', (cardNumber, paymentSystem) => {
  expect(identifyPaymentSystem(cardNumber)).toBe(paymentSystem);
});
