import Material from "../Material/index.types";

// localStorage에서 배열 가져오기
export function getArrayFromLocalStorage(key: string): Material[] {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

// locasStorage에 배열 저장하기
export function saveArrayToLocalStorage(key: string, array: Material[]) {
  localStorage.setItem(key, JSON.stringify(array));
}

export function addToLocalStorageArrayWithUniqueID(key: string, newItem: Material) {
  let array = getArrayFromLocalStorage(key);

  // 같은 id를 갖는 자료 삭제 후 새로 저장
  array = array.filter((item: Material) => item.id !== newItem.id);
  array.push(newItem);
  saveArrayToLocalStorage(key, array);
}