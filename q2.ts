function arrayStringify(a:any):string | null {
  if(a === null){
    return null;
  }else{
    let result:string = "";
  for(let i = 0; i < a.length; i++){
    result += a[i].toString();
  }
    return result; 
  }
   
}

const c1 = [1, 2, 3];
const c2 = [10, 9, 8, 7, 6, 5];
const c3 = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;



//รหัสนศ. : 660610746
//ชื่อ สกุล : ชลกร สุทธเวช