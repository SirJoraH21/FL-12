let a = parseInt(prompt('Enter first side'));
let b = parseInt(prompt('Enter second side'));
let c = parseInt(prompt('Enter third side'));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('input values should be ONLY numbers')
} else {
    if (a > 0 && b > 0 && c > 0) {
        if ((a + b) > c && (a + c) > b && (b + c) > a) {
            if (a == b && b == c && a == c) {
                console.log('Equilateral triangle')
            } else if (a == b || b == c || a == c) {
                console.log('Isosceles triangle')
            } else {
                console.log('Scalene triangle')
            }
        } else {
            alert('Triangle doesn’t exist');
            console.log('Triangle doesn’t exist')
        }
    } else {
        alert('A triangle must have 3 sides with a positive definite length')
    }
}