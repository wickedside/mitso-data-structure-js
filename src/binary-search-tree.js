const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  #node = null;
  root() {
    return this.#node;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.#node) {
      this.#node = newNode;
      return;
    }

    let node = this.#node;
    while (node) {
      if (data < node.data) {
        if (!node.left) {
          node.left = newNode;
          return;
        }
        node = node.left;
      } else {
        if (!node.right) {
          node.right = newNode;
          return;
        }
        node = node.right;
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
};
