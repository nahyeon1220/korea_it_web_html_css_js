//웹페이지의 리소스가 전부 다 로드되었을 때 (브라우저에 웹페이지가 켜질 때)
window.onload = () => {
  const root = document.querySelector("#root");

  //여기서 렌더링을 시켜주는 함수를 호출
  render(root);
};

function render(targetElement) {
  targetElement.innerHTML = app();
}
