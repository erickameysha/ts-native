console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// function/class, if/else, loops, try/catch/finally, switch, anonymous code

// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     a: 10,
// };
//
//
// let a = 10;
// function f() {
//     let fScope = {
//         outerScope: globalScope,
//     };
//     console.log(a);
//     //d = 100; инициализация не объявленной переменной приводит к созданию переменной на глобальном уровне
// }
// f();


// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     a: 10,
// };
//
//
// let a = 10;
// function f() {
//     let fScope = {
//         outerScope: globalScope,
//         i: 100, // undefined -> 50 -> 100
//         inner: 'Function',
//     };
//     console.log('a ', a);
//     var i = 50;
//     function inner() {
//         let innerScope = {
//             outerScope: fScope,
//         }
//         i += 50
//         console.log('i ', i);
//         console.log('a ', a);
//     }
//     inner();
// }
// f();


// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     someFunc: 'Function', // undefined -> 'Function'
//     someFunc2: 'Function',
// };
//
//
// function f(arg: number) {
//     let fScope = {
//         outerScope: globalScope,
//         arg: 660, // undefined -> 100 -> 110 -> 130 -> 160 -> 660
//         inner: 'Function',
//     };
//     let fScope2 = {
//         outerScope: globalScope,
//         arg: 201, // undefined -> 1
//         inner: 'Function',
//     };
//     function inner(arg2: number) {
//         // let innerScope = {
//         //     outerScope: fScope,
//         //     arg2: 10, // undefined -> 10
//         // }
//         let innerScope2 = {
//             outerScope: fScope,
//             arg2: 20, // undefined -> 20
//         }
//         // let innerScope3 = {
//         //     outerScope: fScope,
//         //     arg2: 30, // undefined -> 30
//         // }
//         let inner2Scope = {
//             outerScope: fScope2,
//             arg2: 200, // undefined -> 200
//         }
//         let innerScope4 = {
//             outerScope: fScope,
//             arg2: 500, // undefined -> 500
//         };
//         arg += arg2
//         console.log('arg ', arg);
//     }
//     return inner;
// }
// var someFunc = f(100);
// someFunc(10);
// someFunc(20);
// someFunc(30);
//
// var someFunc2 = f(1);
// someFunc2(200);
// someFunc(500);
//
// someFunc = null;
// someFunc2 = 10;


// let globalScope = {
//     outerScope: null,
//     f: 'Function',
//     a: 10,
//     s: 'Function',
// };
//
//
// let a = 10;
//
// function f() {
//     let fScope = {
//         outerScope: globalScope,
//         a: 100, // undefined -> 50 -> 100
//         inner: 'Function',
//     };
//     let a = 50
//     console.log(a);
//
//     function inner() {
//         let innerScope = {
//             outerScope: fScope,
//         }
//         a += 50
//         console.log('a ', a);
//     }
//
//     return inner;
// }
//
// let s = f();
// s()
// console.log(a)




// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function sum(arg: number) {
//     return function (arg2: number) {
//         return arg + arg2;
//     }
// }
//
// console.log(sum(3)(6))
// var a = 500;

// function someFunc(callback: Function) {
//     let a = 10;
//     return callback;
// }
//
// function someFunc(callback: Function) {
//     let a = 10;
//     callback(a);
// }
//
// const call = (arg: number) => {
//     console.log(a);
//     console.log(arg);
// };
//
// // console.log(someFunc(call)(6));
// console.log(someFunc(call));


// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// function sumTo(num: number) {
//     let result = 0;
//     for (let i = 1; i <= num; i++) {
//         result += i;
//     }

//     return result;
// }

// function sumTo(num: number): number {
//     if (num <= 1) return num;
//     return num + sumTo(num - 1);
// }
//
// console.log(sumTo(100500))


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(n:number) {
    if (n <= 0) return (num: number) => 0;
    if (n === 1) return (num: number) => num;

    let outerParams: number[] = [];

    function inner(...arg: number[]) {
        outerParams = [...outerParams, ...arg];
        if(outerParams.length >= n) {
            outerParams.length = n;
            return outerParams.reduce((acc, el) => acc + el);
        } else {
            return inner;
        }
    }
    return inner;
}
// @ts-ignore
console.log(superSum(3)(2)(5)(3) )
// @ts-ignore
console.log(superSum(3)(2)(5,3) )
// @ts-ignore
console.log(superSum(3)(2,5,3) )
// @ts-ignore
console.log(superSum(3)(2,5)(3) )
// @ts-ignore
console.log(superSum(3)(2,5)(3,9))

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};