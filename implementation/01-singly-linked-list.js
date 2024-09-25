// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }

        return {
            head: this.head,
            length: this.length
        };

        // Write your hypothesis on the time complexity of this method here
        // Time complexity of this method is O(1) because we are directly accessing the head of
        // the linked list and adding a new node to the head of the linked list.
    }

    addToTail(val) {
        // Write your hypothesis on the time complexity of this method here
        // Time complexity of this method is O(n) because we are traversing the linked list to
        // find the last node and then adding a new node to the end of the linked list.

        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
            this.length++;
        }

        return {
            head: this.head,
            length: this.length
        };

    }

    removeFromHead() {
        if (!this.head) return;
        let curr = this.head;
        if (!this.head.next) {
            this.head = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;

        return curr;

        // Write your hypothesis on the time complexity of this method here
        // Time complexity of this method is O(1) because we are directly accessing the head of
        // the linked list and removing the head node.
    }

    removeFromTail() {
        if (!this.head) return;

        let removedNode;
        if (!this.head.next) {
            removedNode = this.head
            this.head = null;
        } else {
            let curr = this.head;
            while (curr.next.next) {
              curr = curr.next;
            }
            removedNode = curr.next
            curr.next = null;
        }
        this.length--;

        return removedNode;

        // Write your hypothesis on the time complexity of this method here
        // Time complexity of this method is O(n) because we are traversing the linked list to
        // find the second last node and then removing the last node from the linked list.
    }

    peekAtHead() {
        if (!this.head) return;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // Time complexity of this method is O(1) because we are directly accessing the head of
        // the linked list.
    }

    print() {
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }

        // Write your hypothesis on the time complexity of this method here
        // Time complexity of this method is O(n) because we are traversing the linked list to 
        // print all the elements of the linked list.
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
