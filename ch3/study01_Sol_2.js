// 문제3 - 숫자를 입력받은 후 1부터 그 숫자까지 3의 배수를 모두 화면에 출력합니다. 그리고
// 출력된 3의 배수가 총 몇 개인지 알려 주는 프로그램을 작성해보세요.
// 조건 1 - 프롬프트 문 이용해서 숫자 입력
// 조건 2 - 취소 버튼을 누르면 결과를 보여주지 않는다.
// 조건 3 - 반목문을 이용해서 1부터 입력받은 숫자까지 실행
// 조건 4 - 3의 배수인지 알려면 입력받은 숫자를 3으로 나누어 나머지가 0인지 확인
// 조건 5 - 카운터 개수를 표시

let number = prompt("몇 까지 3의 배수를 찾을까요?");
let count = 0;
let answerArr = [];

number = Number(number);

if(number != 0 || isNaN(number) == false) {
    for (let i = 0; i < number; i++) {
        if(i == 0) {
            continue;
        }

        if(i % 3 == 0) {
            answerArr[answerArr.length] = i;
            count++;
        }
    }
}

let targetNumber = document.getElementById("targetNumber");
targetNumber.innerText = number.toString();

let answer = document.getElementById("answer1");
answer.innerText = answerArr.toString();

let answerCount = document.getElementById("count");
answerCount.innerText = count.toString();