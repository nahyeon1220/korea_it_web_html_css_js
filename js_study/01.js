//변수 선언 -> let, const
//let: 값을 재할당할 수 있는 변수를 선언할 때 사용

let name = "오나현";
console.log(name);
name = "육나현";
console.log(name);

//const: 한 번 할당하면 값을 변경할 수 없는 상수를 선언할 때 사용
const age = 23;
console.log(age);
// age = 24;
// console.log(age);

//연산자
// == (동등연산자): 값만 비교, 필요한 경우 알아서 암시적 타입 변환
let data1 = 10;
let data2 = "10";
let result = data1 == data2
console.log(result)

// === (일치연산자) : 값과 타입을 모두 엄격하게 비교
let result2 = data1 === data2
console.log(result2)

//typeof 연산자 : 변수의 데이터 타입을 확인
console.log(typeof data1, typeof data2)

//문자열 연결과 숫자 출력의 차이
console.log("1" + "2")
console.log(1, 2)

//not 연산자
console.log(!1) //1: true
console.log(!0) //0: false
console.log(!"a")
console.log(!"")
console.log(!null)
console.log(!!null)
//!! -> 값을 명시적으로 boolean 타입으로 변환하는 일반적인 방법

console.log("".length > 0)
console.log(!!"" === false)

let data = {
    name: "오나현",
    age: 23,
};

if (!data) {
    console.log("사용자 정보가 없습니다.")
} else if (data.name === "육나현") {
    console.log("사용자 이름이 일치합니다.")
} else if (data.age === 23) {
    console.log("사용자의 이름은 일치하지 않지만 나이는 일치합니다.")
} else {
    console.log("사용자가 일치하지 않습니다.")
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}