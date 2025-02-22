//You are given a string s. The score of a string is defined as the
// sum of the absolute difference between the ASCII values of adjacent characters.
//
// Return the score of s.


const scoreOfString = (s: string): number => {
    let score = 0;

    for (let i = 0; i < s.length - 1; i++) {
        const diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
        score += diff;
    }
    return score;
};
