class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }
  remove() {
    while (this.first.peak()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.pop();
    while (this.second.peek()) {
      this.first.push(this.second.peak());
    }
    return record;
  }
  peak() {
    while (this.first.peak()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.peak();
    while (this.second.peek()) {
      this.first.push(this.second.peak());
    }
    return record;
  }
}
