'use strict';

console.log("\n ----- while문 사용하기 ----- \n");

// 사용방법
// 카운트 변수 선언
//
// while (조건식) {
//     반복 실행될 소스코드
//     카운트 변수의 증감식
// }

let count = 1;

while(count < 11) {
    console.log(count);
    count++;
}

let dan = 5;
count = 1;

while(count < 10) {
    console.log(`${dan} * ${count} = ${dan * count}`);
    count++;
}

console.log("\n ----- for문 사용하기 ----- \n");
let sum = 0;

for(let i = 0; i <= 5; ++i) {
    sum = i + sum;
    console.log(sum);
}

const arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.log("\n ----- break 사용 ----- \n");

for (let i = 0; i < 10; i++) {
    if(i == 5) {
        break;
    }
    else {
        console.log(`현재 i의 값 : ${i}`);
    }
}

console.log("\n ----- 2중첩 for문 break사용 ----- \n");

for (let i = 2; i < 10; i++) {
    if(i == 5) {
        break;
    }

    for (let j = 1; j < 10; j++) {
        if(j == 5) {
            break;
        }
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

console.log("\n ----- continue 사용 ----- \n");

for (let i = 0; i < 10; i++) {
    if(i == 5) {
        continue;
    }
    else {
        console.log(`현재 i의 값 : ${i}`);
    }
}