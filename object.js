const user = {
    id: 1,
    name: 'web',
    status: 'Academy',
    key:'23456'
}

user.key = 'status';      
// console.log(user.key);     javob : status  key update boldi

// let  key = 'status';
// console.log(user[key]);  javob: Academy chiqadi. user['status']=>bolgani uchun

// console.log(Object.keys(user));
//  console.log(Object.values(user));
   
// res = Object.entries(user)
// console.log(res);
//    Object.entries(user).map((value) => console.log(value));

// console.log({...user,status:'it'});