// First exercise
//1. Запитайте у юзера скільки йому років: «Привіт мені - “” років!».


let userOld1 = +prompt('How old are you?', 18);

alert(`Привіт мені - ${userOld1} років!`);



//Second  exercise
//2. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу.
//Виведемо скільки йому років.



let userYearOfBirth2 = +prompt('What is your year of birth?', 1997);
const PRESENTYEAR = 2020;
let userOld2 = PRESENTYEAR - userYearOfBirth2;

alert(`Вам: ${userOld2} років!`);



//Third exercise
//3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр.


let a = +prompt('Сторона а', 5);
let b = +prompt('Сторона b', 10);
let perimeter;

perimeter = 2 * (a+b);
alert(`Perimeter: ${perimeter}`);



// Four exercise
//4. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі)


let userRadius = +prompt('Yours radius:', 5);

alert(`Сircle area: ${userRadius*userRadius*Math.PI}`);
alert(`Сircle area: ${Math.round(userRadius*userRadius*Math.PI)}`)


//Fifth exercise
//5. Водій їде з середньою швидкістю 50 км в годину. Запитайтесь у нього скільки ще
//йому необхідно часу їхати, та виведіть відстань.


const STATICKSPEED = 50;
let driverDistans = +prompt('How long will you drive?', 5);
let distans = STATICKSPEED * driverDistans;

alert(`Distans: ${distans}`); 


//Sixth exercise
//6. Реалізуємо конвертер кілометрів в милі і навпаки =)

const COEFFICIENT = 0.62137;
let userDistans = +prompt('Your distans', 5);
if(confirm('Kilometers?')){
  alert(`Miles: ${userDistans*COEFFICIENT}`);
}else if (confirm('Miles?')) {
  alert(`Kilometers: ${userDistans/COEFFICIENT}`);
}



//Seventh exercise

//7. Юзер вводить скільки коштів на його картці та ціну одного літра бензину. Виводимо
//скільки бензину він може купити та скільки грошей у нього залишиться.

let userMoney = +prompt('Your money', 5);
const COST = 25;
let fuelCanBuy = userMoney/COST;
alert(`You can buy ${Math.floor(fuelCanBuy)}`);
let litersOfFuel = +prompt('how many liters do you want?', 5);
let spentMoney = litersOfFuel*COST;
alert(`You buy ${litersOfFuel} liters, spend ${spentMoney} money, balance on cart ${userMoney-spentMoney}`)
