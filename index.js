

/*  
var arr = [1,2,3,4,5,6,7,8];                      задание 5.2


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


let mas = [1,2,4,[8,4,12],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3]; задание 5.1  

let wholeMas = [].concat.apply([], mas);

console.log(wholeMas);

let string = "Привет, мое имя Влад я студент Влад "     задание 4.4
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



let min = -100;   // макс значение                                      задание 4.2
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




let min = -10;   // макс значение                                       задание 4.1
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










let mas = [1, 2, 3, 4, 0, -1, -3, -5, 3];           задание 3.6
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




let mas = [ 34, 15, 16, 17, 24, 35 ];                       задание 3.5
let max = mas.indexOf( Math.max.apply(null, mas)); 

console.log(max)




let masOne = [13,15,14,11];                                  задание 3.4
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

let mas = [                                                 задание 3.3
  ["1", "1", "1"],
  ["2", "2", "2"],
  ["3", "3", "3"]
];
let newMas = mas.map((el, i) => el.map((el2, j) => mas[j][i]));
console.log(newMas);




_______________________________________________________________ задание 3.2

let i = 1;                                                  // задача 2.3

function num(number){
    i++
    
    if (number % i == 0) {
    console.log( i );}
    if(i > number){
        return number
        
    }
    num(number)
    }

    num(500)


    let num = 30;                               // задача 2.4
let n = 0;
let i = 0;
function number(){
 i++
    if (i % 2 == 0){ 
        n += i 
  }
  if(i >= num){
  console.log( n )
  return
  };
  number()
  }

number()





let i = 300                                            // задача 2.5
function number(){
i++;
    if (i % 17 == 0){
    console.log(i)
    return
   };

 
  number();
}  

number();









_______________________________________________________________ задание 3.1

 

function string(str){              // задача 2.1

str = str.split('').reverse().join('');

console.log(str)}

string('apple pen')



function number(n){                   // задача 2.2
    var result = 1;
    while(n){
        result *= n--;
    }
    return result;
};
console.log(number(3))



                            // задача 2.3
function num(number){
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      console.log( i );
    }
  }
}
num(500)
  

 function number(num){                            // задача 2.4
let n = 0;

for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) 
        n += i 
  }
  console.log( n );
}  
number(10)


function number(i){                           // задача 2.5
for (; i > 300; i++) {
    if (i % 17 == 0)
    break 
   }
  console.log( i );
}  
number(301)

 
 
function bank(tel){
let pers = 0.20                                      // Задача 1.4
let per = 2

let duratMounth = per * 12

let perMounth = (tel/duratMounth)*pers                 // Процент за 1 месяц

let payPersent = perMounth * duratMounth              // Проценты за весь период 

let yearPerset = perMounth * 12                       // Проценты за год

let allPeriod = tel + perMounth * duratMounth         // Общее количество денежных средств за все года

console.log(payPersent+' Проценты за весь период')
console.log(yearPerset+ ' Выплата за год')
console.log(allPeriod + ' Выплата за все года')
}
bank(250000)




function memory(per){
let Byte = 1;                                             // Задача 1.3
let KB = Byte * 1024;
let MB = Math.pow (KB, 2);
let GB = Math.pow (KB, 3);

console.log(per * KB + ' Byte in KB');
console.log(per * MB + ' Byte in MB');
console.log(per * GB + ' Byte in GB');
}
memory(90)





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
num(9)

 
                                        // Задача 1.1 (3)
    function num(i){                    
var number = ['Ноль','Один','Два','Три','Четыре','Пять','Шесть','Семь','Восемь','Девять',];
console.log(number[i]);
} 
num(7)

__________________________________________________________________________________________задача 3.1


var str = 'apple pen';                  // задача 2.1

str = str.split('').reverse().join('');

console.log(str)



function number(n){                   // задача 2.2
    var result = 1;
    while(n){
        result *= n--;
    }
    return result;
};
console.log(number(3))


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
