// 1. Use strict
// added in ES5
// use this for Vanila Javascript
'use strict';

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Variable
// let (added in ES6)

let globalName = 'global name';

{
    let name = 'ian';
    console.log(name);
    name = 'hello';
    console.log(name);
}

console.log(name);
console.log(globalName);

// var (Don't ever use this!)
// var hoisting(move declaration from bottom to top)
// 어디에 선언이 되어있던지 항상 제일 위로 선언을 끌어 올려주는것.
// has no block scope

{
    console.log(age);   // undefined  변수는 정의되어있지만 값이 없다.
    age = 4;
    console.log(age);   // 4
    var age;
}
console.log(age);   // 4     <- 블럭 스코프와 상관없이 블럭 외부에서 변수를 호출 할 수 있다.

//////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3. Constants
// 값을 선언함과 동시에 이후에 절대 값을 바꿀 수 없음
// - 보안상의 이유로 const를 사용
// - 다양한 스레드가 동시에 실행될때, 값을 동시에 변경하는 경우를 방지
// - 개발자의 실수를 방지할 수 있다.

// 자바스크립트를 개발할때는 let이나 const를 사용한다.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Variable types(변수타입)
// primitive, single item : 더이상 작은 단위로 나눠질 수 없는 변수타입. (number, String, boolean, null, undefined, symbol)
// object, box container  : single item들을 여러개로 묶어서 한 단위로 관리할 수 있게 해주는 변수타입
// function, first-class function : 자바스크립트에서는 function도 객체의 타입으로 변수에 할당이 가능하다. 파라미터로도 전달이 가능하다.

// number의 특별한 숫자값 :
//      infinity, -infinity, NaN
const infinity = 1 / 0;                 // infinity
const negativeInfinity = -1 / 0;        // -infinity
const nAn = 'not a number' / 2;         // NaN

// bigInt (신규도입, 아직 검증되지않음)
//  자바스크립트에서는 숫자의 최대값을  -2^53 ~ 2^53까지 표현이 되는데
const bigInt = 12312312312312453250235023048234812737123721737123717127317237127n; 
// 처럼 2^53이 넘는 값에 n을 붙이면 그 값을 표현하고 사용할 수 있다.

// String 
const char = 'c';
const angelina = 'angelina';  // 문자와 문자열 모두 '' 으로 표현가능하다.

    // template literals(String)
    //  ``안에 ${변수명}으로 원하는 변수를 표현 할 수 있다.
    const helloIan = `hi ${angelina}!`

// boolean
//      false: 0, null, undefined, NaN, ''
//      true: any other value
const canRead = true;
const test = 3 < 1; // false

// null : 내가 명확하게 변수의 값이 비어있음을 의미한다.
let nothing = null;

// undefined: 변수선언은 되었지만 지정된 값이 없음을 의미한다.
let x;  // 또는 let x = undefined; 처럼 선언도 가능하다.

// symbol : 동시다발적인 코드에서 우선순위를 주거나, 고유식별한 식별자가 필요할 때 사용한다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);   // false

const gSymbol1 = Symbol.for('id');  
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);  // true

/////////////////////////////////////////////////////////////////////////////////////////////

// 5. Dynamic typing : dynamically typed language
let text = 'hello';     // value: hello, type: String
    console.log(text.charAt(0));   // h
text = 7;               // value: 7, type: number     String -> number로 객체타입이 변했음.
text = '1' + 5;         // value: '15', type: String  String + number = String으로 연산
text = '8' / '2';       // value: 4, type: number     

    console.log(text.charAt(0));   // 에러발생.

    // 이러한 dynamic typing의 문제를 해결하기위해 TypeScript를 사용한다.(***)

////////////////////////////////////////////////////////////////////////////////////////////

// object
const ian = {name: 'ian', age: 30};
ian.age = 20;   // 이런식으로 object의 값을 변경가능하다.
