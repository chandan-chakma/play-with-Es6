// let hubby = "toma k nia ami jabw hameymoon";
// const bubby = 'ami shudu toma k viya korbw';
// const product = {
//     name: 'phone',
//     price: 1200,
//     color: 'silver'
// }
// template String
// const valobasha = `tumi shudu amar ${bubby}. ami ${hubby}. toma k ami akta ${product.name} debw.  phone color ${product.color} debw.`
// console.log(valobasha);

// arrow function

// const output = number => number / 5;
// const division = output(10);
// console.log(division)

// const mutiple = (num1, num2) => {
//     let first = num1 + 2
//     let second = num2 + 2;
//     const num3 = first * second;
//     return num3;
// }
// const output = mutiple(2, 2);
// console.log(output);

// const threeple = (num1, num2, num3) => num1 * num2 * num3;
// const output = threeple(2, 2, 2);
// console.log(output)

// array map 
// const friendAge = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// // const newAge = [];
// const fiveDoubleIt = friendAge.map(friend => friend * 5);
// console.log(fiveDoubleIt)


// Array filter 
// const numbers = [1, 2, 3, 4, 5, 6, 77, 8, 55, 33, 10];
// const odd = numbers.filter(Number => Number % 2 != 0);
// console.log(odd);

// Array find 
// const products = [{

//     name: 'iphone',
//     price: 5000,
//     color: 'black'



// }]
// const budget = products.find(product => product.price);
// console.log(budget)

// const product = {
//     name: 'bag',
//     price: 4000,
//     color: 'black'
// }
// const { price, color } = product;
// console.log(color)

// optional chaining  

const company = {
    name: 'Gp',
    web: {
        role: 'web',
        duration: '5hr',
        part: {
            work: 'ali'

        }
    }
}
console.log(company.ami?.web.part.work)

// const add = (num1, num2, num3 = 7) => num1 + num2 + num3;
// const result = add(10, 10);
// console.log(result)