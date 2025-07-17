//배열
const arr1 = []; //빈 배열
const arr2 = new Array(); //빈 배열

//새로운 요소 추가
//push: 배열의 끝에 요소를 추가 (차례대로 추가됨)
arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);
console.log(arr1);

arr2.push(10);
arr2.push(20);
arr2.push(30);
arr2.push(40);
console.log(arr2);

//배열과 객체의 참조 비교 -> 자바스크립트에서 객체(배열 포함)는 참조 타입
// === (일치연산자)를 사용하게 되면 객체의 경우, 메모리 주소(참조)가 같은지 비교
console.log(arr1 === arr2);
//arr1과 arr2는 내용은 같지만 서로 다른 메모리 공간에 있는 별개의 객체이므로 false가 출력

const obj1 = { key: "value1", key2: "value2" };
const obj2 = { key: "value1", key2: "value2" };
console.log(obj1 === obj2); //obj1과 obj2 내용이 같더라도 별개의 객체

//JSON (Javascript Object Notation): 자바스크립트 객체/배열과 JSON 문자열 간의 변환
//JSON.stringify(): 자바스크립트 객체 또는 배열을 JSON 형식의 문자열로 변환
//JSON.parse(): JSON 문자열을 자바스크립트 객체 또는 배열을 변환

const json1 = JSON.stringify(arr1);
const json2 = JSON.stringify(arr2);
console.log(json1);
console.log(typeof json2);
console.log(json1 === json2);
//원래는 배열이었지만, stringify를 하면서 문자열로 변환되기 때문에 type과 그 안의 값이 같기 때문에 true로 출력
//JSON 문자열은 값이 같으면 동일하다고 판단

const json3 = JSON.stringify(obj1);
const json4 = JSON.stringify(obj2);
console.log(json3);
console.log(json4);
console.log(json3 === json4);

//배열의 다양한 기본 내장 함수
const names = ["오나현", "육나현", "칠나현"];
names.push("팔나현");
console.log(names);

//const: 한 번 할당하면 값을 변경할 수 없는 상수를 선언할 때 사용
//Q. names는 값을 변경할 수 없는 상수인데 어떻게 push를 할 수 있을까?
//A. const는 재할당을 금지하는 것이지, 참조하는 객체(배열)의 내용 변경까지 막는 것은 아님
//ex. names = ["팔나현"]; 이런 재할당이 금지!

//요소 제거: pop() -> 배열의 마지막 요소를 제거하고 그 요소를 반환
console.log(names.pop());

//요소 수정/삽입/제거: splice(삽입될 인덱스, 제거할 개수, 추가할 요소 등등...)
names.splice(1, 0, "사나현");
console.log(names);

//요소 찾기: find() -> 주어진 테스트 함수를 만족하는 배열의 첫 번째 요소를 반환
const findFx = (n) => n === "사나현";
const foundName = names.find(findFx);
console.log(foundName); //자바에서 filter와 유사한 기능

const students = [
  { name: "오나현", age: 23 },
  { name: "육나현", age: 24 },
  { name: "칠나현", age: 23 },
  { name: "팔나현", age: 26 },
  { name: "구나현", age: 23 },
];

console.log(students.find((s) => s.name === "육나현"));

//값 존재 여부: includes() - 배열에 특정 값이 포함되어 있는지 boolean으로 반환
console.log(names.includes("오나현"));
//names에 해당 값이 포함되어 있으면 true, 포함되어 있지 않으면 false

//필터링: filter() - 주어진 조건 함수를 통과하는 모든 요소로 새로운 배열을 생성
//원본 배열은 영향을 주지 않음
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter((n) => n % 2 === 0));
const even = numbers.filter((n) => n % 2 === 0);
console.log(students.filter((student) => student.age === 23));

//students.stream().filter(student -> student.getAge == 27).collection(Collector.toList());

//map() - 배열의 모든 요소에 대해 주어진 함수를 호출(적용)한 결과를 모아 새로운 배열로 반환
console.log(numbers.map((n) => n * 10));
console.log(
  students.map((student) => {
    if (student.age === 23) {
        //나이가 23인 학생은 이름만 있는 새로운 객체를 반환
      return {
        name: student.name,
      };
    }
    return student;
  })
);

