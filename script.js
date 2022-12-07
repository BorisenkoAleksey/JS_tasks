"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpanses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = +prompt("Во сколько обойдется?", '');
        
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
                && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                console.log('Bad result');
                i--;
            }        
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay >= 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpanses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpanse = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = questionOptExpanse;
            console.log(i + ':' + appData.optionalExpenses[i]); 
        }
    },
    chooseIncome: function() {
        while (true) {
            let items = prompt('Что принесет дополнительный доход?', '');
            if (typeof items === 'string' && items != null && items != '') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще? ', ''));
                if (appData.income[appData.income.length-1] == '' || 
                    appData.income[appData.income.length-1] == null) {
                    appData.income.pop();
                }
                appData.income.sort();
                let message = '';
                appData.income.forEach((element, index) => {
                    message += ++index + ': ' + element + '\n';
                })
                alert ('Способы доп. заработка:\n\n' + message);
                break;
            } else {
                console.log('Bad result');
            }
        }
    }
};

console.log('Наша программа включает в себя данные: \n');
for (let index in appData) {
    console.log(index + ': ' + appData[index]);
}
