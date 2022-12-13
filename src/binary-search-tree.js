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

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let node = this.#node;
    while (node) {
      if (data === node.data) return node;
      if (data < node.data) node = node.left;
      else node = node.right;
    }

    return null;
  }

  remove(data) {
    this.#node = this.removeFromNode(this.#node, data);
  }

  removeFromNode(node, data) {
    if (node === null) return node;
    if (data < node.data) {
      node.left = this.removeFromNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeFromNode(node.right, data);
      return node;
    }

    if (node.left === null) {
      return node.right;
    } else if (node.right === null) {
      return node.left;
    }

    node.data = this.minDataNode(node.right);
    node.right = this.removeFromNode(node.right, node.data);
    return node;
  }

  min() {
    return this.minDataNode(this.#node);
  }

  minDataNode(node) {
    let curNode = node;
    while (curNode.left) {
      curNode = curNode.left;
    }
    return curNode.data;
  }

  max() {
    let curNode = this.#node;
    while (curNode.right) {
      curNode = curNode.right;
    }
    return curNode.data;
  }
};
