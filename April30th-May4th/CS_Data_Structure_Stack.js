// Implement Stack Data Structure 
// Stack === Last in First Out

class Stack {
  constructor(data) {
    this.stack = []
  }
  
  push(n) {
    // Push adds to the end of Stack
    this.stack[this.stack.length] = n
  }

  pop() {
    // removes first item on stack
    let poppedItem

    if(this.stack.length) {
      for(let i = 0; i < this.stack.length; i++) {
        (this.stack.length) && (poppedItem = this.stack[i])
      }

      this.stack.length = this.stack.length - 1
    }

    // Returns popped item
    return poppedItem
  }

  print() {
    // Loop from the last to the first and print Vertically
    for(let i = this.stack.length - 1; i >= 0; i--) {
      console.log(this.stack[i])
    }  
  }
}

let stackTest = new Stack()
stackTest.pop()
stackTest.print()
stackTest.push('man')
stackTest.print()
stackTest.push('shoes')
stackTest.print()
stackTest.pop()
stackTest.print()
stackTest.pop()
stackTest.print()
stackTest.pop()
stackTest.print()
stackTest.pop()

// let foo = stackTest.pop();
// console.log(foo)

// stackTest.print()
// console.log('HERE: ', stackTest)