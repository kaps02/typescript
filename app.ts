const val1 = document.getElementById('value1') as HTMLInputElement;
const val2 = document.getElementById('value2') as HTMLInputElement;
const btn = document.getElementById('addbtn')!;

const numResult: Array<number> = [];
const strResult: Array<string> = [];

type numorstr = number | string;
type result = { val: number; timestamp: Date };

interface resultObj {
  val: number;
  timestamp: Date;
}

function addTwo(num1: numorstr, num2: numorstr) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + ' ' + num2;
  }
  return +num1 + +num2;
}

function printResult(resultObj: resultObj) {
  console.log(resultObj.val);
}

if (btn) {
  btn.addEventListener('click', function () {
    const value1 = val1.value;
    const value2 = val2.value;

    const result = addTwo(parseFloat(value1), parseFloat(value2));
    console.log(result);
  });
}
