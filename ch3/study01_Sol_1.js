'use strict';

// 문제1 - 구구단 전체 출력을 while문을 사용하여 출력하세요.
console.log("\n ----- 구구단 전체 출력 ----- \n");

let num1 = 2;

while(num1 < 10) {
    let num2 = 1;

    while(num2 < 10) {
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        num2++;
    }
    console.log("\n");
    num1++;
}

// 문제2 - 배열 arr1를 이용하여 1 ~ 10까지의 합을 총합을 구하는 프로그램을 for문을 사용하여 작성하세요.
console.log("\n ----- for문 사용 ----- \n");
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}

console.log(`총 합 : ${sum}`);