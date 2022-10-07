console.log("\n ----- Date 객체 사용하기 ----- \n");

let now = new Date();

console.log(now);
console.log(now.toLocaleString());
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getUTCFullYear());

console.log("\n");

console.log(`월 : ${now.getMonth()}`);
console.log(`일자 : ${now.getDate()}`);
console.log(`요일 : ${now.getDay()}`);

console.log("\n");
console.log(`현재 시간 : ${now.getHours()}`);
console.log(`현재 UTC 시간 : ${now.getUTCHours()}`);
console.log(`현재 분 : ${now.getMinutes()}`);
console.log(`현재 초 : ${now.getSeconds()}`);

console.log("\n ----- Math 객체 사용 ----- \n");

console.log(`PI : ${Math.PI}`);

let result = 10 / 3;
console.log(`10 / 3을 그대로 출력시 ${result}`);
console.log(`10 / 3의 소수점 올리기 : ${Math.ceil(result)}`);
console.log(`10 / 3의 소수점 버리기 : ${Math.floor(result)}`);
console.log(`5.5에 대한 반올림 : ${Math.round(5.5)}`);
console.log(`5.4에 대한 반올림 : ${Math.round(5.4)}`);
console.log(`매개변수 중 최대 값 선택하기 : ${Math.max(10, 20, 30)}`);
console.log(`매개변수 중 최소 값 선택하기 : ${Math.min(10, 20, 30)}`);
console.log(`랜덤 숫자 발생 : ${Math.random()}`); // 0.0 ~ 0.9까지의 숫자를 발생

console.log("\n ----- 브라우저 객체 ----- \n");