const numbers = [4, 6, 8, 10];
// const output = [];
const output = numbers.map(number => number * number);
// // function doublIt(number) {
// //     return number * 2;
// // }
// // for (const number of numbers) {
// //     const result = doubleIt(number);
// //     output.push(result);
// // }
console.log(output)

// const friends = ['tom cc', 'tom hardy', 'tom bhai'];
// const flength = friends.map(friend => friend.length);
// console.log(flength)

// const products = [
//     { name: 'water bottle', price: 50, color: 'white' },
//     { name: 'bag', price: 100, color: 'white' },
//     { name: 'mouse', price: 33, color: 'white' },
//     { name: 'keyboarg', price: 66, color: 'white' },
//     { name: 'water bottle', price: 999, color: 'white' },
// ];
// const productNames = products.map(product => product.name);
// // console.log(productNames)
// products.forEach(product => console.log(product));
// // console.log(foreasch)


// const numbers = [4, 8, 10, 2, 30, 41];
// const biggest = numbers.filter(number => number < 10);
// console.log(biggest);

// class Teamember {
//     name;
//     role = 'support web dev';
//     address = 'bangladesh';
//     constructor(name, address) {
//         this.name = name;
//         this.address = address
//         // this.name = salman
//     }
// }

// class Support extends Teamember {
//     constructor(name, address) {
//         super(name, address)
//         this.name = name;
//         this.address = address
//         // this.name = salman
//     }
//     startsation() {
//         console.log(this.name, 'start a sesson');
//     }
// }

// class Studentcare extends Teamember {


//     getROutine() {
//         console.log(this.name, 'will give you routine')

//     }
// }

// class Neptune extends Teamember {
//     codeEditor;
//     constructor(name, address, editor) {
//         super(name, address, editor)
//         this.codeEditor = editor;
//     }
//     relaseApp(version) {
//         console.log(this.name, 'will release app', version)
//     }
// }
// // const amir = new Support('amir khan', 'india');
// // console.log(amir);
// // const salman = new Support('salman khan', 'srilonka');
// // console.log(salman);
// // amir.startsation();
// const alia = new Studentcare('alia bhat', 'india')
// console.log(alia)
// const srk = new Neptune('srk', 'bharat', 'vs');
// srk.relaseApp('1.4.3');
// console.log(srk)
