findex = 7;

fvalue = 13;

document.getElementById("index").innerHTML = findex;
document.getElementById("value").innerHTML = fvalue;
let prevalue = 0;
let nextvalue = 1;


function fib(number) {
  for (let i = 1; i <= number-1; i++) {
    output = prevalue + nextvalue;

    console.log(output);
    prevalue = nextvalue;
    nextvalue = output;
  }
  return output
}
