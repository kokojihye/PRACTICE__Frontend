/* JS workspace */

//01. prompt method
// window.prompt(); -> window 생략가능
//prompt("프롬프트 다이얼로그에 표시될 문자열"); -> 직접 문자열 작성 가능

const promptMessage = "프롬프트에 표시할 문자열"; //상수값에 문자열 저장
const result = prompt(promptMessage); //상수값 result에 프롬프트 메세지에서 들어온 값 저장
console.log(result); //결과값을 콘솔창에 출력

//02. 백틱(``)을 이용해 표현식 삽입하기
/* 
  템플릿 리터럴은 표현식을 내장할 수 있는 문자열 표현법이다. 이는 문자열의 내용에 데이터를 삽이반다는 것을 의미한다.
  템플릿 리터럴로 표현한 문자열 내부에 플레이스홀더(${})를 기입하고, 그 안에 데이터를 기입하면 데이터는 문자열의 멤버가 된다.
*/
let str = "따옴표 문자열";
console.log(str);
str = `백틱 문자열??!!`;
console.log(str);

let name = "고지혜";
let phoneNum = prompt("당신의 전화번호는?");
console.log(
  `제 이름은 ${name}이고, 제 번호는 ${phoneNum}입니다. 저는 ${24}세입니다. 저의 취미는 ${prompt(
    "당신의 취미는?"
  )}입니다.`
);
/*
  백틱 안의 내용은 그대로 콘솔창에 출력되고, 템플릿 리터럴로 표현한 문자열 내부에서 prompt를 받아도 되고,
  외부에서 받아도 괜찮다. 그리고 플레이스 홀더 내에 직접적으로 값을 입력할 수도 있다.
*/

//03. DOM :: Document Object Model
/*
    웹브라우저는 HTML 문서를 해석하고(DOM Tree구성), 화면을 통해 해석된 결과를 보여준다.
    해석된 HTML 코드를 화면을 통해 보여주는 과정을 '렌더링'이라고 한다.

    DOM이란 JS를 활용해 웹 화면에 콘텐츠 추가, 삭제, 수정하거나 이벤트를 처리할 수 있도록
    프로그래밍 인터페이스를 제공한다.
*/
