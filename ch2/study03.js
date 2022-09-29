console.log("\n ----- 문자열 함수 ----- \n");

// 문자열
// 문자열 변수 사용 시 선언 방법

let str1 = "일반적인 사용방법";
let str2 = new String("new 키워드를 사용한 방법");

console.log(str1);
console.log(str2);

str1 = "test";
str2 = new String("test");

console.log("str1 == str2 : " + (str1 == str2));
console.log("str1 === str2 : " + (str1 === str2));

str3 = "test";
str4 = "test";
console.log("str3 == str4 : " + (str3 == str4));
console.log("str3 === str4 : " + (str3 === str4));

str5 = new String("test");
str6 = new String("test");
console.log("str5 == str6 : " + (str5 == str6));
console.log("str5 === str6 : " + (str5 === str6));

// length : 문자열을 길이를 출력
// slice() : 문자열의 일부를 추출, 원본은 그대로 두고 새 문자열을 반환, 끝 index는 포함하지 않는다.
// 매개변수로 음수값을 사용이 가능하다. 음수를 사용하여 뒤에서 부터 카운트 할수 있다.
// 사용법 : 변수명.slice(시작 index, 끝 index);

console.log("\n ----- slice() ----- \n");
let str7 = "사과, 바나나, 파인애플";
let str8 = str7.slice(4);
console.log("원본 문자열 : " + str7);
console.log("잘라낸 문자열 : " + str8);
str8 = str7.slice(4, 7);
console.log("slice(4, 7) 로 잘라낸 문자열 : " + str8);
str8 = str7.slice(-9, -6);
console.log("slice(-9, -6) 로 잘라낸 문자열 : " + str8);
str8 = str7.slice(-9);
console.log("slice(-9, -6) 로 잘라낸 문자열 : " + str8);

// substring() : slice()와 비슷한 기능, 원본은 그대로 두고 새 문자열을 반환함, 가장 작은값이 0이기 때문에 음수를 사용하면 가장 작은 값은
// 0으로 반환하여 문자열을 가져온다.
// 매개변수로 음수값을 사용할수 없다.
// 사용법 : 변수명.substring(시작 index, 끝 index);
// 사용법 : 변수명.substring(시작 index);
console.log("\n ----- substring() ----- \n");
console.log("원본 문자열 : " + str7);
str8 = str7.substring(4);
console.log("substring(4)로 가져온 문자열 : " + str8);
str8 = str7.substring(4, 7);
console.log("substring(4, 7)로 가져온 문자열 : " + str8);
str8 = str7.substring(-9, -6);
console.log("substring(-9, -6)로 가져온 문자열 : " + str8); // 인식 못함

// substr() : slice()와 비슷한 기능, 두번째 매개변수가 추출할 문자열의 길이를 뜻함
// 두번째 매개변수가 없을 경우 문자열의 끝까지 가져온다.
// 사용법 : 변수명.substr(시작 index, 글자수); 또는 변수명.substr(시작 index);
console.log("\n ----- substr() ----- \n");
console.log("원본 문자열 : " + str7);
str8 = str7.substr(4, 3);
console.log("substr(4, 3)로 가져온 문자열 : " + str8);
str8 = str7.substr(4);
console.log("substr(4)로 가져온 문자열 : " + str8);

// replace() : 검색한 문자를 지정한 문자로 변환, 검색된 첫번쨰 문자열만 변경한다.
// 원본은 그대로 두고 새 문자열을 반환한다.
// 검색된 모든 문자열을 변경하려면 정규표현식을 사용해야한다.
// 사용법 : 변수명.replace(검색할 문자열, 변경할 문자열);
console.log("\n ----- replace() ----- \n");
console.log("원본 문자열 : " + str7);
let str9 = str7.replace("바나나", "몽키바나나");
console.log("replace() 사용 후 : " + str9);
str9 = str8.replace(", ", "");
console.log("replace() 로 문자를 삭제 : " + str9);
str9 = str7.replace(/, /g, ""); // / => 정규표현식 시작 , => 내용 /g => 정규표현식 끝
console.log("replace()와 정규표현식으로 검색되는 모든 문자 변경 : " + str9);

// toUpperCase() : 영문자를 모두 대문자로 변경
// 사용법 : 새 변수 = 변수명.toUpperCase();
console.log("\n ----- toUpperCase() ----- \n");
let str10 = "Hello World!";
console.log("원본 문자열 : " + str10);
let str11 = str10.toUpperCase();
console.log("toUpperCase() 사용 후 : " + str11);

// toLowerCase() : 영문자를 모두 소문자로 변경
// 사용법 : 새 변수 = 변수명.toLowerCase();
console.log("\n ----- toLowerCase() ----- \n");
str10 = "Hello World!";
console.log("원본 문자열 : " + str10);
str11 = str10.toLowerCase();
console.log("toLowerCase() 사용 후 : " + str11);

// concat() : 2개 이상의 문자열을 하나의 긴 문자열로 변환, 새 문자열로 반환
// 사용법 : 새 변수 = 문자열1.concat(문자열2, ...);
console.log("\n ----- concat() ----- \n");
console.log("원본 문자열 str10 : " + str10 + "\t" + "str11 : " + str11);
let str12 = str10.concat(" ", str11);
console.log("concat() 사용 후 : " + str12);
str12 = str10 + " " + str11; // concat() 결과와 같다.
console.log("str10 + ' ' + str11 : " + str12);

// trim() : 문자열에 포함된 앞, 뒤의 공백을 삭제한다.
// 사용법 : 새 변수 = 문자열.trim();
console.log("\n ----- trim() ----- \n");
const str13 = "     공백이 많은 문자열      ";
console.log("원본 문자열 : " + str13);
let str14 = str13.trim();
console.log("trim() 사용 후 : " + str14);

// charAt() : 지정한 index에 있는 문자를 반환
// 사용법 : 새 변수 = 문자열.charAt(index);
console.log("\n ----- charAt() ----- \n");
console.log("원본 문자열 : " + str13);
str14 = str13.charAt(5);
console.log("charAt(5)로 가져온 문자 : " + str14);

// split() : 문자열을 지정한 문자를 기준으로 하여 전부 잘라내어 배열로 반환한다.
// 사용법 : 새 배열 = 문자열.split(문자);
console.log("\n ----- split() ----- \n");
const str15 = "사과,배,감,귤,복숭아,포도";
console.log("원본 문자열 : " + str15);
console.log("원본 문자열의 타입 : " + typeof str15);
let arr1 = str15.split(",");
console.log("split() 사용 후 : ");
console.log(arr1);
console.log("split() 사용 후 타입 : " + typeof arr1);

// indexOf() : 문자열 내에서 지정한 검색어를 검색하여 해당 index 번호를 반환
// 사용법 : 변수 = 문자열.indexOf(검색어); 또는 변수 = 문자열.indexOf(검색어, 검색 위치);
console.log("\n ----- indexOf() ----- \n");
const str16 = "replace()와 정규표현식으로 검색되는 모든 문자 변경 : 사과바나나파인애플";
console.log("원본 문자열 : " + str16);
let index = str16.indexOf("모든");
console.log("indexOf('모든')의 위치 : " + index);
index = str16.indexOf(" ", 30);
console.log("indexOf(' ', 30)의 위치 : " + index);

// lastIndexOf() : 문자열 내에서 지정한 검색어를 뒤에서부터 검색하여 해당 index 번호를 반환
// 사용법 : 변수 = 문자열.lastIndexOf(검색어) 또는 변수 = 문자열.lastIndexOf(검색어, 검색 위치);
console.log("\n ----- lastIndexOf() ----- \n");
console.log("원본 문자열 : " + str16);
index = str16.lastIndexOf(" ");
console.log("lastIndexOf('모든')의 위치 : " + index);
index = str16.lastIndexOf(" ", 30);
console.log("lastIndexOf(' ', 30)의 위치 : " + index);

// search() : indexOf()와 비슷한 기능, 정규표현식에서 사용이 가능하다.
// indexOf()와 달리 두번째 매개변수가 없다.
// 사용법 : 변수 = 문자열.search(문자열);
console.log("\n ----- search() ----- \n");
const str17 = "사과,배,감,귤,복숭아,포도,사과,배,감,귤,복숭아,포도";
console.log("원본 문자열 : " + str17);
index = str17.search("감");
console.log("search('감')으로 검색한 위치 : " + index);

// match() : 정규표현식에서 사용, 검색된 내용을 배열로 반환
// 사용법 : 새 배열 = 문자열.match();
console.log("\n ----- match() ----- \n");
console.log("원본 문자열 : " + str17);
arr1 = str17.match(/귤/g);
console.log("match(/귤/g)로 검색 : " );
console.log(arr1);

// includes() : 지정한 문자열이 존재하는지 아닌지 확인해주는 명령어, ES6이후에서 사용가능
// 사용법 : 변수 = 문자열.includes(문자열);
console.log("\n ----- includes() ----- \n");
console.log("원본 문자열 : " + str17);
let bVal = str17.includes("귤");
console.log("includes('귤')로 확인 : " + bVal);
bVal = str17.includes("한라봉");
console.log("includes('한라봉')로 확인 : " + bVal);

// includes() 가 없없을떄 사용했던 방법
console.log("\n ----- includes() 없었을때 indexOf() 사용한 예시 ----- \n");
index = str17.indexOf("귤");
console.log("indexOf('귤')");
console.log("indexOf('귤')로 확인 : " + index);

// startWith() : 지정한 문자열로 시작하면 true 아니면 false
// 사용법 : 변수 = 문자열.startWith(문자열);
console.log("\n ----- startWith() ----- \n");
console.log("원본 문자열 : " + str17);
bVal = str17.startsWith("사과");
console.log("startWith('사과')로 확인 : " + bVal);
bVal = str17.startsWith("바나나");
console.log("startWith('바나나')로 확인 : " + bVal);

// endWith() : 지정한 문자열로 종료하면 true 아니면 false
// 사용법 : 변수 = 문자열.endWith(문자열);
console.log("\n ----- endWith() ----- \n");
console.log("원본 문자열 : " + str17);
bVal = str17.endsWith("포도");
console.log("startWith('포도')로 확인 : " + bVal);
bVal = str17.endsWith("바나나");
console.log("startWith('바나나')로 확인 : " + bVal);

