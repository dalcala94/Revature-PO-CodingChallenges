/*
AUTHOR: DANIEL ALCALA

LAST MODIFIED: 2022-06-23

PROMPT:
        Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers. Sherlock must determine the number of square integers within that range, inclusive of the endpoints (note that a square integer is an integer which is the square of an integer,
        e.g. 1, 4, 9, 16, 25, 36, 49).

        For example, the range is a=24 and b=49, inclusive. There are three square integers in the range: 25, 36 and 49.
        Complete the squares function that returns an integer representing the number of square integers in the inclusive range from a to b.

        Examples
        <code>squares(3, 9) ➞ 2
            squares(17, 24) ➞ 0
            squares(1, 1000000000) ➞ 31622
        </code>Notes
        Your solution must solve each problem in 1 second or less.
*/

function sherlockSquares(n,N)
{
    let squareCount = 0;

    //Essentially a for loop iterating up until N, determining what n is a perfect square.
    for (let i = n; i <= N; i++)
    {
        let result = Math.sqrt(i);

        if (result % Math.trunc(result) == 0){
            squareCount++;
        }
    }

    return squareCount;
}

let low = 1;
let high = 1000000000;
console.log(sherlockSquares(low,high));