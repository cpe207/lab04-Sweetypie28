function primeNumber(d: number) {
  if (d < 2) {
    return "NO";
  }
  if (d === 2) {
    return "YES";
  }
  if (d > 2) {
    for (let i = 2; i < d; i++) {
      if (d % i === 0) {
        return "NO";
        break;
      }
    }
    return "YES";
  }
}

const d1 = 107;
const d2 = 11;
const d3 = 1;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;

//รหัสนศ. : 660610746
//ชื่อ สกุล : ชลกร สุทธเวช