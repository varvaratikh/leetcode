//Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const isSymmetric = (root: TreeNode | null): boolean => {
    if (!root) return true;

    const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
        if (!t1 && !t2) return true;

        if (!t1 || !t2) return false;

        if (t1.val !== t2.val) return false;

        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    };

    return isMirror(root.left, root.right);
};
