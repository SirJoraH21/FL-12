function pipe(...args) {
    return args.reduce((a, b) => b(a))
}

function addOne(x) {
    return x + 1;
}
pipe(1, addOne, addOne);