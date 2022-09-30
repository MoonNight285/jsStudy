// 문제 7 - 문제 4의 소스코드를 함수를 사용하는 방식으로 수정하세요.
// 1. money, coffee, price 에 초기값을 설정하는 함수 생성, quiz7Setup(함수이름)
// 2. 커피 판매 부분을 함수로 생성 // quiz7CoffeeSale(함수이름)

let coffeePrice;
let coffeeCount;
let useableMoney;

function quiz7Setup(price, count) {
    coffeePrice = Number(price);
    coffeeCount = Number(count);
    useableMoney = prompt("보유한 금액을 입력하세요");
    useableMoney = Number(useableMoney);
}

function quiz7CoffeeSale() {
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
}

quiz7Setup(300, 10);
quiz7CoffeeSale();