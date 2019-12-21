// // Your code goes here
function quadratic_equation(a, b, c) {
    if (typeof (a) && typeof (b) && typeof (c) == 'number') {
        d = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
        console.log(d)
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
        console.log('Ivalid input data')
    }
}
// function what_type(a) {
//     console.log(typeof(a))
// }