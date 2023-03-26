//04단원 톺아보기
/*
    01. 함수는 '호출될 수 있는 코드 조각'이다.
    02. 함수는 선언식, 표현식 같은 방법을 이용해 만들 수 있고, 사용을 위해서는 함수를 호출해야 한다.
    03. 함수 호추시에는 반드시 함수명 뒤에 소괄호()를 붙인다.
    04. 함수 안에서 선언한 변수(지역변수)는 함수 안에서만 쓸 수 있다.
    05. 선언식은 함수 정의보다 호출문을 앞서 작성할 수 있지만, 표현식은 그럴 수 없다.
    06. 함수를 만들 때, 함수가 데이터를 반환하도록 할 수 있다.
    07. return 문은 함수를 강제로 종료시키는 역할도 한다.
*/

//04-1.함수
/*
    함수란? '호출될 수 있는 코드 조각'이다. 변수를 선언하고 데이터를 대입하면 변수의 이름을 데이터 대신
    사용할 수 있는 것처럼, 함수를 선언하면 함수의 이름을 코드 조각 대신 사용할 수 있다. 
    유지보수, 재사용에 용이하다는 장점이 있다.
*/

//04-2.함수 만들기
/*
    (0) 고려사항
        01. 함수의 기능을 적절히 표현하는 이름을 사용
        02. 명사보다 *동사*로 된 이름 사용(기능이므로)
        03. 소문자로 시작하되, 여러 단어가 섞인 경우 *카멜표기법*을 사용하자

    (1) 함수 선언식
    function 함수명(){
        //함수의 기능을 표현한 구문
    }
    => 위와 같은 선언 이후, 함수명은 중괄호 안의 기능 대신 사용될 수 있다.

    (2) 함수 표현식
    const 함수명 = function(){
        //함수의 기능을 표현한 구문
    }
    => 마찬가지로 선언 이후, 함수명은 중괄호 안의 기능 대신 사용될 수 있다.

    함수 선언식은 처음 만들어질 때부터 이름이 있다.
    함수 표현식은 익명함수로 만들어낸 후 이름을 붙여준다.

    함수 선언식으로 만들어진 함수는 호이스팅(Hoisting)이 가능하다
    -> 함수 선언문보다 호출문이 상단에 있어도 함수를 호출할 수 있다는 의미

    함수 표현식으로 만들어진 함수는 호이스팅이 불가능하다.
*/

function sayHello() {
  console.log("Hello");
}

sayHello();

const sayBye = function () {
  console.log("good bye");
};

sayBye();

//04-3.return
/*
    01. 함수를 끝낸다.(return이후 문장은 아무런 효력이 없다)
    02. 0개나 1개의 값을 반환한다.
*/

const result1 = window.confirm("확인해봐요!");
console.log(result1);

function noReturn() {
  console.log("아무것도 반환하지 않는 함수");
}

const result2 = noReturn();
console.log(result2); //undefined

function therIsReturn() {
  console.log("무언가를 반환하는 함수");
  return 10;
}

const result3 = therIsReturn();
console.log(result3); //10

//04-4.매개변수(parameter)와 인자(argument)
/*
    function sayFood(food1, food2){
        console.log(food1);
        console.log(food2);
        console.log("먹고싶다!");
    }

    sayFood("치킨", "피자");
    sayFood("샐러드", "요거트");

    *argument: 인자(치킨, 피자)란 함수 호출 시 전달하는 데이터이다.
    *parameter: 매개변수(food1, food2)란 인자를 전달받기 위해 만들어 둔 변수이다.
    
*/

//예제4-1. anything으로 받은 문자열을 num만큼 반복해서 출력하기
function sayAnything(anything, num) {
  for (let i = 0; i < num; i++) {
    console.log(anything);
  }
}

sayAnything("열공 열공!", 2);
sayAnything("홧팅 홧팅!", 4);
