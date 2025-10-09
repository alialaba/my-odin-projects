import { LinkedList } from "./linkedList.js";




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
