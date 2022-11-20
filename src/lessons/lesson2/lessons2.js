/// func
//globalLE //{sayHI: Function } -> null

// let name = 'Alex'
// const name ='Alex'
// function sayHi(name) {
// //{  }-> globalE
// console.log('Hi' + ' ' + name);
// }

// sayHi();


// ============== NESTED FUNCTIONS
//globalLE {sayHi: Function, name: Alex}-> null
// let name = 'Alex'
// function sayHi() {
 
// const greet = 'HI'
// //sayHiLE {greeting: Function, greet: Hi}-> globalLE
//   function greeting() {
//   //greetingLE {  }-> sayHiLE
//   console.log(greet + ' ' + name);
//   }
  
//   greeting()
// }


// sayHi();



// let name = 'Alex'

// function sayHi() {
//   const greet = 'HI'

//   function greeting() {
//     console.log(greet + ' ' + name);
//   }

//   greeting()
// }


// sayHi();

// ===== COUNTER =====

// globalLE -> {counter: Function, count: function }
//  let c = 0
// function counter() {
// //counterLE {}-> globalLE
 

//   return()=> {
//     // counterLE { }-> counterLE
//     console.log(c++);
//   }
  
// }
// const count = counter()//{count: 0}
// const count2 = counter() //{count: 0}

// count()
// count2()
// count()
// count2()
/// output - {0
// 1
// 2
// 3
// }


// function counter() {
  // [[Environment]] -> globalLE
  //counterLE1 { count: 0} -> globalLE
  // let count = 0

  // return () => {
    // [enviroment] -> counterLE1
   //{}-> counterLE1
    // console.log(count++);
//   }

// }
// const count =counter()
// const count2 = counter()
// count()
// count()
// count2()
// count2()
// count()

// output 0
// 1
// 0
// 1
// 2



// function createCalcFunction(n) {
  
//   return function () {
//     console.log(1000 * n);
//   }
// }

// const calc = createCalcFunction(42)
// calc()

// function createIncrementor(n) {
  
//   return function(num) {
//     return n + num
    
//   }
// }
// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)

// console.log(addOne(10));
// console.log(addOne(41));

// console.log(addTen(10));
// console.log(addTen(41));


// function urlGenerator(domain) {
  
//   return (url)=> {
//     return `https://${url}.${domain}`
//   }
// }

// const comURL = urlGenerator('com')

// const ruUrl = urlGenerator('ru')

// console.log(comURL('google'))
// console.log(comURL('netflix'))
// console.log(ruUrl('yandex'))
// console.log(ruUrl('Vkontakte'))

// console.log(comURL('vkontacte'));


// function bindFnc(person) {
//   return (logPersone)=> { 
//     return `preson: ${logPersone.name}, ag3e: ${logPersone.age}, zob: ${logPersone.job}`
//   }
  
// }
// const person1 = {name: 'Mixa', age: 1, job: 'Front-end'}

// const context= bindFnc(person1)
// console.log(context(person1));




// recursis


// программный аппаратный 

// let value = 2;
// function showValue() {
//   console.log('Value from showValue '  + value);
// }

// function wrapp() {
//   let value = 3
//   console.log('wrap ' + value);
//   showValue()
// }

// wrapp()


// let value = 2;

// function showValue() {
//   console.log("Value from showValue: " + value); // 3
// }

// function wrapper() {
//   let value = 3;
//   console.log("Value from wrapper: " + value); // 3

//   showValue();
// }
// wrapper();


function sayHi(name) {
  
  var phrase = 'Hello, ' + name
  console.log(phrase);
}

sayHi('Jack')