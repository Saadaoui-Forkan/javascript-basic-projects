
let arrDay = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let currentDay = new Date().toLocaleDateString('en-EN',{weekday:"long"})

// console.log(currentDay)

let orderArr = arrDay.slice(arrDay.indexOf(currentDay)).concat(arrDay.slice(0 , arrDay.indexOf(currentDay)))

// console.log(orderArr);
export default {orderArr,currentDay};
// export default currentDay;

