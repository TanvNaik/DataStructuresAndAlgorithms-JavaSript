class Node {
    constructor(data) {
    this.value = data;
    this.next = null;
    }
   }

   class Linkedlist {
    constructor(data) {
        const newnode = new Node(data);
        this.head = newnode;
        this.tail = newnode;
        this.length = 1;
    }

    // insertion from end
    push(value) {
        const newNode = new Node(value);
        if (!this.length) {
        this.head = newNode;
        this.tail = this.head;
        } else {
        this.tail.next = newNode;
        this.tail = newNode;
        }
        this.length++;
        return this;
    }
   
    //insertion from front
    unshift(value) {
        const newNode = new Node(value);
        if (!this.length) {
        this.head = newNode;
        this.tail = this.head;
        } else {
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }
    
   }
   const ll = new Linkedlist(2);
   console.log(ll);
   ll.push(3);
   ll.push(4);
   ll.push(5);
   ll.push(6);
   ll.push(7);
   ll.push(8);
   ll.unshift(10);
   console.log(JSON.stringify(ll));
