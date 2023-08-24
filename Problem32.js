// Write a generator function that returns a generator object which yields the fibonacci sequence.

// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

var fibGenerator = function* () {
    let fibArr = [0, 1];
    yield fibArr[0];
    yield fibArr[1];
    for (let i = 2; i < 1000000000; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
        yield (fibArr[i]);
    }
};

const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
