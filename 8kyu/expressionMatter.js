/*
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

Notes
The numbers are always positive.
The numbers are in the range (1  ≤  a, b, c  ≤  10).
You can use the same operation more than once.
It's not necessary to place all the signs and brackets.
Repetition in numbers may occur .
You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
*/

function expressionMatter(a, b, c) {
    //initiate cases array
    let cases = [];
    //evaluate all cases
    let case1 = a*b*c;
    let case2 = a+b*c;
    let case3 = a*b+c;
    let case4 = c*a+b;
    let case5 = a*(b+c)
    let case6 = c*(a+b)
    let case7 = a+b+c
    //add cases to array
    cases.push(case1,case2,case3,case4,case5,case6,case7)
    console.log(cases);
    
    //initiate largest variable
    let largest = cases[0]
    //loop through cases to find largest num and return answer
    for(let i = 0; i < cases.length; i++) {
        if(largest < cases[i]) {
            largest = cases[i]
        }
    }
    return largest
}
console.log(expressionMatter(1,3,1));

