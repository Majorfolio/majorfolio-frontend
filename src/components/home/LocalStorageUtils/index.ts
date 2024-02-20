import Material from "../Material/index.types";

// localStorage에서 배열 가져오기
export function getArrayFromLocalStorage(key: string): Material[] {
  const data = localStorage.getItem(key);
  const array = data ? JSON.parse(data) : [];

  return array.reverse(); // 최근 읽은 자료를 앞으로 하기 위함
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