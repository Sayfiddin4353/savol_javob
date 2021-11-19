//  vazifalar
// 1====================================
function obj(num1 = 0, num2 = 0) {
 
  if (num2 == 0) {   
    return (num3 = 0) => {
      console.log(num1 + num2 + num3);
    };
   
  } else {
     console.log(num1 + num2);
   

  }
}
obj(0, 1);
obj(1)(0);

// 2====================================

// const obj = {
//   a: 1,
//   b: 2,
//   getA() {
//     console.log(this.a);
//     return {
//       getB() {
//         console.log(obj.b);
//       },
//     };
//   },
// };

// obj.getA().getB();
