import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
  }
  
  append(value) {
    const newNode = new Node(value);
    if (!this._head) {
      this._head = newNode;
    } else {
      let current = this._head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this._size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this._head;
    this._head = newNode;
    this._size++;
  }

  get size() {
    return this._size;
  }

  get head() {
    return this._head;
  }

  get tail() {
    if (!this._head) return null;

    let current = this._head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    if (index < 0 || index >= this._size) {
      return null;
    }

    let current = this._head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  pop() {
    if (!this._head) {
      return null;
    }

    // single node
    if (!this._head.next) {
      const removedNode = this._head;
      this._head = null;
      this._size--;
      return removedNode;
    }

    // multiple nodes  
    let current = this._head;
    while (current.next.next) {
      current = current.next;
    }

    // remove last node
    const removedNode = current.next;
    current.next = null;
    this._size--;

    return removedNode;
  }

  contains(value) {
    let current = this._head;

    // traverse through the list
    while (current) {
      // look for value and return it
      if (current.value === value) {
        return true;
      }
      // move to next node
      current = current.next;
    }
    // if the end is reached without finding the value
    return false;
  }

  find(value) {
    let current = this._head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    // if value not found
    return null;
  }

  toString() {
    let current = this._head;
    let string = "";
    
    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.next;
    }

    string += `null`;
    return string;
  }

  insertAt(value, index) {
    if (index < 0 || index > this._size) {
      throw new Error(`Index ${index} is out of bounds. List size: ${this._size}`);
    }

    // if inserting at head, use prepend
    if (index === 0) {
      this.prepend(value);
      return;
    }

    // if inserting at tail, use append
    if (index === this._size) {
      this.append(value);
    }

    // insert it in the middle
    const newNode = new Node(value);
    let current = this._head;

    // traverse to node BEFORE the insertion point
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    // insert new node
    newNode.next = current.next;
    current.next = newNode;
    this._size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this._size) {
      throw new Error (`Index ${index} is out of bounds. List size: ${this._size}`);
    }

    // if removing head
    if (index === 0) {
      const removedNode = this._head;
      this._head = this._head.next;
      this._size--;
      return removedNode;
    }

    let current = this._head;

    // traverse to node BEFORE the removal point
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    // remove the node
    const removedNode = current.next;
    current.next = current.next.next;
    this._size--;

    return removedNode;
  }
}
