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

// функция ищет пустое значение и выдает массив из вертикального и горизонтального индекса или false
function searchEmptyValue(arr) {
  for (let v = 0; v < arr.length; v++) {
    for (let g = 0; g < arr.length; g++) {
      if (arr[v][g] === '-') {
        return [v, g];
      }
    }
  }
  return false;
}

// функция которая ищет элемент по горизонтали и выводит true если находит или false
function parsingG(vInd, arr, el) {
  const res = arr[vInd].filter((element) => element === el);
  if (res.length > 0) {
    return true;
  }
  return false;
}

// функция которая ищет элемент по вертикали и выводит true если находит или false
function parsingV(gInd, arr, el) {
  for (let i = 0; i < 9; i++) {
    if (arr[i][gInd] === el) {
      return true;
    }
  }
  return false;
}

// функция которая ищет элемент в кубе и выводит true если находит или false
function parsingBox(vInd, gInd, arr, el) {
  if (vInd < 3 && gInd < 3) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (arr[i][j] === el) {
          return true;
        }
      }
    }
    return false;
  }
  if (vInd > 2 && vInd < 6 && gInd < 3) {
    for (let i = 3; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        if (arr[i][j] === el) {
          return true;
        }
      }
    }
    return false;
  }
  if (vInd > 5 && gInd < 3) {
    for (let i = 6; i < 9; i++) {
      for (let j = 0; j < 3; j++) {
        if (arr[i][j] === el) {
          return true;
        }
      }
    }
    return false;
  }
  if (vInd < 3 && gInd > 2 && gInd < 6) {
    for (let i = 0; i < 3; i++) {
      for (let j = 3; j < 6; j++) {
        if (arr[i][j] === el) {
          return true;
        }
      }
    }
    return false;
  }
  if (vInd > 2 && vInd < 6 && gInd > 2 && gInd < 6) {
    for (let i = 3; i < 6; i++) {
      for (let j = 3; j < 6; j++) {
        if (arr[i][j] === el) {
          return true;
        }
      }
    }
    return false;
  }
  if (vInd > 5 && gInd > 2 && gInd < 6) {
    for (let i = 6; i < 9; i++) {
      for (let j = 3; j < 6; j++) {
        if (arr[i][j] === el) {
          return true;
        }
      }
    }
    return false;
  }
  if (vInd < 3 && gInd > 5) {
    for (let i = 0; i < 3; i++) {
      for (let j = 6; j < 9; j++) {
        if (arr[i][j] === el) {
          return true;
        }
      }
    }
    return false;
  }
  if (vInd > 2 && vInd < 6 && gInd > 5) {
    for (let i = 3; i < 6; i++) {
      for (let j = 6; j < 9; j++) {
        if (arr[i][j] === el) {
          return true;
        }
      }
    }
    return false;
  }
  if (vInd > 5 && gInd > 5) {
    for (let i = 6; i < 9; i++) {
      for (let j = 6; j < 9; j++) {
        if (arr[i][j] === el) {
          return true;
        }
      }
    }
    return false;
  }
}

// проверяет можно ли пустое место заменить на определенное число и возвращает либо true либо false
function x3Check(arr, arrInd, num) {
  const test = [];
  test.push(parsingG(arrInd[0], arr, String(num)));
  test.push(parsingV(arrInd[1], arr, String(num)));
  test.push(parsingBox(arrInd[0], arrInd[1], arr, String(num)));
  let res = test.find((el) => el === true);
  if (res === true) {
    return false;
  }
  return true;
}

