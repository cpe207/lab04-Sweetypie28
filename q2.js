function arrayStringify(c) {
    if (c === null) {
        return null;
    }
    else {
        var result = "";
        for (var i = 0; i < c.length; i++) {
            result += c[i].tostring();
        }
        return result;
    }
}
var c1, _a = [1, 2, 3];
var c2, _b = [10, 9, 8, 7, 6, 5];
var c3, _c = [];
console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));
module.exports = arrayStringify;
//รหัสนศ. : 660610746
//ชื่อ สกุล : ชลกร สุทธเวช
