function primeNumber(d) {
    if (d < 2) {
        return "NO";
    }
    if (d === 2) {
        return "YES";
    }
    if (d > 2) {
        for (var i = 2; i < d; i++) {
            if (d % i === 0) {
                return "NO";
                break;
            }
        }
        return "YES";
    }
}
var d1 = 107;
var d2 = 11;
var d3 = 1;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;