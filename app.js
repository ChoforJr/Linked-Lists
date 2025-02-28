const node = (value = null, nextNode = null) => {
  return {
    value,
    nextNode,
  };
};

const linkedList = () => {
  let head = null;
  let size = 0;

  //adds a new node containing value to the end of the list
  function append(value) {
    let current = head;
    let previous;
    while (current) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = node(value);
    size++;
  }

  //adds a new node containing value to the start of the list
  function prepend(value) {
    head = node(value, head);
    size++;
  }

  //returns the total number of nodes in the list
  function printSize() {
    console.log(size);
  }

  //returns the first node in the list
  function printHead() {
    console.log(head.value);
  }

  //returns the last node in the list
  function printTail() {
    let current = head;
    let previous;
    while (current) {
      previous = current;
      current = current.nextNode;
    }
    console.log(previous.value);
  }

  //returns the node at the given index
  function at(index) {
    let current = head;
    let previous;
    for (let i = 0; i <= index; i++) {
      if (i == index) {
        console.log(current.value);
        return;
      }
      previous = current;
      current = current.nextNode;
    }
    return console.log(null);
  }

  //removes the last element from the list
  function pop() {
    let current = head;
    let previous;
    for (let i = 1; i < size; i++) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
    size--;
  }

  //returns true if the passed in value is in the list and otherwise returns false
  function contains(value) {
    let current = head;
    for (let i = 1; i <= size; i++) {
      if (value == current.value) {
        return console.log(true);
      }
      current = current.nextNode;
    }
    return console.log(false);
  }

  //returns the index of the node containing value, or null if not found
  function find(value) {
    let current = head;
    for (let i = 0; i < size; i++) {
      if (value == current.value) {
        return console.log(i);
      }
      current = current.nextNode;
    }
    return console.log(null);
  }

  //represents your LinkedList objects as strings, so you can print them out and preview
  //them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  function toString() {
    let current = head;
    let text = [];
    while (current) {
      let text1 = ` ( ${current.value} ) ->`;
      text.push(text1);
      if (current.nextNode == null) {
        text.push(" null");
      }
      current = current.nextNode;
    }
    let txtString = text.join("");
    console.log(txtString);
  }

  //that inserts a new node with the provided value at the given index
  function insertAt(value, index) {
    if (index < 0 || index >= size) return console.log("out of range");
    let current = head;
    let previous;
    let newNode = node(value);
    if (index == 0) {
      head = node(value, head);
      size++;
      return;
    }
    for (let i = 0; i <= index; i++) {
      if (i == index) {
        previous.nextNode = newNode;
        newNode.nextNode = current;
        size++;
        return;
      }
      previous = current;
      current = current.nextNode;
    }
  }

  //that removes the node at the given index
  function removeAt(index) {
    if (index < 0 || index >= size) return console.log("out of range");
    let current = head;
    let previous;
    if (index == 0) {
      head = current.nextNode;
      size--;
      return;
    }
    for (let i = 0; i <= index; i++) {
      if (i == index) {
        previous.nextNode = current.nextNode;
        size--;
        return;
      }
      previous = current;
      current = current.nextNode;
    }
  }

  return {
    append,
    prepend,
    printSize,
    printHead,
    printTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const list = linkedList();
list.prepend(100);
list.prepend(200);
list.prepend(300);
list.append(50);
list.append(25);
list.prepend(400);
list.insertAt(500, 0);

list.toString();
