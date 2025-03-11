//Given two binary strings a and b, return their sum as a binary string.
//
//
//
// Example 1:
//
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
//
// Input: a = "1010", b = "1011"
// Output: "10101"


const addBinary = (a: string, b: string): string => {
    return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};