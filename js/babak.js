let age = 25; // Змініть на ваш вік
console.log("Вік:", age);


let name = "Олександр"; // Змініть на своє ім'я
console.log("Ім'я:", name);


let isStudent = true; // Змініть на false, якщо не студент
console.log("Студент:", isStudent);


let myString = "Життя прекрасне, коли є мрія."; // Улюблена цитата
console.log("Улюблена цитата:", myString);


let myNumber = 42; // Початкове значення
myNumber += 10;
console.log("Число після додавання:", myNumber);


let myNull = null;
console.log("Значення myNull:", myNull);


let userName = prompt("Введіть своє ім'я:");
if (userName) {
  alert(`Привіт, ${userName}!`);
}


let confirmation = confirm("Чи підтверджуєте ви цю дію?");
if (confirmation) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}


alert("Увага! Ця дія може бути небезпечною.");
let dangerConfirmation = confirm("Ви впевнені, що хочете продовжити?");
if (dangerConfirmation) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}
