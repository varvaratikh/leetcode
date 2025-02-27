//Given a non-negative integer x, return the square root of x
// rounded down to the nearest integer. The returned integer should be non-negative as well.
//
// You must not use any built-in exponent function or operator.
//
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.


const mySqrt = (x: number): number => {
    if (x < 2) return x;

    let left = 2, right = x / 2;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midSquared = mid * mid;

        if (midSquared === x) {
            return mid;
        } else if (midSquared < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
};
