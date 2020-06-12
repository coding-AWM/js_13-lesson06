'use strict'

// let num0 = 58; //должно храниться в замыкании
let isNumber = function (z) {
    return !isNaN(parseFloat(z)) && isFinite(z);
}
let liv = 10;

function guessTheNumber(num) {
    // let num1 = +prompt('Угадай число от 1 до 100');  
    let num1 = prompt('Угадай число от 1 до 100');
    // checkLiv();
    let num0 = num;

    if (num1) {
        if (!isNumber(num1)) {
            alert('Это не число, снова повторите попытку');
            return guessTheNumber();
        }

        let num = parseInt(num1);

        if (num < num0) {
            alert('Число меньше загаданного');
            return guessTheNumber();
            // return
        }
        if (num > num0) {
            alert('Число больше загаданного');
            return guessTheNumber();;
            // return
        }
        if (num === num0) {
            alert('Вы угадали, это число: ' + num0);
            // return
        }
    } else {
        alert('Конец');
    }
}
guessTheNumber(52);

// let checkLiv = function () {
//     liv--;
//     console.log('liv: ', liv);
// }

// let endGame = function () {
//     alert('Игра окончена')
// }

// endGame();
// checkLiv();


// let a = prompt('вопрос');
// if (a) {
//     console.log('Да');
// } else {
//     console.log('нет');
// }