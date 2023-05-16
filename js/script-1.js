// const x = 5;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const isOpen = true;
// const shoulConfirm = false;

// console.log('Ціна:', totalPrice);

// const x = 5;
// x = 10;
// помилка

// let x = 5;
// x = 10;
// x = 20;
// console.log(x);
// добре- let дозволяє переприділяти значення змінної.

// "typeof"

// const type = typeof 'Chelsy';
//     console.log(type);
// виведе - string(строка)

//  const type = typeof 357;
//     console.log(type);
//  виведе- number (число)

// const message = "Хочете поновити підписку";
// const shouldRenew = confirm(message);
// console.log(shouldRenew);

// let quantity = prompt("Введіть кількість товару");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

//

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = 'You picked ${"Droid"}, price per item is ${3500} credits';
// console.log(message);

let pricePerDroid = 800;
let orderedQuantity = 6;
let deliveryFee = 50;
let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
console.log(totalPrice);
const message = `You ordered droids worth" ${totalPrice} credits. Delivery  (${deliveryFee} credits) is included in total price.`;
console.log(message);
