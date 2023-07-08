function counter(){
    let count = 0;
    function increment(){
        count+=1;
        return count;
    }

    return increment;
}

let firstCounter = new counter();
let secondCounter = new counter();


let firstValues = []
for (let index = 0; index < 5; index++) {
    firstValues.push(firstCounter())
}

let secondValues = []
for (let index = 0; index < 3; index++) {
    secondValues.push(secondCounter())
}

console.log('firstValues Array: ' + firstValues)
console.log('secondValues Array: ' + secondValues)