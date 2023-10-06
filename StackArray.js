class Stack{
    constructor(maxcapacity){
        this.data = Array(maxcapacity)
        this.capacity = maxcapacity
        this.currentLength = 0
        this.top = -1
        
    }
    isFull(){
        return this.currentLength === this.capacity-1
    }
    isEmpty(){
        return this.currentLength === 0
    }
    push(data){
        if(!this.isFull()){
            this.top++
            this.data[this.top] = data;
            this.currentLength++;
        } 
        return data;
    }
    pop(){
        if(this.isEmpty())
        return undefined

        
        let temp = this.data[this.top]
        if(this.currentLength === 1){
            this.data[this.top] = null
            this.top = -1
            this.currentLength--

        }
        else{
            this.data[this.top] = null
            this.top--
            this.currentLength--
        }
      
        return temp
    }

    peek(){
        return this.data[this.top]
    }
}
const sa = new Stack(4)
console.log("Before Insertion")
console.log(sa)
sa.push(1)
sa.push(2)
sa.push(3)

console.log("After Insertion")
console.log(sa)

console.log("After popping")
sa.pop()
console.log(sa)

console.log(`Peek: ${sa.peek()}`)