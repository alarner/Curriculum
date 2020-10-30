// const firstArray = [1,4,7,9,10];
// const secondArray = [4,5,7,8,13];

function concat(a, b) {
    const newArray = [];
    // for(let i =0; i<a.length; i++) {
    //     newArray.push(a[i]);
    // }
    // for(let i =0; i<b.length; i++) {
    //     newArray.push(b[i]);
    // }
    for(let i =0; i<b.length; i++) {
        a.push(b[i]);
    }
    return a;
    // return a + b
}

function mergeSortedArrays(a, b) {
    let c = a.concat(b);
    c = c.sort((a, b) => {
        return a - b;
    });
    return c;
}

function mergeSortedArrays2(a, b) {
    let ai = 0;
    let bi = 0;
    const newArray = [];
    while(ai < a.length || bi < b.length) {
        if(bi >= b.length || (ai < a.length && a[ai] < b[bi])) {
            newArray.push(a[ai]);
            ai++;
        }
        else if(ai >= a.length || (bi < b.length && a[ai] > b[bi])) {
            newArray.push(b[bi]);
            bi++;
        }
    }
    return newArray;
}

console.log(mergeSortedArrays2([1,1,1], [2,2,3]))

// let firstArray = [];
// let secondArray = [];
// for(let i=500000; i<2500000; i+=100000) {
//     for(let j =0; j<100000; j++) {
//         firstArray.push(Math.random());
//         secondArray.push(Math.random());
//     }
//     firstArray = firstArray.sort((a, b) => a-b);
//     secondArray = firstArray.sort((a, b) => a-b);
//     const start = Date.now();
//     mergeSortedArrays2(firstArray, secondArray);
//     console.log(`${i}\t${Date.now()-start}`);
// }

// console.log(mergeSortedArrays(firstArray, secondArray))

// const c = mergeSortedArrays(a, b);
// [1,4,4,5,7,7,8,9,10,13]


