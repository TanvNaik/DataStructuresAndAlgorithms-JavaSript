class Node{
    constructor(data){
        this.data = data,
        this.next = null
    }
}
class Queue{
    constructor(data){
        const newNode = new Node(data)
        this.front = newNode
        this.rear = this.front
        this.length = 1
    }

    enqueue(data){
        const newNode = new Node(data)
        if(!this.length){
            this.front = newNode
            this.rear = newNode
            this.length = 1
        }else{
            this.rear.next = newNode
            this.rear = newNode
            this.length++
        }
        return this
    }

    dequeue(){
        if(!this.length)
        return undefined

        if(this.length == 1){
        this.rear = -1
        this.front = -1
        }else{
            this.temp=this.front;
            this.temp.next = this.front
            this.temp.next = null
        }
        this.length--
        return this
    }

    peek(){
        return this.front.data
    }
}

const q1 = new Queue(10)
console.log("Before Enqueue")
console.log(q1)
q1.enqueue(20)
q1.enqueue(30)
q1.enqueue(40)
q1.enqueue(50)
console.log("After Enqueue")
console.log(q1)
console.log("Before Dequeue")
console.log(q1)

q1.dequeue()
console.log("After Dequeue")
console.log(q1)
console.log(`Peek: ${q1.peek()}`)
