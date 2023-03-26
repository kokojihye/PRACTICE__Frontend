//05단원 톺아보기
/*
    01. 이벤트란 '시스템 내에서 일어나는 사건'을 뜻한다
    02. 각각의 이벤트들은 이벤트 발생 시 대응으로 이벤트 핸들러(이벤트 발생시 실행되는 코드블럭)를 가질 수 있다.
    03. 이벤트 핸들러를 정의하는 작업을 이벤트 핸들러 등록이라고 한다.
    04. 이벤트 속성에 함수를 대입하는 것과 함수 호출문을 대입하는 것은 다르다.

      04-1.handleClick 함수를 대입한다(이벤트 핸들러 등록)
        button.onclick = handleClick

      04-2.handleClick 호출 후 반환값을 대입한다(굳이..?)
        button.onclick = handleClick()
*/
const inputType = document.querySelector("#typing");
const inputClick = document.querySelector("#push");

//함수 표현식
const handleTyping = function () {
  console.log("타이핑 되고 있어요!");
};

const handleClick = function () {
  console.log("클릭되고 있어요!");
};

inputType.onkeydown = handleTyping;
//inputType에서 키보드가 눌리는 이벤트가 발생하면, handleTyping 함수 실행
inputClick.onclick = handleClick;
//inputClick에서 마우스 클릭 이벤트가 발생하면, handleClick 함수 실행

//익명함수 사용
inputType.onkeydown = function () {
  console.log("타이핑 되고 있어요!");
};

inputClick.onclick = function () {
  console.log("클릭되고 있어요!");
};

//05-1.addEventListener
/*
    onclick, onkeydown과 같은 이벤트 속성을 통해 이벤트 핸들러를 등록하는 것보다 현대적인 방법

    1. onclick 사용
    target.onclick = function(){}
    2. addEventListener 사용
    target.addEventListener('click', function(){})
*/
