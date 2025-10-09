class Node{
    constructor(value = null){
       this.value = value
       this.nextNode = null;
    }
}


class LinkedList {
    constructor(){
        this.headNode = null;
    }

    //1- append(value)  adds a new node containing value to the end of the list
     append(value) {
            
        const newNode = new Node(value);

        if(this.headNode == null) {
            this.headNode = newNode
            return;
        }

        // Traverse to the last node
        let current = this.headNode;
        while(current.nextNode !== null) {
            current = current.nextNode
        }

         // Add new node at the end
    current.nextNode = newNode;

    }

    //2- prepend(value) adds a new node containing value to the start of the list
    
    prepend(value){
        const newNode = new Node(value);
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }
    
    //3- size() returns the total number of nodes in the list

    size(){
        let count = 0;
        let current = this.headNode;

        while(current !== null){
            count++
            current = current.nextNode;
        }

        return count;
    }


     //4- head() - returns the first node
     head(){
        return this.headNode;
     }

    

    
    
    //5. tail - returns the last node
   tail(){
    if(this.headNode == null) {
        return null;
    }

    let current = this.headNode;

    while(current.nextNode !== null) {
        current = current.nextNode;
    }

    return current;
   }


    //6. at(index) - returns the node at the given index
    at(index) {
        if(index < 0) {
            return null
        }

        let current = this.headNode;
        let currentIndex = 0; 

        while(current !== null) {
            if(currentIndex === index){
                return current
            }
            current = current.nextNode;
            currentIndex++
        }
        return null
    }

    //7. contain(value) - returns true if value is in the list
    contains(value) {
        let current = this.headNode;
        while (current !== null) {
            if(current.value === value){
                return true
            }
            current = current.nextNode
        }
        return false;
    }

    //8. find(value) - returns the index of the node containing value
    find(value) {
        let current = this.headNode;
        let index = 0; 

        while(current !== null) {
            if(current.value == value){
                return index;
            }

            current = current.nextNode
            index++
        }
        return null;
    }

    //9. pop() - removes the last element from the list
    pop(){
        if(this.headNode == null) {
            return ;
        }

        if(this.headNode.nextNode == null) {
            this.headNode = null
            return;
        }

        let current = this.headNode;

        while (current.nextNode.nextNode !== null){
            current = current.nextNode
        }
        current.nextNode = null;

    }

    

    


    // 10. toString - represents the list as a string
    toString() {
        let result = "";
        let current = this.headNode;

        while(current !== null) {
            result += `(${current.value}) ->`;
            current = current.nextNode
        }

        result += "null";
        return result
    }


    // 11: insertAt(value, index) - inserts node at given index
    insertAt(value, index) {
        if(index < 0) {
            return 
        };

        if(index === 0) {
            this.prepend(value);
            return;
        }

        const newNode = new Node(value);
        let current = this.headNode;
        let currentIndex = 0

        // Traverse to node before target index
        while(current !== null && currentIndex < index - 1) {
            current = current.nextNode;
            currentIndex++
        }

        // If current is null, index is out of bounds
        if(current == null) {
            return;
        }

        // Insert new node
        newNode.nextNode = current.nextNode;
        current.nextNode =newNode
    }

    // 12: removeAt(index) - removes node at given index
    removeAt(index) {
     if(index < 0 || this.headNode === null) {
        return;
     }

     // Remove first node
     if(index == 0) {
        this.headNode = this.headNode.nextNode;
        return;
     }

     let current = this.headNode;
     let currentIndex = 0;

     while(current.nextNode !== null && currentIndex < index - 1) {
        current = current.nextNode;
        currentIndex++;
     }

     // If target node doesn't exist
     if(current.nextNode == null) {
        returns;
     }
      

     // Remove node by skipping over it
     current.nextNode = current.nextNode.nextNode
    }
}

const List = new LinkedList();

console.log('=== Testing append ===');
List.append(1);
List.append(2);
List.append(3);
console.log(List.toString())
console.log('\n=== Testing prepend ===');
List.prepend(0)
console.log(List.toString())
console.log('\n=== Testing size ===');
console.log("Size: ", List.size())
console.log('\n=== Testing head ===');
console.log("Head value:", List.head().value)
console.log('\n=== Testing tail ===');
console.log("Head value:", List.tail().value)
console.log('\n=== Testing at ===');
console.log("Node at index 2:", List.at(2).value)
console.log('\n=== Testing contains ===');
console.log("Contains 2?:", List.contains(2))
console.log("Contains 10?:", List.contains(10))
console.log('\n=== Testing find ===');
console.log("Index of 2:", List.find(2))
console.log("Index of 10:", List.find(10))
console.log('\n=== Testing pop ===');
List.pop()
console.log(List.toString())
console.log('\n=== Testing insertAt ===');
List.insertAt(99, 2)
console.log(List.toString())
console.log('\n=== Testing removeAt ===');
List.removeAt(2)
console.log(List.toString())
