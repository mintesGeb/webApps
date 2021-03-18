window.onload = pageload;
//Selectors
// document.getElementById("deposite-input").value;
// document.getElementById("anual-interest-rate").value;
//   document.getElementById("time").value;

function pageload() {
  document
    .getElementById("calculate-btn")
    .addEventListener("click", calculateCI);

  document.querySelector(".comp-int-btn").onclick = displayCompInt;

  document.querySelector(".show-table").onclick = showTable;

  document.querySelector(".collapse-table").onclick = collapseTable;
}

function calculateCI() {
  document.getElementById("dep").innerHTML = `   ${
    document.getElementById("deposite-input").value
  }`;
  document.getElementById("dep").style.fontSize = "1.5rem";
  document.getElementById("air").innerHTML = `   ${
    document.getElementById("anual-interest-rate").value
  }`;
  document.getElementById("air").style.fontSize = "1.5rem";

  document.getElementById("time-display").innerHTML = `  ${
    document.getElementById("time").value
  }`;
  document.getElementById("time-display").style.fontSize = "1.5rem";

  let balance = parseFloat(document.getElementById("deposite-input").value);
  let rate = parseFloat(document.getElementById("anual-interest-rate").value);
  let time = parseFloat(document.getElementById("time").value);

  // alert("Calulate Compund Interest?");
  let result = calulateCompundInterest(balance, rate, time);
  document.querySelector(".cpdi-result-text").innerHTML = result;

  let eachMonth = endOfEachMonth(balance, rate, time);

  //   alert(result);

  for (let i = 1; i <= 8; i++) {
    // console.log(i);
    // document.getElementById("r" + i).classList.toggle("hidden");
    document.getElementById("m" + i).innerHTML = eachMonth[i - 1][0];
    document.getElementById("i" + i).innerHTML = eachMonth[i - 1][1];
    document.getElementById("b" + i).innerHTML = eachMonth[i - 1][2];
  }
  for (let i = 119; i <= 120; i++) {
    // console.log(i);
    // document.getElementById("r" + i).classList.toggle("hidden");
    document.getElementById("m" + i).innerHTML = eachMonth[i - 1][0];
    document.getElementById("i" + i).innerHTML = eachMonth[i - 1][1];
    document.getElementById("b" + i).innerHTML = eachMonth[i - 1][2];
  }

  document.getElementById("show-table-guide").classList.toggle("hidden");
  greyOut();
}

function calulateCompundInterest(d, r, t) {
  let b = d;
  let mr = r / 1200;
  let m = t * 12;
  for (i = 0; i < m; i++) {
    let interest = b * mr;
    b += interest;
  }
  b = Math.floor(100 * b) / 100;
  return b;
}
function endOfEachMonth(d, r, t) {
  let eachMonth = [];
  let prep;
  let b = d;
  let mr = r / 1200;
  let m = t * 12;
  for (i = 0; i < m; i++) {
    let interest = b * mr;
    b += interest;
    prep = Math.floor(100 * b) / 100;
    eachMonth.push([i + 1, interest, prep]);
  }

  return eachMonth;
}

function showTable() {
  for (let i = 1; i <= 8; i++) {
    document.getElementById("r" + i).classList.remove("hidden");
  }
  for (let i = 119; i <= 120; i++) {
    document.getElementById("r" + i).classList.remove("hidden");
  }
  document.getElementById("show-table-guide").classList.add("hidden");
  document.querySelector(".show-table").classList.add("hidden");
  document.getElementById("r.1").classList.remove("hidden");
  document.getElementById("r.2").classList.remove("hidden");
  document.getElementById("r.3").classList.remove("hidden");
  document.querySelector(".collapse-table").classList.remove("hidden");
}
function collapseTable() {
  for (let i = 1; i <= 8; i++) {
    document.getElementById("r" + i).classList.add("hidden");
  }
  for (let i = 119; i <= 120; i++) {
    document.getElementById("r" + i).classList.add("hidden");
  }
  document.querySelector(".collapse-table").classList.add("hidden");
  document.querySelector(".show-table").classList.remove("hidden");
  document.getElementById("placeholder").classList.add("hidden");
  document.getElementById("r.1").classList.add("hidden");
  document.getElementById("r.2").classList.add("hidden");
  document.getElementById("r.3").classList.add("hidden");
}

function closeTable() {
  if (document.querySelector(".show-table").innerHTML === "Close Table") {
  }
}

function displayCompInt() {
  document.querySelector(".comp-int-content").classList.toggle("hidden");
  document.getElementById("all-table").classList.toggle("hidden");
  document.querySelector(".title-to-name").innerHTML = "Compound Interest";
  document.querySelector(".title-to-name").style.color = "#007bff";
}

function greyOut() {
  document.getElementById("deposite-input").style.backgroundColor = "#727272";
  document.getElementById("anual-interest-rate").style.backgroundColor =
    "#727272";
  document.getElementById("time").style.backgroundColor = "#727272";
}
