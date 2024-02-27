// 1
function checkElem(num) {
    if (num % 7 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// 2

function changeElem(array, n) {
    let newArray = array.map(elem => elem * n);
    return newArray;
}

// 3
function sumElems(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let num = Number(array[i]);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
}

// 4
function reverseIndex(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    console.log(reversedArray);
}


// 5
function checkElem(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}