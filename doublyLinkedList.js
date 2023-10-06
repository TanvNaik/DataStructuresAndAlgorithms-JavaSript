class Node {
    constructor(value) {
        this.value = value;
        this.pre = null;
        this.next = null;
    }
   }
   class Doublylinkedlist {
    constructor(value) {
        const newnode = new Node(value);
        this.head = newnode;
        this.tail = newnode;
        this.length = 1;
    }
    push(value) {
        const newnode = new Node(value);
        if (!this.length) {
        this.head = newnode;
        this.tail = newnode;
        } else {
        this.tail.next = newnode;
        newnode.pre = this.tail;
        this.tail = newnode;
        }
        this.length++;
        return this;
    }
    pop() {

        if (!this.length) return undefined;
        let temp = this.tail; 
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            temp.pre.next = null; 
            this.tail = temp.pre; 
            temp.pre = null;
        }
        this.length--;
        return temp;
    }


    //insert from front
    unshift(value) {
        const newNode = new Node(value);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //delete from front
    shift() {
        if (!this.length) return undefined;
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
        }
        temp.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }
    
   }

   const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
    if (typeof value === "object" && value !== null) {
    if (seen.has(value)) {
    return;
    }
    seen.add(value);
    }
    return value;
    };
}
   
   const dl = new Doublylinkedlist(10);
   dl.push(20);
   dl.push(5);
   dl.push(6);
   dl.push(7);
   dl.push(8);
    // dl.unshift(20);
    console.log(JSON.stringify(dl, getCircularReplacer()));

    dl.pop()
    // dl.shift();
    console.log(JSON.stringify(dl, getCircularReplacer()));   