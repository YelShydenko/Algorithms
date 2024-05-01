// Задача 1.

// Реализовать методы в классе MyLinkedList.

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class MyLinkedList {
//     constructor() {
//         this.head = null; 
//         this.size = 0; 
//     }

//     pushToIndex(index, value) {
//         if (index < 0 || index > this.size) {
//             throw new Error('Invalid index');
//         }

//         const newNode = new Node(value);
//         if (index === 0) {
//             newNode.next = this.head;
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 current = current.next;
//             }
//             newNode.next = current.next;
//             current.next = newNode;
//         }

//         this.size++;
//     }

//     removeFirst() {
//         if (!this.head) {
//             throw new Error('List is empty');
//         }

//         this.head = this.head.next;
//         this.size--;
//     }

//     removeLast() {
//         if (!this.head) {
//             throw new Error('List is empty');
//         }

//         if (!this.head.next) {
//             this.head = null;
//         } else {
//             let current = this.head;
//             while (current.next.next) {
//                 current = current.next;
//             }
//             current.next = null;
//         }

//         this.size--;
//     }

//     removeAtIndex(index) {
//         if (index < 0 || index >= this.size) {
//             throw new Error('Invalid index');
//         }

//         if (index === 0) {
//             this.head = this.head.next;
//         } else {
//             let current = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 current = current.next;
//             }
//             current.next = current.next.next;
//         }

//         this.size--;
//     }
// }

// const linkedList = new MyLinkedList();

// linkedList.pushToIndex(0, 1);
// linkedList.pushToIndex(1, 3);
// linkedList.pushToIndex(1, 2); 

// console.log(linkedList.size); 

// linkedList.removeFirst(); 
// console.log(linkedList.size); 

// linkedList.removeLast(); 
// console.log(linkedList.size); 

// linkedList.removeAtIndex(0); 
// console.log(linkedList.size); 

// Задача 2.

// Написать метод класса MyLinkedList (придумать алгоритм), который определяет, есть ли в односвязном спуске петля. Нельзя использовать дополнительные коллекции.

// boolean hasLoop() { … }

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class MyLinkedList {
//     constructor() {
//         this.head = null; 
//     }

//     append(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     hasLoop() {
//         if (!this.head || !this.head.next) {
//             return false; 
//         }

//         let slow = this.head;
//         let fast = this.head.next;

//         while (fast && fast.next) {
//             if (slow === fast) {
//                 return true; 
//             }
//             slow = slow.next;
//             fast = fast.next.next;
//         }

//         return false; 
//     }
// }

// const linkedList = new MyLinkedList();

// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// const loopNode = new Node(4);
// linkedList.head.next.next.next = loopNode; 
// loopNode.next = linkedList.head.next; 

// console.log(linkedList.hasLoop()); 

// const linkedList2 = new MyLinkedList();
// linkedList2.append(1);
// linkedList2.append(2);
// linkedList2.append(3);

// console.log(linkedList2.hasLoop()); 

// Задача 3.

// Написать метод класса MyLinkedList (придумать алгоритм), который находит значение К-ого элемента с конца в односвязном списке. Алгоритм должен проходить список один раз.

// int getValueFromTail(int positionFromTail) { … }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null; 
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    getValueFromTail(positionFromTail) {
        if (positionFromTail < 0) {
            throw new Error('Invalid position from tail');
        }

        let fast = this.head;
        let slow = this.head;

        for (let i = 0; i < positionFromTail + 1; i++) {
            if (!fast) {
                throw new Error('Position from tail is out of bounds');
            }
            fast = fast.next;
        }

        while (fast) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow.value;
    }
}

const linkedList = new MyLinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log(linkedList.getValueFromTail(0)); 
console.log(linkedList.getValueFromTail(2)); 
console.log(linkedList.getValueFromTail(4)); 
