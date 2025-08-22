import { LinkedList } from "./script.js";

// testing linkedlist class
console.log("=== LINKED LIST TESTS ===");

// test 1: constructor and basic properties
console.log("\n1. Testing constructor:");
const list = new LinkedList();
console.log("New list size:", list.size); // should be 0
console.log("New list head:", list.head); // should be null

// test 2: append
console.log("\n2. Testing append:");
list.append(10);
list.append(20);
list.append(30);
console.log("After appending 10, 20, 30:");
console.log("Size:", list.size); // should be 3
console.log("Head:", list.head.value); // should be 10
console.log("List:", list.toString()); // should be ( 10 ) -> ( 20 ) -> ( 30 ) -> null

// test 3: prepend
console.log("\n3. Testing prepend:");
list.prepend(5);
console.log("After prepending 5:");
console.log("Size:", list.size); // should be 4
console.log("Head:", list.head.value); // should be 5
console.log("List:", list.toString()); // should be ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null

// test 4: head and tail getters
console.log("\n4. Testing head and tail getters:");
console.log("Head value:", list.head.value); // should be 5
console.log("Tail value:", list.tail.value); // should be 30

// test 5: at() method
console.log("\n5. Testing at() method:");
console.log("at(0):", list.at(0).value); // should be 5
console.log("at(1):", list.at(1).value); // should be 10
console.log("at(3):", list.at(3).value); // should be 30
console.log("at(10):", list.at(10)); // should be null
console.log("at(-1):", list.at(-1)); // should be null

// test 6: pop() method
console.log("\n6. Testing pop() method:");
const popped = list.pop();
console.log("Popped value:", popped.value); // should be 30
console.log("After pop, size:", list.size); // should be 3
console.log("New tail:", list.tail.value); // should be 20
console.log("List:", list.toString()); // should be ( 5 ) -> ( 10 ) -> ( 20 ) -> null

// test 7: contains() method
console.log("\n7. Testing contains() method:");
console.log("Contains 5:", list.contains(5)); // should be true
console.log("Contains 10:", list.contains(10)); // should be true
console.log("Contains 20:", list.contains(20)); // should be true
console.log("Contains 99:", list.contains(99)); // should be false

// test 8: find() method
console.log("\n8. Testing find() method:");
console.log("Find 5:", list.find(5)); // should be 0
console.log("Find 10:", list.find(10)); // should be 1
console.log("Find 20:", list.find(20)); // should be 2
console.log("Find 99:", list.find(99)); // should be null

// test 9: toString() method
console.log("\n9. Testing toString() method:");
console.log("List string:", list.toString()); // should be ( 5 ) -> ( 10 ) -> ( 20 ) -> null

// test 10: insertAt() method
console.log("\n10. Testing insertAt() method:");
list.insertAt(15, 2); // insert between 10 and 20
console.log("After inserting 15 at index 2:");
console.log("Size:", list.size); // should be 4
console.log("List:", list.toString()); // should be ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> null

list.insertAt(25, 4); // insert at end
console.log("After inserting 25 at index 4:");
console.log("List:", list.toString()); // should be ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> ( 25 ) -> null

list.insertAt(0, 0); // insert at beginning
console.log("After inserting 0 at index 0:");
console.log("List:", list.toString()); // should be ( 0 ) -> ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> ( 25 ) -> null

// test 11: removeAt() method
console.log("\n11. Testing removeAt() method:");
const removed1 = list.removeAt(0); // remove head
console.log("Removed from index 0:", removed1.value); // should be 0
console.log("After removal, size:", list.size); // should be 5
console.log("List:", list.toString()); // should be ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> ( 25 ) -> null

const removed2 = list.removeAt(2); // remove from middle
console.log("Removed from index 2:", removed2.value); // should be 15
console.log("List:", list.toString()); // should be ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 25 ) -> null

const removed3 = list.removeAt(3); // remove tail
console.log("Removed from index 3:", removed3.value); // should be 25
console.log("List:", list.toString()); // should be ( 5 ) -> ( 10 ) -> ( 20 ) -> null

// test 12: edge cases
console.log("\n12. Testing edge cases:");
const emptyList = new LinkedList();
console.log("Empty list size:", emptyList.size); // should be 0
console.log("Empty list head:", emptyList.head); // should be null
console.log("Empty list tail:", emptyList.tail); // should be null
console.log("Empty list toString:", emptyList.toString()); // should be null

// test 13: error handling
console.log("\n13. Testing error handling:");
try {
  list.insertAt(99, 10); // should throw error
} catch (e) {
  console.log("insertAt error:", e.message);
}

try {
  list.removeAt(10); // should throw error
} catch (e) {
  console.log("removeAt error:", e.message);
}

console.log("\n=== ALL TESTS COMPLETED ===");