// 문제 4 - 커피 자판 프로그램을 작성하세요.
// 1. 사용자가 가지고 있는 금액을 입력 받기
// 2. 커피 1잔의 금액은 300원
// 3. 자판기에 들어있는 커피의 양은 10개
// 4. 커피를 판매할 때마다 1개의 커피가 소비됨
// 5. 소지 금액이 부족 시 '돈이 부족합니다'를 출력
// 6. 커피가 부족할 경우 '커피가 다 팔렸습니다.'를 출력
// 7. 커피 판매 시 '커피를 한잔 판매 합니다.' 와 커피 재고량을 출력
// ex) 커피를 한잔 판매합니다. 남은 커피 00잔 표시

let coffeePrice = 300;
let coffeeCount = 10;
let useableMoney = prompt("보유한 금액을 입력하세요");

while(true) {
    if(coffeeCount < 0) {
        alert("커피가 다 팔렸습니다.");
        break;
    }

    if(useableMoney < 300) {
        alert("돈이 부족합니다.");

        break;
    }
    else {
        useableMoney -= coffeePrice;
        coffeeCount--;
        alert("커피를 한잔 판매 합니다." + "\n" + "남은 재고량 : " + coffeeCount);
    }
}