// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// * Definition for singly-linked list.
// * function ListNode(val) {
// *     this.val = val;
// *     this.next = null;
// * }

var addTwoNumbers = function(l1, l2) {
  let next1 = l1.next,
      next2 = l2.next,
      carry = 0,
      tempSum;

  let initialVal = l1.val + l2.val;
  if(initialVal >= 10) {
    initialVal -= 10;
    carry++;
  }

  const result = new ListNode(initialVal);
  let currResultNode = result;

  while(next1 !== null && next2 !== null) {
    tempSum = carry + next1.val + next2.val;
    if(carry) carry--;

    if(tempSum >= 10) {
      tempSum -= 10;
      carry++;
    }
    currResultNode.next = new ListNode(tempSum);
    currResultNode = currResultNode.next;
    next1 = next1.next;
    next2 = next2.next;
  }

  while(next1 !== null) {
    tempSum = carry + next1.val;
    if(carry) carry--;

    if(tempSum >= 10) {
      tempSum -= 10;
      carry++;
    }

    currResultNode.next = new ListNode(tempSum);
    currResultNode = currResultNode.next;
    next1 = next1.next;
  }

  while(next2 !== null) {
    tempSum = carry + next2.val;
    if(carry) carry--;

    if(tempSum >= 10) {
      tempSum -= 10;
      carry++;
    }

    currResultNode.next = new ListNode(tempSum);
    currResultNode = currResultNode.next;
    next2 = next2.next;
  }

  if(carry) {
    currResultNode.next = new ListNode(carry);
    carry--;
  }
  return result;
}
