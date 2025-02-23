//Given the head of a sorted linked list, delete all duplicates such that each
// element appears only once. Return the linked list sorted as well.
// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};
