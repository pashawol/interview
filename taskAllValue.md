### Поиск всех значений с ключом `value` в многомерном объекте

Для решения этой задачи можно использовать рекурсивный подход. Вот несколько вариантов:

#### 1. Рекурсивная функция

```javascript
function findAllValues(obj, key) {
  let values = [];

  function recursiveSearch(obj) {
    if (obj !== null && typeof obj === 'object') {
      for (const k in obj) {
        if (k === key) {
          values.push(obj[k]);
        }
        recursiveSearch(obj[k]);
      }
    }
  }

  recursiveSearch(obj);
  return values;
}

const data = {
  a: 1,
  b: {
    value: 2,
    c: {
      value: 3,
      d: 4
    }
  },
  e: {
    f: {
      value: 5
    }
  }
};

const result = findAllValues(data, 'value');
console.log(result); // [2, 3, 5]
```

#### 2. Использование стека для итеративного подхода

```javascript
function findAllValuesIterative(obj, key) {
  let values = [];
  let stack = [obj];

  while (stack.length > 0) {
    let current = stack.pop();

    if (current !== null && typeof current === 'object') {
      for (const k in current) {
        if (k === key) {
          values.push(current[k]);
        }
        stack.push(current[k]);
      }
    }
  }

  return values;
}

const data = {
  a: 1,
  b: {
    value: 2,
    c: {
      value: 3,
      d: 4
    }
  },
  e: {
    f: {
      value: 5
    }
  }
};

const result = findAllValuesIterative(data, 'value');
console.log(result); // [2, 3, 5]
```

#### 3. Использование библиотеки [`lodash`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fpawel%2FDocuments%2Finterview%2Fobject.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A232%2C%22character%22%3A19%7D%7D%5D%2C%2208a3ddb5-2998-4281-93ec-f2e272fd8dce%22%5D "Go to definition")

Если вы предпочитаете использовать сторонние библиотеки, [`lodash`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fpawel%2FDocuments%2Finterview%2Fobject.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A232%2C%22character%22%3A19%7D%7D%5D%2C%2208a3ddb5-2998-4281-93ec-f2e272fd8dce%22%5D "Go to definition") предоставляет удобные методы для работы с объектами.

```javascript
const _ = require('lodash');

function findAllValuesLodash(obj, key) {
  let values = [];

  function recursiveSearch(obj) {
    if (_.isObject(obj)) {
      _.forOwn(obj, (value, k) => {
        if (k === key) {
          values.push(value);
        }
        recursiveSearch(value);
      });
    }
  }

  recursiveSearch(obj);
  return values;
}

const data = {
  a: 1,
  b: {
    value: 2,
    c: {
      value: 3,
      d: 4
    }
  },
  e: {
    f: {
      value: 5
    }
  }
};

const result = findAllValuesLodash(data, 'value');
console.log(result); // [2, 3, 5]
```

Эти варианты помогут вам найти все значения с ключом `value` в многомерном объекте.