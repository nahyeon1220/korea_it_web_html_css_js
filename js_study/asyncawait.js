/*
 * async(비동기 함수 정의 키워드)
 * await(비동기 함수 동기 호출 키워드): async 함수 내부에서만 사용 가능, promise가 resolve 될 때까지 그 결과를 변수에 할당
 */

// const promise = new Promise((resolve) => resolve("개발자"));

// async function getDate() {
//   //async 키워드가 함수 자체를 비동기 함수로 만듦 (함수 자체가 promise)
//   return promise; //이렇게 한다고 해서 promise에 promise가 감싸진 형태는 아님
// }

// const user = getDate();
// user.then((name) => console.log(name));

// function getUserReq() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("사용자 데이터를 받아옴");
//       return resolve("서버1");
//     }, 2000);
//   });
// }

// async function getData() {
//   // getUserReq(); //비동기 함수가 끝날 때까지 다음 작업을 기다려주지 않음 (비동기)
//   const result = await getUserReq(); //await는 해당 비동기 작업이 완료될 때까지 다음 작업을 하지 않고 기다림
//   const result2 = await getUserReq();
//   return "오나현";
// }

// function getDataPromise() {
//     //이전의 promise 버전
//   return getUserReq()
//     .then(() => {
//       return getUserReq();
//     })
//     .then(() => {
//       return "오나현";
//     });
// }

// const user = getDataPromise();
// user.then((name) => console.log(name));

function getUserReq() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("사용자 데이터를 받아옴");
      return resolve("서버1");
    }, 2000);
  });
}

async function getUser() {
  await getUserReq();
  return "오나현";
}

async function getTodo() {
  await getUserReq();
  return ["밥 먹기", "잠 자기"];
}

async function getData() {
  const user = await getUser();
  const todo = await getTodo();
  console.log('${user}님 ${todo}를 해야합니다.');
}

getData();
