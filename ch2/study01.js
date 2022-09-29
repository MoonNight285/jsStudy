console.log("\n ----- 산술 연산자 ----- \n");

a = 10;
b = 3;

console.log("원본 변수 a : " + a + ", \t" + "b : " + b);

console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a * b = " + (a * b));
console.log("a / b = " + (a / b));
console.log("a % b = " + (a % b));
// ES6에서 추가
console.log("a ** b = " + (a ** b));
console.log("a * a * a = " + a * a * a);

console.log("\n ----- 증감 연산자 ----- \n");
++a;
console.log("a++ = " + a);
++a;
console.log("++a = " + a);
--a;
console.log("--a = " + a);
a--;
console.log("a-- = " + a);

console.log("\n ----- 할당 연산자 ----- \n");
console.log("a = 100 : " + (a = 100));
console.log("a += 10 : " + (a += 10));
console.log("a -= 10 : " + (a -= 10));
console.log("a *= 2 : " + (a *= 2));
console.log("a /= 2 : " + (a /= 2));
console.log("a %= 3 : " + (a %= 3));
console.log("b **= 2 : " + (b **= 2));

console.log("\n ----- 문자열 연결 연산자 ----- \n");
c = "문자열" + "연결" + "연산자";
console.log("문자열 + 연결 + 연산자 : " + c);

console.log("\n ----- 비교 연산자 ----- \n");
console.log("10 == 5 : " + (10 == 5));
console.log("10 > 5 : " + (10 > 5));
console.log("10 >= 10 : " + (10 >= 10));
console.log("10 < 5 : " + (10 < 5));
console.log("10 <= 5 : " + (10 <= 5));
console.log("10 != 5 : " + (10 != 5));

// 자바스크립트에서는 간소화된 문법을 사용하기 때문에 문자열로 된 숫자와 숫자 데이터 타입의 숫자의 비교 연산이 가능하다.
// ==, !=, ===, !== 의 차이점은 ==, != 은 데이터 타입을 확인하지 않고 비교 연산만 진행
// ===, !== 은 값과 데이터 타입을 모두 학인하여 비교 연산을 진행
console.log("'5' == 5 : " + ('5' == 5));
console.log("'5' === 5 : " + ('5' === 5));
console.log("'5' != 5 : " + ('5' != 5));
console.log("'5' !== 5 : " + ('5' !== 5));

console.log("\n ----- 논리 연산자 ----- \n");
console.log("10 > 5 && '5' === 5 : " + (10 > 5) && ('5' === 5));
console.log("10 > 5 && '5' === 5 : " + (10 > 5) || ('5' === 5));
console.log("!('5' != 5) : " + !('5' != 5));

console.log("\n ----- typeof & instanceof ----- \n");
// typeof : 지정한 변수의 데이터 타입을 확인
// instanceof : 지정한 변수가 지정한 클래스의 객체인지 확인
console.log("typeof a : " + (typeof a));
a = "자바스크립트";
console.log("typeof a : " + (typeof a));
time = new Date(); // ES6에서 new 키워드 생성됨
console.log("instanceof : " + (time instanceof Date));

console.log("\n ----- 연산자의 우선 순위 ----- \n");
// 1. () => 괄호
// 2. . => 맴버참조할때, [] => 배열의 맴버, ?. => 선택적 체이닝, () => 함수호출
// 3. new 키워드
// 4. ++, --, !, ~, typeof, void, delete
// 5. **, *, /, %
// 6. +, -
// 7. <<, >>, >>>
// 8. in(for in 문 할때 in), instanceof, <, <=, >, >=, ==, ===, !=, !==
// 9. &, ^, |
// 10. &&, ||, ? :
// 11. =, +=, -=, *=, /=, %=, **=