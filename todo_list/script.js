const todoInput = document.querySelector("#todoInput");
const addTodoBtn = document.querySelector("#addTodoBtn");
const todoList = document.querySelector("#todoList");

let todos = [];
let nextTodoId = 1;

function addTodo() {
  const todoText = todoInput.value.trim();
  //trim: (value로 입력된 텍스트를 가져온 후) 양쪽 공백 제거

  if (todoText === "") {
    alert("할 일을 입력해주세요.");
    return;
  }

  /* todo 형태 제작 */
  const newTodo = {
    id: nextTodoId++,
    Text: todoText,
    isEditing: false, //수정 중인지 여부를 나타내는 플래그
  };

  todos.push(newTodo);
  console.log(todos);
  todoInput.value = ""; //추가를 하고나서는 빈 공백으로 설정
  todoInput.focus(); //칸을 클릭하지 않아도 자동으로 입력할 수 있도록 설정
}
addTodoBtn.addEventListener("click", addTodo);
// 인자를 2개를 받음 1. event 이름 2. 함수명 (익명함수도 사용할 수 있음)
// 함수명을 적을 때, () 괄호가 있으면 바로 호출 / 없으면 해당 이벤트가 감지되었을 때 호출

/* 칸에 내용을 입력하고 추가를 누르지 않고 엔터만 눌러도 입력이 되도록 설정 */
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodoBtn.click();
  }
});
