/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const displayNode = function (listNode) {
  while (listNode.next !== null) {
    console.log(listNode.val);
    listNode = listNode.next;
  }
  console.log(listNode.val);
};

const checkValid = function (listNode) {
  return listNode !== null && listNode.next !== null;
};
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const head = {
    val: (l1.val + l2.val) % 10,
    next: null,
  };
  let result = head;
  let currentFlag = l1.val + l2.val >= 10;
  while (checkValid(l1) || checkValid(l2) || currentFlag) {
    const val1 = l1 && l1.next ? l1.next.val : 0;
    const val2 = l2 && l2.next ? l2.next.val : 0;
    const val = currentFlag ? val1 + val2 + 1 : val1 + val2;
    result.next = {
      val: val % 10,
      next: null,
    };
    l1 = l1 && l1.next ? l1.next : { val: 0, next: null };
    l2 = l2 && l2.next ? l2.next : { val: 0, next: null };
    result = result.next;
    currentFlag = val >= 10;
  }
  return head;
};

const l1 = {
  val: 1,
  next: null,
};

const l2 = {
  val: 9,
  next: {
    val: 9,
    next: null,
  },
};

displayNode(addTwoNumbers(l1, l2));
// addTwoNumbers(l1, l2)
