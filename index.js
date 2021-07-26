function add(a,b) {
    return (a +b)

}

function subtract(a,b) {
    return (a - b)

}

function multiply(a,b) {
    return(a * b)
}

function divide(a,b) {      
    return ( a /b)

}

add(1,2)

subtract(4,2)

multiply(5,5)

divide(10,2)


function increment(n) {
    return(++n)
}

increment(10)

function decrement(n) {
    return(--n)
}

decrement(10)

function makeInt(n) {
    return parseInt(`${n}`, 10)

}

makeInt("5")

function preserveDecimal(n) {
    return parseFloat (`${n}`);
}

preserveDecimal(10.234)