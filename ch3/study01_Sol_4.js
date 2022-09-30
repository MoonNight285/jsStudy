// 문제 5 -  은행 프로그램을 작성하세요.
// 1. 프로그램 시작 시 안내 메세지와 메뉴가 출력
// ex) 안녕하세요. java505 은행입니다.
// ex) 1: 입금, 2: 예금 확인, 3: 출금, 0: 종료

// 2. 메뉴를 선택하면 해당 기능을 실행
// 3. 메뉴는 기능을 실행 후 계속 출력
// 4. 0 실행 시 '프로그램을 종료합니다.' 출력 후 프로그램 종료
// 5. 1 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에 추가
// 6. 2 실행 시 기존에 저장된 금액을 출력
// 7. 3 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에서 차감
// 8. 기존 금액보다 큰 금액을 출금 시 기존 금액을 0으로 만들고 모든 금액을 출금

// 입력 prompt 사용
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
            let inputMoney = prompt("입금할 금액을 입력하세요");

            inputMoney = Number(inputMoney);

            if(isNaN(inputMoney) == true || inputMoney == 0) {
                alert("잘못된 값이 입력되었습니다. 다시 입력하세요");
                break;
            }

            money += inputMoney;
            alert("입금이 완료되었습니다.");
            break;
        case "2":
            alert(`현재 금액은 ${money}입니다.`);
            break;
        case "3":
            let outputMoney = prompt("출금할 금액을 입력하세요.");

            outputMoney = Number(outputMoney);

            if(isNaN(outputMoney) == true || outputMoney == 0) {
                alert("잘못된 값이 입력되었습니다. 다시 입력하세요");
                break;
            }

            money -= outputMoney;

            if(money < 0) {
                money = 0;
            }

            alert("출금이 완료되었습니다.");
            break;
    }

}