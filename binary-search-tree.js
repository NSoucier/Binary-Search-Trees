class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this.root;
    }

    let current = this.root;
    while (true) {
      if (val > current.val) {
        if (current.right !== null) {
          current = current.right;
        } else {
          current.right = new Node(val);
          return this.root;
        }
      } else {
        if (current.left !== null) {
          current = current.left;
        } else {
          current.left = new Node(val);
          return this.root;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (current === null) {
      this.root = new Node(val);
      return this.root
    }

    if (val > current.val) {
      if (current.right === null) {
        current.right = new Node(val);
        return this.root
      }
      current = this.insertRecursively(val, current.right);
    } else {
      if (current.left === null) {
        current.left = new Node(val);
        return this.root
      }
      current = this.insertRecursively(val, current.left);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root.val === val) return this.root

    let current = this.root
    while (current) {
      if ( val > current.val ) {
        current = current.right
      } else if ( val < current.val ) {
        current = current.left
      } else if ( val === current.val) {
        return current;
      }
    }

    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (current.val === val) return current

    if (val > current.val) {
      if (current.right === null) return undefined
      current = this.findRecursively(val, current.right);
      return current
    } else {
      if (current.left === null) return undefined
      current = this.findRecursively(val, current.left)
      return current
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    // traverse myself, left, then right
    const result = [];

    function traverse(current) {
      result.push(current.val);
      if (current.left !== null) traverse(current.left)
      if (current.right !== null) traverse(current.right)
    }

    traverse(this.root);

    return result
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    // traverse left, myself, then right
    const result = [];

    function traverse(current) {
      if (current.left !== null) traverse(current.left)
      result.push(current.val);
      if (current.right !== null) traverse(current.right)
    }

    traverse(this.root);

    return result
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    // travers left, right, then myself
    const result = [];

    function traverse(current) {
      if (current.left !== null) traverse(current.left)
      if (current.right !== null) traverse(current.right)
      result.push(current.val);
    }

    traverse(this.root);

    return result
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const result = [];
    const queue = [this.root];

    while (queue.length) {
      result.push(queue[0].val);
      if (queue[0].left !== null) queue.push(queue[0].left)
      if (queue[0].right !== null) queue.push(queue[0].right)
      
      queue.shift();
    }

    return result
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
