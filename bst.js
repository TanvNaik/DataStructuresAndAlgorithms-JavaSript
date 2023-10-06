class Node {
    constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    }
   }
   class BinarySearchTree {
    constructor() {
    this.root = null;
    }
    insert(data) {
    var newNode = new Node(data); //1=root 4
    if (this.root === null) {
    this.root = newNode;
    } else {
    this.insertNode(this.root, newNode);
    }
    }
    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data
    insertNode(node, newNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.data < node.data) {
    if (node.left === null) {
    node.left = newNode;
    } else {
    this.insertNode(node.left, newNode);
    }
    } else {
    if (node.right === null) {
    node.right = newNode;
    } else {
    this.insertNode(node.right, newNode);
    }
    }
    }
    findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
    }
    findMaxNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.right === null) return node;
    else return this.findMaxNode(node.right);
    }
    search(root, data) {
    if (!root) {
    return false;
    }
    if (root.data === data) {
    return true;
    } else if (data < root.data) {
    return this.search(root.left, data);
    } else {
    return this.search(root.right, data);
    }
    }
    getRootNode() {
    return this.root;
    }
    inorder(node) {
    if (node !== null) {
    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
    }
    }
    preorder(node) {
    if (node !== null) {
    console.log(node.data);
    this.preorder(node.left);
    this.preorder(node.right);
    }
    }
    postorder(node) {
    if (node !== null) {
    this.postorder(node.left);
    this.postorder(node.right);
    console.log(node.data);
    }
    }
   }
   const BST = new BinarySearchTree();
   BST.insert(1);
   BST.insert(3);
   BST.insert(6);
   BST.insert(0);
   BST.insert(4);
   BST.insert(9);
   BST.insert(10);
   console.log(JSON.stringify(BST));
   console.log(BST.search(BST.root, 9));
   var root = BST.getRootNode();
//    console.log(BST.preorder(root));
//    console.log(BST.inorder(root));
//    console.log(BST.postorder(root));
//    console.log(BST.findMaxNode(root));
//    console.log(BST.findMinNode(root));

   //console.log(BST.findMinNode());
   //console.log(BST.max());