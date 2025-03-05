//Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
//
//
// Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = (strs: string[]): string => {
    if (!strs.length) return "";

    let prefix = strs[0];

    for (const word of strs) {
        let i = 0;
        while (i < prefix.length && i < word.length && prefix[i] === word[i]) {
            i++;
        }
        prefix = prefix.slice(0, i);
        if (!prefix) return "";
    }

    return prefix;
};
