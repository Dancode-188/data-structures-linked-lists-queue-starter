// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // Time complexity of this method is O(1) because we are directly accessing the head of
        // the linked list and adding a new node to the head of the linked list.

        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        const newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;

        // Write your hypothesis on the time complexity of this method here
        // Time complexity of this method is O(1) because we are directly accessing the tail of
        // the linked list and adding a new node to the tail of the linked list.
    }

    removeFromHead() {
        if (!this.head) return;

        let removedNode = this.head.value;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return removedNode;

        // Write your hypothesis on the time complexity of this method here
        // Time complexity of this method is O(1) because we are directly accessing the head of
        // the linked list and removing the head of the linked list.
    }

    removeFromTail() {
        if (!this.head) return;

        let removedValue = this.tail.value;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return removedValue;

        // Write your hypothesis on the time complexity of this method here
        // Time complexity of this method is O(1) because we are directly accessing the tail of
        // the linked list and removing the tail of the linked list.
    }

    peekAtHead() {
        if (!this.head) return;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // Time complexity of this method is O(1) because we are directly accessing the head of
        // the linked list and returning the value of the head
    }

    peekAtTail() {
        if (!this.tail) return;
        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
        // Time complexity of this method is O(1) because we are directly accessing the tail of
        // the linked list and returning the value of the tail
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
