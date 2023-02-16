function GCD(a, b) {
    for (let i = Math.min(a, b); i > 0; i--) {
        if (a % i == 0 & b % i == 0) {
            console.log(i);
            break;
        }
    }
}
GCD(2154, 458);