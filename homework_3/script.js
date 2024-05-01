// Задача 1

// Написать алгоритм мёржинга двух отсортированных массивов в отсортированный массив. 
// Исходные массивы могут быть разного размера.

// Примеры:

// merge([2, 4, 7, 11], [1, 3, 4, 5, 8, 12]) вернёт [1, 2, 3, 4, 4, 5, 7, 8, 11, 12]
//   merge([2, 4, 7, 11], [8, 12]) вернёт [2, 4, 7, 8, 11, 12]

function firstMerge(arr1, arr2) {
    let result = [];
    let i = 0; 
    let j = 0; 

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++; 
        } else {
            result.push(arr2[j]);
            j++; 
        }
    }
    
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

console.log(firstMerge([2, 4, 7, 11], [1, 3, 4, 5, 8, 12])); 
console.log(firstMerge([2, 4, 7, 11], [8, 12])); 

// Задача 2

// Решить эту задачу для трёх исходных массивов.

// Пример:
//   merge([2, 4, 7, 11], [8, 12], [4, 9, 11]) вернёт [2, 4, 4, 7, 8, 9, 11, 11, 12]

function secondMerge(arr1, arr2, arr3) {
    function mergeTwoArrays(a, b) {
        let result = [];
        let i = 0;
        let j = 0;

        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                result.push(a[i]);
                i++;
            } else {
                result.push(b[j]);
                j++;
            }
        }

        while (i < a.length) {
            result.push(a[i]);
            i++;
        }

        while (j < b.length) {
            result.push(b[j]);
            j++;
        }

        return result;
    }

    return mergeTwoArrays(mergeTwoArrays(arr1, arr2), arr3);
}

console.log(secondMerge([2, 4, 7, 11], [8, 12], [4, 9, 11]));

// Задача 3

// Реализовать класс MyStack, основанный на хранении данных в массиве.

class MyStack {
    constructor(maxSize) {
        this.stack = []; 
        this.maxSize = maxSize; 
    }

    push(value) {
        if (this.stack.length < this.maxSize) {
            this.stack.push(value);
        } else {
            throw new Error('Stack overflow: cannot push to full stack');
        }
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack underflow: cannot pop from empty stack');
        }
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

const stack = new MyStack(5); 

stack.push(0);
stack.push(1);
stack.push(2);

console.log(stack.pop()); 
console.log(stack.isEmpty()); 

stack.push(3);
stack.push(4);
stack.push(5);

try {
    stack.push(6); 
} catch (error) {
    console.log(error.message); 
}

console.log(stack.pop()); 
console.log(stack.pop()); 
console.log(stack.pop()); 
console.log(stack.pop());

console.log(stack.isEmpty()); 

try {
    console.log(stack.pop()); 
    console.log(stack.pop()); 
} catch (error) {
    console.log(error.message); 
}

// Задача 4

// Реализовать класс MyQueue, основанный на хранении данных в связном списке.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyQueue {
    constructor() {
        this.head = null; 
        this.tail = null; 
    }

    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Queue underflow: cannot pop from empty queue');
        }

        const removedValue = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null; 
        }
        return removedValue;
    }

    isEmpty() {
        return this.head === null;
    }
}

const queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.pop()); 
console.log(queue.isEmpty()); 

queue.push(4);
queue.push(5);

console.log(queue.pop()); 
console.log(queue.pop()); 
console.log(queue.pop()); 

console.log(queue.isEmpty()); 

console.log(queue.pop()); 

console.log(queue.isEmpty()); 

try {
    console.log(queue.pop()); 
} catch (error) {
    console.log(error.message); 
}
