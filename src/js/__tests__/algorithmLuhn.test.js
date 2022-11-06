import algorithmLuhn from '../algorithmLuhn';

test.each([
  '4539801354046412',
  '6011794094864388',
  '3535240326920709',
  '347157902757483',
  '4917179440210595',
])('Positive testing of the algorithmLuhn function', (cardNumber) => {
  expect(algorithmLuhn(cardNumber)).toBeTruthy();
});

test.each([
  '34715790275748',
  '601179409486488',
  '353524032690709',
  '34715790275743',
  '49171794402105aa95',
])('Negative testing of the algorithmLuhn function', (cardNumber) => {
  expect(algorithmLuhn(cardNumber)).toBeFalsy();
});
