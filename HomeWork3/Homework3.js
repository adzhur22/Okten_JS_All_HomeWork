// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
//     що дорівнює 1, 0, -3

let x = +prompt("введіть значення змінної 'X' ");

if (x === 0) {
    console.log("вірно");
}
else {
    console.log("невірно");
}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої
// четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = +prompt("введіть змінну time в діапазоні від 0 до 59 :")


if (time >= 0 && time <= 14) {
    console.log("Перша чверть");
}
else if (time >= 15 && time <= 29) {
    console.log("Друга чверть");

}
else if (time >= 30 && time <= 44) {
    console.log("Третя чверть");

}
else if (time >= 45 && time <= 59) {
    console.log("Четверта чверть");

} else {
    console.log("Ви ввели щось не так ;)");
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

let day = +prompt("введіть змінну day в діапазоні від 1 до 31 :")

if (day >= 1 && day <= 10) {
    console.log("Перша декада");
}
else if (day >= 11 && day <= 20) {
    console.log("Друга декада");

}
else if (day >= 21 && day <= 31) {
    console.log("Третя декада");
}
else {
    console.log("Ви ввели щось не так ;)");
}



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let day2 = +prompt("введіть порядковий номер дня тижня, щоб побачити заплановані задачі :")

switch (day2) {
    case 1:
        console.log("Дивіться відповідь на сторінці!");
        document.write(`
<div>
<h3>Понеділок</h3>
<ul>
<li>Задача</li>
<li>Задача</li>
<li>Задача</li>
<li>Задача</li>
</ul>
<div>`)
        break;

    case 2:
        console.log("Дивіться відповідь на сторінці!");
        document.write(`
<div>
<h3>Віторок</h3>
<ul>
<li>Задача</li>
<li>Задача</li>
<li>Задача</li>
<li>Задача</li>
</ul>
<div>`)
        break;

    case 3:
        console.log("Дивіться відповідь на сторінці!");
        document.write(`
<div>
<h3>Середа</h3>
<ul>
<li>Задача</li>
<li>Задача</li>
<li>Задача</li>
<li>Задача</li>
</ul>
<div>`)
        break;

    case 4:
        console.log("Дивіться відповідь на сторінці!");
        document.write(`
<div>
<h3>Четвер</h3>
<ul>
<li>Задача</li>
<li>Задача</li>
<li>Задача</li>
<li>Задача</li>
</ul>
<div>`)
        break;

    case 5:
        console.log("Дивіться відповідь на сторінці!");
        document.write(`
<div>
<h3>П'ятниця</h3>
<ul>
<li>Задача</li>
<li>Задача</li>
<li>Задача</li>
<li>Задача</li>
</ul>
<div>`)
        break;

    case 6:
        console.log("Дивіться відповідь на сторінці!");
        document.write(`
<div>
<h3>Субота</h3>
<ul>
<li>Задача</li>
<li>Задача</li>
<li>Задача</li>
<li>Задача</li>
</ul>
<div>`)
        break;
    case 7:
        console.log("Дивіться відповідь на сторінці!");
        document.write(`
<div>
<h3>Неділя</h3>
<ul>
<li>Задача</li>
<li>Задача</li>
<li>Задача</li>
<li>Задача</li>
</ul>
<div>`)
        break;

    default:
        console.log("Дивіться відповідь на сторінці!");
        document.write(`
<div>
<h3>Спробуйте повторно</h3>
<div>`)

}




//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let n1 = +prompt('введіть перше число:')
let n2 = +prompt('введіть друге число:')

if (n1 > n2){
    console.log("Більше перше число!");
}
else if (n1 < n2) {
    console.log("Більше друге число!");
}
else if (n1 === n2) {
    console.log("Числа рівні");
}
else {
    console.log("Мабуть це не числа, або ви щось начудилии)");
}



//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподыбне, тобто кастується до false)

let end = prompt('МОЖЕ БУТИ ЩО ЗАВГОДНО: стрінг, число, undefined, null  і тд включно') || 'default';
console.log(end);