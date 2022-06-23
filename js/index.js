findex = 7;

fvalue = 13;

document.getElementById("index").innerHTML = findex;

let prevalue = 0;
let nextvalue = 1;
let number = document.getElementById("index").value;
let button = document.getElementById("btn");


button.addEventListener("click", fib);

function fib()  {

document.getElementById("spinner").classList.remove("d-none");

if(document.getElementById("index").value > 50){

  document.getElementById("spinner").classList.add("d-none");
  document.getElementById("value").innerHTML = "Can’t be larger than 50";
} else {
document.getElementById("value").innerHTML = ''
number = document.getElementById("index").value;
server = `http:localhost:5050/fibonacci/${number}`;
fetch(server).then((response) => {
  if(!response.ok){
    document.getElementById("spinner").classList.add("d-none");
    document.getElementById("value").innerHTML = `Server Error: 42 is the meaning of life`;
  }
  response.json().then( data => { document.getElementById("value").innerHTML = data.result});
  document.getElementById("spinner").classList.add("d-none");
});

}}
