class Node{
  constructor(data){
    this.data = data;
    this.right = null;
    this.left = null
  }
}

class Tree{
  constructor(array){
     const sorted = [...new Set(array)].sort((a,b)=> a - b);
     this.root = this.buildTree(sorted)
  }


  buildTree(array){

    //Base case
    if(array.length == 0){
      return null;
    }

     //Get the middle element
     const mid = Math.floor(array.length / 2);

     //Set the middle as node 
     const node = new Node(array[mid])

     //Recursively get the left subtree element
     node.left = this.buildTree(array.slice(0, mid));

    //Recursively get the left subtree element
     node.right = this.buildTree(array.slice(mid + 1));

     return node;
  }

  find(value, node = this.root) {
     if(node == null) {
      return null;
     }

     if(node.data == value){
      return node;
     }

     if(value < node.data){
      return this.find(value, node.left)
     }

     return this.find(value, node.right)
  }

  insert(value, node = this.root) {
    if(node == null) {
      return null;
    }

    if(node.data == value){
      return node;
    }

    if(value < node.data) {
      node.left = this.insert(value, node.left);
    } else {
      node.right = this.insert(value, node.right);
    }
    return node;
  }

  findMin(node) {
    while(node != null) {
      node = node.left;
    }

    return node;
  }

  deleteItem (value, node = this.root){
    //Base case
    if(node == null) {
      return null;
    }

    //Search for node to delete 
    if(value < node.data) {
      node.left = this.deleteItem(value, node.left);
      return node;
    } else if (value > node.data){
      node.right = this.deleteItem(value, node.right);
      return node;
    }
    //Case 1: Node has no children 
    if(node.right == null && node.left == null) {
      return null;
    }
    //Case 2: Node has only right subtree
    if(node.left == null) {
      return node.right;
    }
    //Case 3: Node has only left subtree
    if(node.right == null) {
      return node.left
    }


    const successor = this.findMin(node.right);

    //Replace node data with above data
    node.data = successor.data;

    node.right = this.deleteItem(successor.data, node.right);

    return node
  }

  levelOrderForEach(callback) {
    if(!callback) {
      throw new Error("callback is required");
    }

    if(this.root == null){
      return ;
    }

   //create a queue and add the root
   const queue = [this.root];
   console.log(queue);

   while(queue.length > 0) {
    // Dequeue the first node 
    const node = queue.shift()

    // Call the callback with this node 
    callback(node)

    // Enqueue left child if it exists
    if(node.left !== null){
      queue.push(node.left);
    }

    // Enqueue right child if it exists
    if(node.right !== null){
      queue.push(node.right);
    }


   }
   

  }

  
  inOrderForEach(callback, node = this.root){

    if(!callback){
      throw new Error("callback is required")
    }

    if(node == null){
      return;
    }

   //1. visit left subtree 
     this.inOrderForEach(callback, node.left);

   //2. process current node
   callback(node);

   //3. visit right subtree
   this.inOrderForEach(callback, node.right);
  }
  
  preOrderForEach(callback, node = this.root){
    if(!callback) {
      throw new Error("callback is required");
    }
    
    if(node == null){
      return;
    }

   //1. process current node
   callback(node)

   //2. visit left subtree 
   this.preOrderForEach(callback, node.left)

   //3. visit right subtree
   this.preOrderForEach(callback, node.right)

  }

  postOrderForEach(callback, node = this.root) {
     if(!callback) {
      throw new Error("callback is required");
    }
    
    if(node == null){
      return;
    }

    //1. visit left subtree 
    this.preOrderForEach(callback, node.left);

    //2. visit right subtree
    this.preOrderForEach(callback, node.right);
     
    //1. process current node
    callback(node)


  }

  height(value){
     const node = this.find(value);

     if(node == null) {
      return null;
     }

     return this.calcHeight(node);
  }

  calcHeight(node){

    if(node == null) {
      return -1 // Base case: null has height -1
    }

    // Recursively calculate height of left and right subtrees
    const leftHeight = this.calcHeight(node.left);
    const rightHeight = this.calcHeight(node.right);

     // Height is 1 + the maximum of the two subtree heights
    return  1 + Math.max(leftHeight, rightHeight)

  }

  depth(value, node = this.root, currentDepth = 0) {
      if(node == null){
        return null;
      }

      if(node.data == value){
        return currentDepth;
      }

      if(value < node.data) {
        return  this.depth(value, node.left, currentDepth + 1);
      }

      return this.depth(value, node.right, currentDepth + 1);
  }

  isBalanced(node = this.root) {
     // Helper function that returns height if balanced, -1 if not

     function checkBalance  (node) {
       if(node == null) {
        return 0  // Null nodes are balanced with height 0
       }

       const leftHeight = checkBalance(node.left);
       if(leftHeight == -1) return -1; // Left subtree is unbalanced

       const rightHeight = checkBalance(node.right);
       if(rightHeight == -1) return -1 // Right subtree is unbalanced

       // Check current node's balance
       if(Math.abs(leftHeight - rightHeight) > 1) {
         return -1 //current node is unbalanced
       }

        // Return height of current node
        return 1 + Math.max(leftHeight, rightHeight);

     }

     return checkBalance(node) !== -1;
  }

  rebalance(){
    //collect all values in sorted way 
    const values = [];
    this.inOrderForEach(node => values.push(node.data))

    // Rebuild the tree with the sorted values
    this.root = this.buildTree(values)
  }

   prettyPrint(node = this.root, prefix = "", isLeft = true){
    if (node === null) {
      return;
    }
    if (node.right !== null) {
     this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
}


//Generate Random Number > 100;
const generateRandomNumber  = (size, max) =>{
  const arr = [];

  for (let i = 0; i < size; i++) {
    
     arr.push(Math.floor(Math.random() * max))
  }

  return arr
}

//Helper function to print traversals
function printAllTraversals (tree, label) {
  console.log(`\n${label}`)
  console.log("-".repeat(40))

  const levelOrder = [];
  tree.levelOrderForEach(node=> levelOrder.push(node.data))
  console.log("Level Order ", levelOrder.join(", "))

  const preOrder = [];
  tree.preOrderForEach(node=> preOrder.push(node.data));
  console.log("Pre Order ", preOrder.join(", "));

  const inOrder = [];
  tree.inOrderForEach(node=> inOrder.push(node.data));
  console.log("In Order ", inOrder.join(", "));

  const postOrder = [];
  tree.postOrderForEach(node=> postOrder.push(node.data));
  console.log("Post Order ", postOrder.join(", "))

}

// 1. Create a binary search tree from an array of random numbers < 100
console.log("\n\n1. Creating tree from random numbers < 100");
console.log("-".repeat(60))
const randomArray = generateRandomNumber(15, 100);
console.log("Random Array", randomArray)
const bst = new Tree(randomArray)
bst.prettyPrint()

// let vals = []
// bst.levelOrderForEach(node => vals.push(node.data))

// 2. Confirm that the tree is balanced
console.log("\n2. Checking if tree is balanced");
console.log("-".repeat(60));
console.log("Is Balanced? ", bst.isBalanced() ? "✓ Yes" : "✗ No")

// 3. Print out all elements in level, pre, post, and in order
console.log("\n3. Printing all traversals");
console.log("-".repeat(60));
printAllTraversals(bst, "Initial Balanced Tree Traversals")

// 4. Unbalance the tree by adding several numbers > 100
console.log("\n4. Unbalancing the tree");
console.log("-".repeat(60));
const largeNumbers = [105,125, 130,260, 290];
largeNumbers.forEach(num => bst.insert(num));
console.log("\nUnbalanced tree structure:");
bst.prettyPrint()

// 5. Confirm that the tree is unbalanced
console.log("\n5. Checking if tree is unbalanced");
console.log("-".repeat(60));
console.log("Is Balanced? ", bst.isBalanced() ? "✓ Yes" : "✗ No")

// 6. Balance the tree by calling rebalance
console.log("\n6. Rebalancing the tree");
console.log("-".repeat(60));
bst.rebalance();
console.log("Tree has been rebalanced!");
console.log("\nRebalanced tree structure:");
bst.prettyPrint();

// 7. Confirm that the tree is balanced
console.log("\n7. Checking if tree is balanced again");
console.log("-".repeat(60));
console.log("Is balanced?", bst.isBalanced() ? "✓ YES" : "✗ NO");

// 8. Print out all elements in level, pre, post, and in order
console.log("\n8. Printing all traversals after rebalancing");
console.log("-".repeat(60));
printAllTraversals(bst, "Rebalanced Tree Traversals");

console.log("\n" + "=".repeat(60));
console.log("         DRIVER SCRIPT COMPLETE");
console.log("=".repeat(60));
