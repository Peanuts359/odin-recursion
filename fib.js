function fibs(n) {
    let result = [0, 1];
    for (let i = 0; i < n - 2; i = i + 1) {
        let sum = result[i] + result[i + 1];
        result.push(sum);
    }
    return result;
}

// console.log(fibs(10));

function fibsRec(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const seq = fibsRec(n - 1);
    const next = seq[seq.length() - 1] + seq[seq.length() - 2];
    seq.push(next);
    return seq;
}

console.log(fibs(11));