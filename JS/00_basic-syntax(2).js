//02단원 톺아보기
/*
    01. window의 document 속성은 창이 포함한 문서를 참조한다.
    02. document는 모든 종류의 문서에 대한 공통의 속성과 메소드를 제공한다.
    03. document의 querySelector 메소드는 선택자를 인자로 전달받아,
        전달받은 선택자와 일치하는 문서 내 첫 번째 요소를 반환한다.
    04. document의 getElementById 메소드는 id를 인자로 전달받아,
        전달받은 선택자와 일치하는 문서 내 요소를 반환한다.
    05. textContent 속성은 노드가 포함하고 있는 텍스트 콘텐츠를 표현한다.
*/

//02-0. document, methods
/*
    document는 문서(HTML, XML, SVG 등)에 대한 공통의 속성과 메소드를 제공한다.
    즉, 다양한 API(Application Programming Interface)를 제공한다.

    관련 문서 링크 참고( https://developer.mozilla.org/ko/docs/Web/API/Document )
*/

//02-1. document.querySelector
/* 
    document.querySelector 메소드는
    선택자를 인자로 전달받아, 전달받은 선택자와 일치하는 문서 내 첫 번째 요소(Element)를 반환한다.
    일치하는 요소가 없으면 '없다'는 의미의 null 데이터를 반환한다.
    인자로 전달되는 선택자는 문자열 타입의 '유효한 CSS선택자'를 의미한다.

    Ex.1)p태그 선택: document.querySelector("p");
    Ex.2)id가 text인 요소 선택: document.querySelector("#text");
    Ex.3)class가 text인 요소 선택:  document.querySelector(".text");
*/

//02-2. document.getelementByID
/*
    document.getelementByID 메소드는
    id를 인자로 전달받아, 전달받은 선택자와 일치하는 문서 내 요소(Element)를 반환한다.
    일치하는 요소가 없으면 '없다'는 의미의 null 데이터를 반환한다.
    인자로 전달되는 선택자는 문자열 타입의 'id'를 의미한다.

    Ex.1)id가 text인 요소를 선택: document.getElementByID("text");
    Ex.1)id가 image인 요소를 선택: document.getElementByID("image");
*/

//02-3. textContent
/*
    textContent 속성은 해당 노드가 포함하고 있는 텍스트 콘텐츠를 표현하는 속성이다.
    textContent를 통해 요소가 포함한 텍스트를 읽을 수도, 변경할 수도 있다.

    Ex.1)p요소를 반환받아 상수로 이름을 붙임: const p = document.querySelector("p");
    Ex.2)p요소의 textContent 속성을 콘솔에 출력해보기: console.log(p.textContent)
    Ex.3)p요소의 textContent 값을 변경해보기: p.textContent = "바꿀 내용"
*/

console.log(document.querySelector("h1")); //h1태그를 가진 첫 번째 요소를 선택해 반환
console.log(document.querySelector("p")); //p태그를 가진 첫 번쨰 요소를 선택해 반환
console.log(document.querySelector("#text")); //id=text인 첫 번째 요소를 선택해 반환
console.log(document.querySelector(".paragraph")); //class=paragraph인 첫 번째 요소를 선택해 반환

const h1 = document.querySelector("h1");
const p = document.getElementById("text");

console.log(h1.textContent); //querySelector로 가져온 상수타입 h1이 포함하는 text 내용을 출력함
h1.textContent = "h1텍스트를 변경하겠습니다.";
