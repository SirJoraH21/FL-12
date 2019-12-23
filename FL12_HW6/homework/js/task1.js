    let a = parseInt(prompt('Enter first number'));
    let b = parseInt(prompt('Enter second number'));
    let c = parseInt(prompt('Enter third number'));
    if (typeof (a, b, c) === 'number') {
        d = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
        if (d > 0) {
            x1 = (-b + d) / (2 * a);
            x2 = (-b - d) / (2 * a);
            console.log('x1 = ' + x1 + ' and x2 = ' + x2);
        } else if (d == 0) {
            x = -b / (2 * a);
            console.log("x = " + x)
        } else {
            console.log('no solution')
        }
    } else {
        alert('Invalid input data');
        console.log('Ivalid input data')
    }