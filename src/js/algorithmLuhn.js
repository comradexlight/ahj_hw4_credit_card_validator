export default function algorithmLuhn(cardNumber) {
  if (/[^0-9-\s]+/.test(cardNumber)) {
    return false;
  }
  let checksum = 0;
  let isEven = false;

  for (let n = cardNumber.length - 1; n >= 0; n -= 1) {
    let number = parseInt(cardNumber.charAt(n), 10);

    if (isEven) {
      number *= 2;
      if (number > 9) {
        number -= 9;
      }
    }
    checksum += number;
    isEven = !isEven;
  }

  return (checksum % 10) === 0;
}
