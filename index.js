// 1-savol ==================

// var x = 10;
// { x = 2;}
// console.log(x);
// javob: 2

// 2-savol=====================

// const x;
// x = 2;
// console.log(x);
// sintaktik eror

// 3-savol=============

// let a = 16 + 10 + "object";
// console.log(a);
// javob:26object stringda

// 4-savol==============

// let a =  "object"+16 + 10 ;
// console.log(a);
// javob:object1610;

// 5-savol===========

// console.log(parseInt("name 16"));
// javob: Nan

// 6-savol==============

// console.log(parseInt("16 name"));
// javob : 16 numberda

// 7-savol==============

// const fruits = ["banana", "Orange", "Apple", "Kiwi"];
// let newFruits = fruits.push("date");
// console.log(newFruits);
// javob : 5 numberda

// 8-savol============

// const fruits = ['banana', 'Orange', 'Apple', 'Kiwi'];
// const citrus = fruits.slice(1);
// console.log(citrus);
// javob:['Orange','Apple','Kiwi']

// 9-savol==============

// var fruits = ['banana', 'Orange', 'Apple', 'Kiwi'];
// var fruit = fruits;~
//     console.log(fruits == fruit);
// javob: true

// 10-savol===============

// const designer = {
//     name: "Adam",
//     age: 24,
//     occupation: "designer"
// }
// var { nameCopy, ageCopy, occupationCopy } = designer;
// console.log(nameCopy);
// javob:undefinet

// 11-savol==================

// for (let i = 10; i>  0; i--){
//     i%2!==0&&console.log(i+i);
// }

// 12-savol==================

// const designer = {
//   name: 'Adam',
//   age: 24,
//   occupation: 'designer',
// };

// Object.seal(designer);
// designer.kalit = 12;
// delete designer.name;
// designer.name = 'Sarvar';
// console.log(designer);

// Javob: object seal bo'lganida delete ham add ham  bo'lmaydi update boladi;

// 13-savol ======================

// const designer = {
//   name: 'Adam',
//   age: 24,
//   occupation: 'designer',
// };
// Object.freeze(designer);
// delete designer.name;
// designer.kalit = 12;
// designer.name = 'Jack';
// console.log(designer);
// javob:freeze bolganda update ham delete ham add ham qilib  bolmaydi;

// 14-savol===============

// Math.pow(number, degree) true;
// Math.pow(degree, number)  false;

// 15 - savol ==============

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// newarr = arr.splice(1, 4,2);
// console.log(newarr);
// console.log(arr);
// javob:a=>Startindex,b=>length;c=>eski o'rnini to'ldiradi

// 16-savol ======================

// var str = "AlKimyogar,ShayTanaT,Ogay ona,ShaYtanat";
// newstr = str.replace(/shaytanat/gi, "Webbrain");
// console.log(newstr);

// 17-savol===============

// var str = "dsffdsjhsdjdslfjfdlfksa;lfk";
// newfruit=fruits.concat("Lemon", "Cherry");
// console.log(newfruit);
// javob:['banana', 'Orange', 'Apple', 'Kiwi','Lemon','Cherry'];

// 19-savol====================

// var str = "dsffdsjhsdjdslfjfdlfksa;lfk";
// console.log(str.indexOf("f", 10));
// console.log(str.search("f", 10));
// javob: indexOf() 2 parametrli metod bu index ni aniqlaydi.
//     search() faqat 1 ta parametr qabul qiladi.bu ham index ni aniqlaydi;

//18-savol====================
// var str = 'dsffdsjhsdjdslfjfdlfksa;lfk';
// var number = 24;
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.toString());
// console.log(arr.join());
// console.log(str.split());
// console.log(number.join());

// javob: join(), toString() ikkalasi ham stringga otkazadi.lekin join numberni otkazmaydi;

// 20-savol==============
// var fruits = ['banana', 'Orange', 'Apple', 'Kiwi'];
// console.log(fruits.sort((a,b)=>a.localeCompare(b))); 

// 21-savol=============

// const cars = ["damas", "bmw", "Audi", "Mercades"];
// cars = ["tiko", "nexia", "captiva"];
// console.log(cars);
// javob:TypeError const variable cars;

// 22 - savol ====================
   
// const cars = ['damas', 'bmw', 'Audi', 'Mercades'];
// cars.map((value, index) => {
//      console.log(index,value);
//  })
// newcars=cars.map((value, index) => value = "tico");
// console.log(newcars);
// javob: barchasi tiko ga ozgaradi;

// 23-savol=============

// var number = ['15', 48, '25', '15', 10, '95,15'];
// var newAr = number.filter((value) => value !== '15');
// console.log(newAr);
// javob:[48,'25',10,'95,15']

// 24-savol

















    
    
