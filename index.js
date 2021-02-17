
 function num (x, y) {
    if (y > x) {
        return num(y, x)};

    if (!y) { 
        return x;}
        
    return num(x % y); 
}
    let sum = num(10,25);
    console.log(sum)

/*

function num (x, y) {
        if (y > x) 
        return num(y, x);
        if (!y) return x;
    return num(y, x % y); 
    
}
let sum = num(10,25);
console.log(sum)

let number = 500                             // задача 2.3

for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      console.log( i );
    }
  }


  let num = 30;                               // задача 2.4
let n = 0;

for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) 
        n += i 
  }
  console.log( n );


  let i = 301                                  // задача 2.5
for (; i > 300; i++) {
    if (i % 17 == 0)
    break 
   }
  console.log( i );

 
 
 
 
  let pers = 0.20                                      // Задача 1.4
let tel = 250000
let per = 2

let duratMounth = per * 12

let perMounth = (tel/duratMounth)*pers                 // Процент за 1 месяц

let payPersent = perMounth * duratMounth              // Проценты за весь период 

let yearPerset = perMounth * 12                       // Проценты за год

let allPeriod = tel + perMounth * duratMounth         // Общее количество денежных средств за все года

console.log(payPersent+' Проценты за весь период')
console.log(yearPerset+ ' Выплата за год')
console.log(allPeriod + ' Выплата за все года')





let Byte = 1;                                      // Задача 1.3
let KB = Byte * 1024;
let MB = Math.pow (KB, 2);
let GB = Math.pow (KB, 3);
let per = 95;

console.log(per * KB + ' Byte in KB');
console.log(per * MB + ' Byte in MB');
console.log(per * GB + ' Byte in GB');





let min = 0;                                // Задача 1.2

if (min > 0) {
	console.log('Положительное');
}
if (min == 0) {
	console.log('Ноль');
}
if (min < 0) {
	console.log('Отрицательное');
}




let num = 9;                        // Задача 1.1 (1)
if (num == 0) {
    console.log('Ноль');
    }
if (num == 1) {
    console.log('Один');
}
if (num == 2) {
    console.log('Два');
}
if (num == 3) {
    console.log('Три');
}
if (num == 4) {
    console.log('Четыре');
}
if (num == 5) {
    console.log('Пять');
}
if (num == 6) {
    console.log('Шесть');
}
if (num == 7) {
    console.log('Семь');
}
if (num == 8) {
    console.log('Восемь');
}
if (num == 9) {
    console.log('Девять');
} 
if (num > 9) {
    console.log('Совпадений не найдено!');
}

let number = 1123  ;                     // Задача 1.1 (2)
switch(number){
    case 0: console.log('Ноль');
        break ; 
    case 1: console.log('Один');
        break ; 
    case 2: console.log('Два');
        break ; 
    case 3: console.log('Три');
        break ; 
    case 4: console.log('Четыре');
        break ; 
    case 5: console.log('Пять');
        break ; 
    case 6: console.log('Шесть');
        break ; 
    case 7: console.log('Семь');
        break ; 
    case 8: console.log('Восемь');
        break ; 
    case 9: console.log('Девять');
        break ; 
        default : console.log('Совпадений не найдено!');
    };

 
                                        // Задача 1.1 (3)
    var i = 4;                     
var number = ['Ноль','Один','Два','Три','Четыре','Пять','Шесть','Семь','Восемь','Девять',];
console.log(number[i]);

*/