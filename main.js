'use strict'
// F = C * 9/5 + 32
// Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
let celsius = 15;
let fahrenheit = celsius * 9/5 + 32;
console.log('Температура за Цельсієм - ', celsius, 'Температура за Фаренгейтом - ', fahrenheit);

// Створити змінну для зберігання кількості днів у місяці. Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
const daysInMouth = 30;
const hoursInMouth = daysInMouth * 24;
const minutesInMouth = hoursInMouth * 60;
console.log('Кількисть годин в місяці - ', hoursInMouth, 'Кількість хвилин в місяці - ', minutesInMouth);

// Створити змінні для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.
let health = 100;
let energy = 90;
health -= 20;
energy -= 30;
console.log('Здоров*я - ', health, 'Енергія - ', energy);

// Створити змінну для зберігання суми покупки в магазині. Застосувати знижку в розмірі 10% до цієї суми за допомогою оператора множення та вивести результат в консоль.
let totalPrice = 500;
let discount = 10;
let discountPrice = totalPrice * (1 - discount / 100);
console.log('Ціна зі знижкою: ', discountPrice, 'грн');

// Створити змінну для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль.
const floatNumber = 12.48;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

// Створити змінну для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число та вивести результат в консоль.
const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

// Створити змінну для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.
const intString = "123";
const parsedInt = parseInt(intString);
console.log(parsedInt);

// Створити змінну для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.
let number = 64;
let sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

// Створити змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок та вивести результат в консоль.
const integer = 42;
const stringNumber = "256";

const convertedInt = parseInt(stringNumber);
console.log(convertedInt); //256

const convertedString = integer.toString();
console.log(convertedString); //42