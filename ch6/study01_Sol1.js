// 문제 1 - Math.random()를 사용하여 로또 번호 생성 프로그램을 작성하세요.
// Math.round(Math.random() * 45 + 1)
let result = [];

for (let i = 0; i < 7; i++) {
    result[i] = Math.round(Math.random() * 45 + 1);
}

console.log("생성된 번호 : " + result.toString());


