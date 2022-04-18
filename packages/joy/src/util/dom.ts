//한 개의 요소
export const $ = <T extends HTMLElement>(selector: string): T => {
  const element = document.querySelector(selector) as T;
  if (element === null) throw new Error("element is null");
  return element;
};
//버튼 타입별 요소
export const $btn_type = (type: string) => $(`button[data-submit="${type}"]`);

//여러 개의 요소
export const $all = <T extends HTMLElement>(selector: string) => {
  const elements = document.querySelectorAll(selector);
  if (elements === null) throw new ReferenceError("element is null");
  return elements as NodeListOf<T>;
};

//로딩 이미지 생성
//토글이란 on/off의 스위치 개념. 현재는 loading이라는 클래스가 나타날 때까지 로딩 이미지가 생성됨.
export const toggleLoading = () => $(".loading").classList.toggle("hidden");
