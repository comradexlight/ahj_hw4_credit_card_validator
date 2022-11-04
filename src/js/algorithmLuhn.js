// function getArrayOfNumbersFromNumber(cardNumber) {
//   let cardNumberArray = [];
//   while (cardNumber) {
//     const lastNumber = cardNumber % 10
//     cardNumberArray.unshift(lastNumber);
//     cardNumber = (cardNumber - lastNumber) / 10;
//   };
//   return cardNumberArray;
// }

function algorithmLuhn(cardNumber) {
  if (/[^0-9-\s]+/.test(cardNumber)) {
    return false;
  }
  let checksum = 0;
  const numbers = cardNumber.split('').map(Number);
  for (const [index, num] of numbers.entries()) {
     if (index % 2 === 0) {
      let buffer = num * 2;
      buffer > 9 ? checksum += buffer - 9 : checksum += buffer;
    }
    else {
      checksum += num;
    }
  }
  return checksum % 10 === 0 ? true : false;
} 


console.log(algorithmLuhn())
