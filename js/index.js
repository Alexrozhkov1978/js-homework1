let firstСoeffA = parseFloat(prompt('Please enter the first coefficient of quadratic equation - a -'));
let secondСoeffB = parseFloat(prompt('Please enter the second coefficient of quadratic equation - b -'));
let thirdСoeffC = parseFloat(prompt('Please enter the third coefficient of quadratic equation - c -'));
// Блок перевірки 
//let firstСoeffA = 1;
//let secondСoeffB = -26;
//let thirdСoeffC = 120;
alert( 'You entered (a,b,c) : ' + firstСoeffA + ', ' + secondСoeffB + ', ' + thirdСoeffC);
if (firstСoeffA !== firstСoeffA || secondСoeffB !== secondСoeffB || thirdСoeffC !== thirdСoeffC) { // Перевірка на правильність вводу
    alert('You entered wrong variable value. Repeat task please.');
} else {
    let discriminant = secondСoeffB**2 - firstСoeffA*thirdСoeffC*4; // Обчислення дискримінанту
    alert('Discriminant = ' + discriminant);
    if (discriminant < 0) {alert('There are no solutions to this quadratic equation'); // Дискримінант менше 0
    } else {
        if (discriminant === 0) { // Дискримінант 0
            let solution = - secondСoeffB / (2 * firstСoeffA);
            alert('Solution is : ' + solution);
        } else { // Дискримінант > 0 використання функції
            let solution = solveQuadraticEquation(firstСoeffA, secondСoeffB, discriminant).result;
            let solution1 = solveQuadraticEquation(firstСoeffA, secondСoeffB, discriminant).result1;
            //let solution = (- secondСoeffB  + Math.sqrt(discriminant))/(2*firstСoeffA);
            //let solution1 = (- secondСoeffB  - Math.sqrt(discriminant))/(2*firstСoeffA);
            alert('Solution number one is : ' +  solution + '. Solution number two is : ' +  solution1 );
        }   
    }
}

function solveQuadraticEquation (a,b,d) {
    const result = (- b + Math.sqrt(d))/(2*a);
    const result1 = (- b - Math.sqrt(d))/(2*a);
    return {result, result1};
}
 