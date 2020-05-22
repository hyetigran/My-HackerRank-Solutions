// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let node = new ListNode(l1.value < l2.value ? l1.value : l2.value);
  let head = node;
  l1.value < l2.value ? (l1 = l1.next) : (l2 = l2.next);

  while (!!l1 && !!l2) {
    if (l1.value < l2.value) {
      node.next = new ListNode(l1.value);
      node = node.next;
      l1 = l1.next;
    } else {
      node.next = new ListNode(l2.value);
      node = node.next;
      l2 = l2.next;
    }
  }
  while (!!l1 && !l2) {
    node.next = new ListNode(l1.value);
    node = node.next;
    l1 = l1.next;
  }
  while (!!l2 && !l1) {
    node.next = new ListNode(l2.value);
    node = node.next;
    l2 = l2.next;
  }
  return head;
}
