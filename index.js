

/*  
// задание 5.2
// Написать функцию которая возвращает true/false в зависимости от 
// того - все ли уникальные значения в массиве или есть не уникальные


var arr = [1,2,3,4,5,6,7,8];                      


function uniqObj() {
  let i = 0;
    if (arr[i + 1] == arr[i]) {
      console.log(false);
        return;
    }
    if (arr.length > i) {
      console.log(true);
      return;
  }
  i++
  uniqObj()
}

uniqObj()

// задание 5.1 
// Задан двумерный массив - объединить каждый внутренний массив с 
// верхнем массивом - только по уникальным значениям.
//  Например [1,2,4[8,4,12,],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3],
//   получаем в результате: [1,2,4,8,12,13,29,11,0,5,3,6,7,21]


let mas = [1,2,4,[8,4,12],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3];  

let wholeMas = [].concat.apply([], mas);

console.log(wholeMas);


// задание 4.4
// Задано предложение - подсчитать количество вхождений каждого слова
//  в предложении. Вывести список уникальных слов и напротив каждого
//   слова - сколько раз встретилось



let string = "Привет, мое имя Влад я студент Влад "     
    split = string.split(" "),
    word = {};



    for (let i = 0; i < split.length; i++) {
  if (word[split[i]] === undefined) {
    word[split[i]] = 1;
  } 
    else {
    word[split[i]]++;
  }
}

console.log(word)

//  задание 4.2
// Использовать функцию из предыдущего задания чтобы получить массив 
// из нужного количества значений. Найти процентное соотношение 
// отрицательных, положительных и нулевых элементов массива.

let min = -100;   // макс значение                                     
let max = 100;  // мин.значение
let l = 10;  // длина массива 


let result = [];
for(let i = 0; i < l ; i++){
  result.push(randomMas(min, max))
}



function randomMas(min, max){                                       
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}
console.log(result)



let i = 0
let abovZer = 0;
let lessZer = 0;
let zer = 0;
function persResult(result){
  if(result[i] == 0){
  zer++
  }
  if(result[i] < 0){
    lessZer++
  }
  if(result[i] > 0){
    abovZer++
  }
  i++
  if(i > result.length){
    console.log(abovZer/l*100  , lessZer/l*100, zer/l*100)
    return
  }
  persResult(result)
  

}
persResult(result)


// задание 4.1
// Написать функцию которая генерирует массив случайных значений,
//  таким образом что все элементы результирующего массива являются
//   уникальными. Генерациями происходит в рамках чисел от N до M,
//    где N,M - могут быть как положительные так и отрицательными, и
//     еще одним параметром количество значений которые нужно сгенерировать.
//      Если количество генерируемых значений больше чем чисел в диапазоне - 
//      отдавать пустой массив.

let min = -10;   // макс значение                                       
let max = 100;  // мин.значение
let l = 5;  // длина массива 


let result = [];
for(let i = 0; i < l ; i++){
  result.push(randomMas(min, max))
}
console.log(result)


function randomMas(min, max){
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}


// задание 3.6
// Удалить из массива все столбцы которые не имеют ни одного
//  нулевого элемента и сумма которых положительна - оформить в виде функции
let mas = [1, 2, 3, 4, 0, -1, -3, -5, 3];           
let i = 0;
function masEl(mas){
  if(mas[i] >= 0){
    delete mas[i]
  };
  i++;
  if(i > mas.length){
    console.log(mas);
    return;
    
  };
  masEl(mas);
};
masEl(mas);


// задание 3.5
// Найти номер столбца двумерного массива сумма которого является
//  максимальной (аналогично для строки)

let mas = [
    [12, 2],
    [3, 22],
  ];
   
  let index = 0;
  let sum = 0;
 
   
   
  for(let i = 0; i < mas.length; i++) {
      let newSum = mas[i].reduce((prev, current) => prev + current);
      if (sum <= newSum) {
          sum = newSum;
          index = 1 + i;
      }
  }
   
  console.log('Номер столбца '  + index);



// задание 3.4
// Написать функцию, которая умножает две матрицы
let masOne = [13,15,14,11];                                  
let masTwo = [24,32,5,3];
let sum = 0;


function masElement(){
for(let i=0; i< masOne.length; i++) {
    sum += masOne[i]*masTwo[i];
    }
    return sum;
}
masElement();
console.log(sum);

// задание 3.3
// Написать функцию, которая транспонирует матрицу

let mas = [                                               
    ["1", "1", "1"],
    ["2", "2", "2"],
    ["3", "3", "3"]
  ];
  function transprtMas(mas, masLength){
    let newMas = [];
    for(let i = 0; i < mas.length; i++){
        newMas.push([]);
    };

    for(let i = 0; i < mas.length; i++){
        for(let j = 0; j < masLength; j++){
            newMas[j].push(mas[i][j]);
        };
    };
    console.log(newMas);
    return newMas;
}

transprtMas(mas, mas.length)




//_______________________________________________________________ задание 3.2
// Все скрипты которые используют в своей основе цикл - написать с
//  помощью рекурсивных функций

let i = 1;                                                  // задача 2.3

function num(number){
    i++;
    
    if (number % i == 0) {
    console.log( i );}
    if(i > number){
        return number;
        
    }
    num(number);
    }

    num(500);


    let num = 30;                               // задача 2.4
let n = 0;
let i = 0;
function number(){
 i++;
    if (i % 2 == 0){ 
        n += i ;
  }
  if(i >= num){
  console.log( n )
  return;
  };
  number();
  }

number();





let i = 300;                                            // задача 2.5
function number(){
i++;
    if (i % 17 == 0){
    console.log(i);
    return;
   };

 
  number();
}  

number();









//_______________________________________________________________ задание 3.1
// Все скрипты которые писали в рамках первого и второго задания 
// - оформить в виде функций

 

function string(str){              // задача 2.1

str = str.split('').reverse().join('');

console.log(str)};

string('apple pen');



function number(n){                   // задача 2.2
    var result = 1;
    while(n){
        result *= n--;
    }
    return result;
};
console.log(number(3));



                            // задача 2.3
function num(number){
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      console.log( i );
    }
  }
}
num(500);
  

 function number(num){                            // задача 2.4
let n = 0;

for (let i = 0; i <= num; i++) {
    if (i % 2 == 0);
        n += i;
  }
  console.log( n );
}  
number(10);


function number(i){                           // задача 2.5
for (; i > 300; i++) {
    if (i % 17 == 0);
    break;
   }
  console.log( i );
}  
number(301);

 
 
function bank(tel){
let pers = 0.20;                                     // Задача 1.4
let per = 2;

let duratMounth = per * 12;

let perMounth = (tel/duratMounth)*pers;                 // Процент за 1 месяц

let payPersent = perMounth * duratMounth;              // Проценты за весь период 

let yearPerset = perMounth * 12;                       // Проценты за год

let allPeriod = tel + perMounth * duratMounth;         // Общее количество денежных средств за все года

console.log(payPersent+' Проценты за весь период');
console.log(yearPerset+ ' Выплата за год');
console.log(allPeriod + ' Выплата за все года');
}
bank(250000);




function memory(per){
let Byte = 1;                                             // Задача 1.3
let KB = Byte * 1024;
let MB = Math.pow (KB, 2);
let GB = Math.pow (KB, 3);

console.log(per * KB + ' Byte in KB');
console.log(per * MB + ' Byte in MB');
console.log(per * GB + ' Byte in GB');
}
memory(90);





function num(min){                                  // Задача 1.2

if (min > 0) {
	console.log('Положительное');
}
if (min == 0) {
	console.log('Ноль');
}
if (min < 0) {
	console.log('Отрицательное');
}
}
num(0)


function number(num){                          // Задача 1.1 (1)
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
    }      
    number(5)

function num(number){                     // Задача 1.1 (2)
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
};
num(9);

 
                                        // Задача 1.1 (3)
    function num(i){                    
var number = ['Ноль','Один','Два','Три','Четыре','Пять','Шесть','Семь','Восемь','Девять',];
console.log(number[i]);
} 
num(7);

__________________________________________________________________________________________задача 3.1
// задача 2.1
// Переменная содержит в себе строку. Вывести строку в обратном порядке.

var str = 'apple pen';                  

str = str.split('').reverse().join('');

console.log(str);


// задача 2.2
// Переменная содержит в себе число. Написать скрипт который посчитает
//  факториал этого числа.

function number(n){                   
    var result = 1;
    while(n){
        result *= n--;
    }
    return result;
};
console.log(number(3));

// задача 2.3
// Дано число - вывести первые N делителей этого числа нацело.

let number = 500;                        

for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      console.log( i );
    };
  };
  
// задача 2.4
// Найти сумму цифр числа которые кратны двум

  let num = 30;                               
let n = 0;

for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) 
        n += i };
  console.log( n );

// задача 2.5
// Найти минимальное число которое больше 300 и нацело делиться на 17
  let i = 301;                                 
for (; i > 300; i++) {
    if (i % 17 == 0);
    break;
   };
  console.log( i );


 
 // Задача 1.4
// Переменная хранит процент кредита, вторая переменная хранит объем тела кредита, третья переменная хранит длительность кредитного договора в годах. Написать скрипт который вычислит:
// Сколько процентов заплатит клиент за все время
// Сколько процентов заплатит клиент за один календарный год
// Какое общее количество денежных средств клиента банка выплатит за все года


  let pers = 0.20;                                      
let tel = 250000;
let per = 2;

let duratMounth = per * 12;

let perMounth = (tel/duratMounth)*pers;                // Процент за 1 месяц

let payPersent = perMounth * duratMounth;              // Проценты за весь период 

let yearPerset = perMounth * 12;                       // Проценты за год

let allPeriod = tel + perMounth * duratMounth;       // Общее количество денежных средств за все года

console.log(payPersent+' Проценты за весь период');
console.log(yearPerset+ ' Выплата за год');
console.log(allPeriod + ' Выплата за все года');


// задача 1.3
// Переменная хранит в себе единицу измерения одно из возможных значений 
// (Byte, KB, MB, GB), Вторая переменная хранит в себе целое число.
//  В зависимости от того какая единица измерения написать скрипт, который
//   выводит количество байт. Для вычисления принимает счет что в каждой 
//   последующей единицы измерения хранится 1024 единиц более меньшего 
//   измерения.



let sum = 95;                                
let type = 'GB';

if(type == 'KB'){
 byte =  sum * 1024;
};
if(type == 'MB'){
    byte =  sum * Math.pow (1024, 2);
};
if(type == 'GB'){
    byte =  sum * Math.pow (1024, 3);
   };

   console.log(byte + ' ' + type);



// Задача 1.2   Переменная хранит в себе значение, напишите скрипт которое выводит 
// информацию о том, что число является нулевым либо положительным либо 
// отрицательным.  
let min = 0;                                

if (min > 0) {
	console.log('Положительное');
}
if (min == 0) {
	console.log('Ноль');
}
if (min < 0) {
	console.log('Отрицательное');
}




// Переменная хранит в себе значение от 0 до 9. Написать скрипт который будет
//  выводить слово “один”, если переменная хранит значение 1. Выводить слово
//   “два” - если переменная хранит значение 2, и т.д. для всех цифр от 0 до 9
//   Реализовать двумя способами.

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
