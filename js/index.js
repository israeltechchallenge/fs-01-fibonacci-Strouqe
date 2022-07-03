let number = document.getElementById("index").value;
let button = document.getElementById("btn");
let checkbox = document.getElementById("checkbox");
let resultContainer = document.getElementById("resultContainer");
button.addEventListener("click", fibMain);
window.addEventListener("load", sortfib);

function fibMain() {
  if (!checkbox.checked) {
    console.log("hi1");
    document.getElementById("value").innerHTML = "0";
    document.getElementById("spinner").classList.remove("d-none");
    document.getElementById("value").classList.remove("text-danger");
    fibManual(number);
  } else {
    console.log("hi2");
    fib(number);
    sortfib();
  }
};

function fibManual() {
  let num1 = 0;
  let num2 = 1;
  let res = 0;
  document.getElementById("value").innerHTML = "";
  document.getElementById("spinner").classList.remove("d-none");
  document.getElementById("value").classList.remove("text-danger");
  if (document.getElementById("index").value > 50) {
    document.getElementById("value").classList.add("text-danger");
    document.getElementById("spinner").classList.add("d-none");
    document.getElementById("value").innerHTML = "Can’t be larger than 50";
  }
  if (document.getElementById("index").value < 1) {
    document.getElementById("value").classList.add("text-danger");
    document.getElementById("spinner").classList.add("d-none");
    document.getElementById("value").innerHTML = "Can’t be smaller than 1";
  }
  if (
    document.getElementById("index").value <= 50 &&
    document.getElementById("index").value > 0
  ) {
    document.getElementById("value").innerHTML = "";
    document.getElementById("spinner").classList.remove("d-none");
    document.getElementById("value").classList.remove("text-danger");
    let num1 = 0;
    let num2 = 1;
    let res = 0;

    for (let i = 1; i < document.getElementById("index").value; i++) {
      res = num1 + num2;
      num1 = num2;
      num2 = res;
    }
    console.log(res);
    document.getElementById("value").innerHTML = res;
    document.getElementById("spinner").classList.add("d-none");
  }
}

function fib() {
  document.getElementById("spinner").classList.remove("d-none");
  document.getElementById("value").classList.remove("text-danger");
  if (document.getElementById("index").value > 50) {
    document.getElementById("value").classList.add("text-danger");
    document.getElementById("spinner").classList.add("d-none");
    document.getElementById("value").innerHTML = "Can’t be larger than 50";
  }
  if (document.getElementById("index").value < 1) {
    document.getElementById("value").classList.add("text-danger");
    document.getElementById("spinner").classList.add("d-none");
    document.getElementById("value").innerHTML = "Can’t be less than 1";
  } else {
    document.getElementById("value").innerHTML = "";
    number = document.getElementById("index").value;
    server = `http:localhost:5050/fibonacci/${number}`;
    fetch(server).then((response) => {
      if (!response.ok) {
        document.getElementById("spinner").classList.add("d-none");
        document.getElementById("value").classList.add("text-danger");
        document.getElementById(
          "value"
        ).innerHTML = `Server Error: 42 is the meaning of life`;
      }
      response.json().then((data) => {
        document.getElementById("value").innerHTML = data.result;
      });
      document.getElementById("spinner").classList.add("d-none");
      enterRes;
    });
  }
}
function sortfib() {
  document.getElementById("spinner2").classList.remove("d-none");
  fetch("http://localhost:5050/getFibonacciResults").then((res1) => {
    res1.json().then((data1) => {
      let list = data1.results;
      list.sort((a, b) => {
        if (a.createdDate < b.createdDate) {
          return 1;
        } else {
          return -1;
        }
      });
      console.log(list);

      enterRes(list);
      document.getElementById("spinner2").classList.add("d-none");
    });
  });
}

function enterRes(sortList) {
  console.log("this is", sortList);
  document.getElementById("resultContainer").innerHTML = "";
  for (let item of sortList) {
    console.log("are", item);
    let newElm = document.createElement("li");
    newElm.innerHTML = `The Fibonnaci Of <b>${item.number}</b> is <b>${
      item.result
    }</b>. Calculated at: ${new Date(item.createdDate)}`;
    resultContainer.appendChild(newElm);
    newElm.className =
      "fs-5 border-bottom pb-3 border-secondary mt-3 d-inline-block";
  }
}
