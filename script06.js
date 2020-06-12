'use strict'

let isNumber = function (z) {
    return !isNaN(parseFloat(z)) && isFinite(z);
}

let secret = function randomSelect() {    
    return Math.floor(Math.random() * 100);
}


let liv = 10;

function guessTheNumber() {
    
    let secretNum = secret();  
    console.log('secretNum: ', secretNum);
        
    let ansverNum = function () {
        let num1 = prompt('Угадай число от 1 до 100');

        if (num1) {
            if (!isNumber(num1)) {
                alert('Это не число, снова повторите попытку');
                return ansverNum();
            }

            let num = parseInt(num1);
            
            if (num < secretNum) {
                alert('Число меньше загаданного');
                return ansverNum();
                // return
            }
            if (num > secretNum) {
                alert('Число больше загаданного');
                return ansverNum();;
                // return
            }
            if (num === secretNum) {
                alert('Вы угадали, это число: ' + secretNum);
                return
            }
        } else {
            alert('Конец');
        }
    }
    ansverNum()    
}
guessTheNumber();
