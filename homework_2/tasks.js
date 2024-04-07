// Задание 1 (из лекции)
// Дан отсортированный массив arr[] из n элементов.
// Напишите рекурсивную функцию для поиска заданного элемента x в arr[] и возврата индекса x в массиве
// Пример:
//   find([11, 22, 44, 50, 60, 86, 114, 140, 145, 190], 114) вернёт 6
//   find([1, 24, 30, 46, 60, 100, 120, 133, 270], 114) вернёт -1

function find(array, x, left = 0, right = array.length - 1) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (array[mid] === x) {
    return mid;
  }

  if (x < array[mid]) {
    return find(array, x, left, mid - 1);
  }

  return find(array, x, mid + 1, right);
}

const arr1 = [11, 22, 44, 50, 60, 86, 114, 140, 145, 190];
console.log(find(arr1, 114));

const arr2 = [1, 24, 30, 46, 60, 100, 120, 133, 270];
console.log(find(arr2, 114));

// Задание 2
// Дан неотсортированный массив целых чисел. Написать рекурсивную функцию поиска максимального элемента.
// Пример:
//   findMax([4, 7, 9, 2, 15, 14]) вернёт 15

function findMax(arr) {

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

const array = [4, 7, 9, 2, 15, 14];
const maxElement = findMax(array);
console.log(maxElement); // Вывод: 15

// Дополнительно и необязательно: решить ту же задачу при помощи хвостовой рекурсии.

// Задание 3
// Есть монеты достоинством 10, 5, 3 и 2 копейки. На вход передаётся массив, с имеющимся набором монет
// (значение элемента определяет достоинство монеты) и сумма, которую нужно заплатить.
// Напишите рекурсивную функцию которая должна определить, можно ли заплатить требуемую сумму имеющимися монетами.
// Пример:
//   canPay([5, 5, 3, 3, 2], 11) вернёт true
//   canPay([5, 5, 3, 3, 2], 12) вернёт true
//   canPay([5, 5, 3, 3, 2], 4)  вернёт false
//   canPay([5, 2, 5, 5, 2], 13) вернёт false
//   canPay([3, 2, 10, 2, 3], 16) вернёт true
//   canPay([3, 2, 10, 2, 5], 16) вернёт false

function canPay(coins, amount) {
  function dfs(index, remaining) {
    if (remaining === 0) {
      return true;
    }

    if (index >= coins.length || remaining < 0) {
      return false;
    }

    const takeCurrentCoin = dfs(index + 1, remaining - coins[index]);

    const skipCurrentCoin = dfs(index + 1, remaining);

    return takeCurrentCoin || skipCurrentCoin;
  }

  return dfs(0, amount);
}

console.log(canPay([5, 5, 3, 3, 2], 11));
console.log(canPay([5, 5, 3, 3, 2], 12));
console.log(canPay([5, 5, 3, 3, 2], 4));
console.log(canPay([5, 2, 5, 5, 2], 13));
console.log(canPay([3, 2, 10, 2, 3], 16));
console.log(canPay([3, 2, 10, 2, 5], 16));
