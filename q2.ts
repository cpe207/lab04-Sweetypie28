function arrayStringify(c:any):string | null {
  if(c === null){
    return null;
  }else{
    let result:string = "";
  for (let i = 0; i < c.length; i++ ){
    result += c[i].tostring();
  }
  return result;
}
}

const c1[] = [1, 2, 3];
const c2[] = [10, 9, 8, 7, 6, 5];
const c3[] = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;

//รหัสนศ. : 660610746
//ชื่อ สกุล : ชลกร สุทธเวช