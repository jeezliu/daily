/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  var count = 0;
  var curr = head;
  while(curr !== null && count < k) {
    curr = curr.next;
    count++;
  }
  if(count === k) {
    var point = reverseKGroup(curr, k);
    while(count--) {
      var tmp = head.next;
      head.next = point;
      point = head;
      head = tmp;
    }
    head = point;
  }
  return head;
};

