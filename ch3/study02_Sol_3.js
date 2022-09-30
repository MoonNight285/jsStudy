// 문제 8 - 문제 5의 소스코드를 함수를 사용하는 방식으로 수정하세요.
// 1. 입금 부분을 함수로 생성 quiz8InputMoney(함수이름)
// 2. 예금 확인 부분을 함수로 생성 quiz8CheckMoney(함수이름)
// 3. 출금 부분을 함수로 생성 quiz8OutputMoney(함수이름)

function quiz8InputMoney() {
    let inputMoney = prompt("입금할 금액을 입력하세요");

    inputMoney = Number(inputMoney);

    if(isNaN(inputMoney) == true || inputMoney == 0) {
        alert("잘못된 값이 입력되었습니다. 다시 입력하세요");
        return 0;
    }

    return inputMoney;
}

function quiz8CheckMoney(money) {
    alert(`현재 금액은 ${money}입니다.`);
}

function quiz8OutputMoney(money) {
    let outputMoney = prompt("출금할 금액을 입력하세요.");

    outputMoney = Number(outputMoney);

    if(isNaN(outputMoney) == true || outputMoney == 0) {
        alert("잘못된 값이 입력되었습니다. 다시 입력하세요");
        return 0;
    }

    if(money < 0) {
        money = 0;
    }
    else {
        money -= outputMoney;
    }

    return money;
}

let money = 0;
let exitFlag = false;

alert("안녕하세요. java505 은행입니다.");
while(true) {
    if(exitFlag == true) {
        break;
    }

    let number = prompt("1번 : 입금, 2번 : 예금 확인, 3번 : 출금, 0번 : 종료");

    switch (number) {
        case "0" :
            alert("프로그램을 종료합니다.");
            exitFlag = true;
            break;
        case "1":
            let insertResult = quiz8InputMoney();

            if(insertResult != 0) {
                money += insertResult;
                alert("입금이 완료되었습니다.");
            }

            break;
        case "2":
            quiz8CheckMoney(money);
            break;
        case "3":
            let withdrawResult = quiz8OutputMoney(money);

            if(withdrawResult != 0) {
                money -= withdrawResult;
                alert("출금이 완료되었습니다.");
            }

            break;
    }
}