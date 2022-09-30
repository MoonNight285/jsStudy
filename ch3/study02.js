console.log("\n ----- 함수 사용하기 ----- \n");

function sum(num1, num2) {
    const a = 10;
    const b = 20;
    const result = a + b;
    console.log(`두 수의 덧셈은 ${result}`);
}

sum(10, 20);

// 함수의 4가지 형태
// 1. 매개변수 없고, 반환값 없는것
// 2. 매개변수 있고, 반환값 없는것
// 3. 매개변수 없고, 반환값 있는것
// 4. 매개변수 있고, 반환값 있는것

function add1() {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(`두 수의 덧셈은 ${c}`);
}

function add2(a, b) {
    const c = a + b;
    console.log(`두 수의 덧셈은 ${c}`);
}

function add3() {
    const a = 10;
    const b = 20;
    const c = a + b;
    return c;
}

function add4(a, b) {
    return a + b;
}

// 익명함수 : 이름이 없기때문에 다른곳에서 호출이 불가능하다. , 매개변수로 함수를 사용시 사용한다.(이때는 콜백함수라고 부르기도 한다.)
// 변수에 익명함수를 대입하여 변수명으로 익명 함수를 호출할 수 있음.
console.log("\n ----- 익명함수 ----- \n");
const noname = function () {
    const a = 10;
    const b = 20;
    console.log(`두 수의 합은 ${a + b}`);
};

noname();

// 즉시 실행 함수 (일회용 함수) : 프로그램 실행 시 단 한번만 실행해야되는 부분을 실행하기 위해서 사용함
console.log("\n ----- 즉시 실행 함수 ----- \n");
(function () {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(c);
}()); // 마지막 괄호는 함수호출시 add() 이런식으로 호출하는거처럼 선언과 동시에 호출하는것으로 보면된다.