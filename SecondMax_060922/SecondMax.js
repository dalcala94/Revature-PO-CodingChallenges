/*
    AUTHOR: DANIEL ALCALA
    MODIFIED: 06-09-2022

    Problem Statement:
        Write a program that accepts sets of three numbers, and prints the second-maximum number among the three.

    Input:
        First line contains the number of triples, N.
        The next N lines which follow each have three space separated integers.
    Output:
        For each of the N triples, output one new line which contains the second-maximum integer among the three.

    Constraints:
        1 ≤ N ≤ 6
        1 ≤ every integer ≤ 10000
        The three integers in a single triplet are all distinct. That is, no two of them are equal.

    Sample Input:
        3
        1 2 3
        10 15 5
        100 999 500

    Sample Output
        2
        10
        500
*/
function secondMax(str){
    
    //string input processing - convert str to an array.
    // First input - N - will be ommited when function is called.
    let dummyList = str.split(" ");
    let resultList = [];

    for (let idx of dummyList){
        resultList.push(parseInt(idx));
    }

    //using sort() - lowest value as index 0, highest as index 2
    //therefore, secondMax is at index 1 - return
    //compare function added since we parse the string numbers to integers. sort() works correctly only on strings.
    resultList.sort(function(a, b){return a - b});

    return resultList[1];

}

//Testing secondMax with an input file = secondMaxTest

//Necessary for reading file inputs
const fs = require('fs');
const readline = require('readline');

fs.readFile('secondMaxInput.txt', (err, data) =>{
    if (err){
        throw err;
    }

    let dataList = data.toString().split('\r\n');
    let N = parseInt(dataList[0].replace('\r\n1', ''));

    //Outputting secondMax
    for (let i = 1; i <= N; i++){
        console.log(secondMax(dataList[i]));
    }


})

