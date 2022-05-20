//.......

const fs = require('fs');
// функция которая возвращает указанную строку в массиве массивов
function returnStr(numStr) {
  const text = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
  const allText = text.split('\n');
  let str = allText[numStr];
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 9 === 0) {
      arr.push('\n');
      arr.push(str[i]);
    } else arr.push(str[i]);
  }
  str = arr.join('');
  const result = [];
  let arrStr = str.split('\n');
  arrStr = arrStr.slice(1);
  for (let i = 0; i < arrStr.length; i++) {
    result.push(arrStr[i].split(''));
  }
  // console.table(result)
  return result;
}
