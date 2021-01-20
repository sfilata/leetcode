/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (nodeArr) {
  const node = createNodeList(nodeArr);

  let head = createNodeList([4, 5, 1, 9]);
  let cur = head;

  const { next } = node;
  let prev = null;
  if (node.val === head.val) {
    head = head.next;
  } else {
    while (cur.next !== null) {
      if (cur.next.val === node.val) {
        prev = cur;
      }
      cur = cur.next;
    }
    if (prev) prev.next = next;
  }

  output(head);
};

function createNodeList(arr) {
  const val = arr.shift();
  if (arr.length === 0) {
    return {
      val,
      next: null,
    };
  }
  return {
    val,
    next: arguments.callee(arr),
  };
}

function output(node) {
  while (node.next !== null) {
    console.log(node.val);
    node = node.next;
  }
  console.log(node.val);
}

deleteNode([2]);
