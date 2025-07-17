//단축 평가 논리 연산
// &&, ||
const name = "오나현";

console.log(!!name && !!"육나현");
//&& (AND) 연산
//앞의 값이 true일 때, 뒤의 값을 리턴
//앞의 값이 false일 때, false를 리턴
console.log(false && 10);
console.log(true && 10);
console.log(!!name && 0);

//|| (OR) 연산
//앞의 값이 false일 때, 뒤의 값을 리턴
//앞의 값이 true일 때, true를 리턴
console.log(false || 10);
console.log(true || 10);

//nullish 병합 연산자 => ??
//앞의 값이 null 또는 undefined가 아니면 앞의 값, 그 외에는 뒤의 값
console.log(null ?? 100);
console.log(undefined ?? 100);
console.log(20 ?? 100);
console.log(0 ?? 100);
console.log("" ?? 100);
