const todoInput = document.querySelector("#todoInput");
const addTodoBtn = document.querySelector("#addTodoBtn");
const todoList = document.querySelector("#todoList");

let todos = [];
let nextTodoId = 1;

function renderTodo() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.dataset.id = todo.id;
    //요소의 추가적인 사용자 정의 데이터 저장
    //개발자가 특정 HTML 요소에 추가적인 데이터를 저장할 목적으로 사용
    //브라우저는 이 속성들을 특별히 해석하지 않음

    if (todo.isEditing) {
      listItem.classList.add("editing");

      listItem.innerHTML = `
				<input type="text" class="edit-input" value="${todo.text}">
				<div class="todo-actions">
					<button class="save-btn">저장</button>
					<button class="cancel-btn">취소</button>
				</div>
			`;
    } else {
      listItem.innerHTML = `
				<span class="todo-text">${todo.text}</span>
				<div class="todo-actions">
					<button class="edit-btn">수정</button>
					<button class="delete-btn">삭제</button>
				</div>
			`;
    }

    todoList.appendChild(listItem);
  });
}

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
    text: todoText,
    isEditing: false, //수정 중인지 여부를 나타내는 플래그
  };

  todos.push(newTodo);
  console.log(todos);
  todoInput.value = ""; //추가하고 그 후에 빈 공백으로 설정
  todoInput.focus(); //칸을 클릭하지 않아도 자동으로 입력할 수 있도록 설정

  renderTodo();
}

function deleteTodo(id) {
  if (!confirm("정말 삭제하시겠습니까?")) {
    return;
  } else {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodo();
  }
}

function editTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id
      ? { ...todo, isEditing: true }
      : { ...todo, isEditing: false }
  );
  renderTodo();

  const editInput = todoList.querySelector(`li[data-id="${id}"] .edit-input`);
  if (editInput) {
    editInput.focus();
    editInput.select();
  }
}

function saveTodo(id, newText) {
  if (newText.trim() === "") {
    alert("수정할 내용을 입력하세요.");
    return;
  }
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, text: newText.trim(), isEditing: false } : todo
  );
  renderTodo();
}

function cancelTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, isEditing: false } : todo
  );
  renderTodo();
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

todoList.addEventListener("click", (event) => {
  const target = event.target; //클릭된 요소를 가져옴
  const listItem = target.closest("li[data-id]");
  //클릭된 요소의 가장 가까운 부모 li를 가져옴 (data에 id 속성을 가진)

  if (!listItem) return; //li 요소를 찾기를 하지 못했을 때, 함수 종료

  const todoId = parseInt(listItem.dataset.id);

  if (target.classList.contains("delete-btn")) {
    deleteTodo(todoId);
  } else if (target.classList.contains("edit-btn")) {
    editTodo(todoId);
  } else if (target.classList.contains("save-btn")) {
    const editInput = listItem.querySelector(".edit-input");
    saveTodo(todoId, editInput.value);
  } else if (target.classList.contains("cancel-btn")) {
    cancelTodo(todoId);
  }
});
