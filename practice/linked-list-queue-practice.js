// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
        this.sum = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }

        this.length++;
        this.sum += val;
        return this.head;
    }

    listLength() {
        return this.length;

        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {
        return this.sum;

        // Time complexity: O(n)
    }

    averageValue() {
        return this.sum / this.listLength();

        // Time complexity: O(1)
    }

    findNthNode(n) {
        let curr = this.head;
        let i = 0;
        while (i <= n) {
            if (i === n) {
                return curr;
            }
            curr = curr.next;
            i++;
        }
        return null;

        // Time complexity: O(n)
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        if (!this.head) return null;

        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
            // How do the implementation for singly and doubly vary if at all?

        // Time complexity: O(n)
    }

    reverse() {
      let newList = new SinglyLinkedList();
      let curr = this.head;

      while (curr) {
        let newNode = new SinglyLinkedNode(curr.value);
        newNode.next = newList.head;
        newList.head = newNode;
        curr = curr.next;
      }
      return newList;

      // Time complexity: O(n) because we are traversing the list once.
    }

    reverseInPlace() {
      let prev = null;
      let curr = this.head;
      let next = null;

      while (curr) {
        next = curr.next; // Save the next node
        curr.next = prev; // Reverse the current node's pointer
        prev = curr; // Move prev and curr one step forward
        curr = next;
      }
      this.head = prev; // Update the head to the new first node

        // Time complexity: O(n) because we are traversing the list once.
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        if (!this.head) return null;

        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
            // How do the implementation for singly and doubly vary if at all?

        // Time complexity: O(n) because we are traversing the list once.
    }

    reverse() {
        let newList = new DoublyLinkedList();
        let curr = this.head;
        while (curr) {
            let newNode = new DoublyLinkedNode(curr.value);
            newNode.next = newList.head;
            if (newList.head) {
                newList.head.prev = newNode;
            } else {
                newList.tail = newNode;
            }
            newList.head = newNode;
            curr = curr.next;
        }
        return newList;

        // Time complexity: O(n) because we are traversing the list once.
    }

    reverseInPlace() {
      let curr = this.head;
      let temp = null;
      while (curr) {
        temp = curr.prev;
        curr.prev = curr.next;
        curr.next = temp;
        curr = curr.prev;
      }
      if (temp) {
        this.head = temp.prev;
      }

      // Time complexity: O(n) because we are traversing the list once.
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
