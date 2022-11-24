"use strict";

let money = Number(prompt("Ваш бюджет на месяц?", ''));
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        article1: prompt("Введите обязательную статью расходов в этом месяце", ''),
        cost1: Number(prompt("Во сколько обойдется?", '')),
        article2: prompt("Введите обязательную статью расходов в этом месяце", ''),
        cost2: Number(prompt("Во сколько обойдется?", ''))
    },
    optionalExpenses : {},
    income: [],
    savings: false
};

console.log(appData.expenses.article1 + ' = ' + appData.expenses.cost1 + '\n'
            + appData.expenses.article2 + ' = ' + appData.expenses.cost2);
alert(Math.round(appData.budget / 30));
