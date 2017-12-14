// Given a linked list, swap every two adjacent nodes and return its head.
//
// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.
//
// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(head) {
  if(!head || head.next === null) return head;

  let dummy = head;
  head = head.next;
  dummy.next = head.next;
  head.next = dummy;


  while(dummy !== null && dummy.next !== null && dummy.next.next !== null) {
    const next = dummy.next;
    const nextnext = next.next;

    next.next = nextnext.next;
    dummy.next = nextnext;
    nextnext.next = next;

    if(next.next !== null && next.next.next !== null) {
        dummy = dummy.next.next;
    } else {
        dummy = null
    }
  }

  return head;
};
