function fibonacci(n: number): number[] {
    if (n <= 0) return [];
    let fibs = [0, 1];

    for (let i = 2; i < n; i++) {
        fibs.push(fibs[i - 1] + fibs[i - 2]);
    }

    return fibs;
}

// Example usage:
const numberOfTerms = 10;
const fibonacciNumbers = fibonacci(numberOfTerms);
console.log(fibonacciNumbers); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]