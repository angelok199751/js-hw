for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`число ${i} делится на 3 и 5 без остатка`)
    }
    else if (i % 5 === 0) {
        console.log(`число ${i} делится на 5 без остатка`)
    }
    else if (i % 3 === 0 ){
        console.log(`число ${i} делится на 3 без остатка`)
    }
    else {
        console.log(i)
    }
}