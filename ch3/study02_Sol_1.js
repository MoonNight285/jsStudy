// 문제 6 - 문제 3의 소스코드를 함수를 사용하는 방식으로 수정하세요.
// 1. 사용자 입력 부분을 함수로 생성, quiz3_input(함수이름)
// 2. 3의 배수를 계산하는 부분을 함수로 생성, quiz3_cal(함수이름)

let number;
let count = 0;
let answerArr = [];

function quiz3_input() {
    let tempNum = prompt("몇 까지 3의 배수를 찾을까요?");
    return tempNum;
}

function quiz3_cal(targetNumber) {
    targetNumber = Number(targetNumber);

    if(targetNumber != 0 || isNaN(targetNumber) == false) {
        for (let i = 0; i < targetNumber; i++) {
            if(i == 0) {
                continue;
            }

            if(i % 3 == 0) {
                answerArr[answerArr.length] = i;
                count++;
            }
        }
    }

    return targetNumber;
}

number = quiz3_cal(quiz3_input());

let targetNum = document.getElementById("targetNumber");
targetNum.innerText = number.toString();

let answer = document.getElementById("answer1");
answer.innerText = answerArr.toString();

let answerCount = document.getElementById("count");
answerCount.innerText = count.toString();
