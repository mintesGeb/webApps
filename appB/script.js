// alert("h");
window.onload = pageload;

function pageload() {
  document.querySelector(".submit-btn").onclick = addBinary;
}

function addBinary() {
  let sum;
  //   alert("hi");
  let firstNum = document.querySelector(".firstNum").value;
  let secondNum = document.querySelector(".secondNum").value;

  let binarySum = binaryAddition(firstNum, secondNum);

  document.querySelector(".result").textContent = binarySum;
}

function reverse(str) {
  let splitted = str.split("");
  let reversed = splitted.reverse();
  return reversed.join("");
}

function binaryAddition(str1, str2) {
  for (let each of str1) {
    if (each !== 0 || each !== 1) {
      return `Please enter a valid binary number`;
    }
  }
  for (let each of str2) {
    if (each !== 0 || each !== 1) {
      return `Please enter a valid binary number`;
    }
  }

  let sum = "";
  let rem = "0";

  for (let i = Math.max(str1.length - 1, str2.length - 1); i >= 0; i--) {
    let toSum;
    let j = i - (str1.length - str2.length);

    if (j >= 0) {
      toSum = str1[i] + str2[j];

      if (toSum === "11") {
        sum += rem;
        rem = "1";
      } else if (toSum === "00") {
        sum += rem;
        rem = "0";
      } else if (toSum === "10" || toSum === "01") {
        if ((rem = "0")) sum += "1";
        else {
          sum += "0";
          rem = "1";
        }
      }
      // console.log(toSum, sum);
    } else {
      toSum = str1[i] + rem;
      if (toSum === "11") {
        sum += 0;
        rem = "1";
      } else if (toSum === "10" || toSum === "01") {
        sum += "1";
        rem = "0";
      } else sum += "0";
    }
  }
  console.log(str1, str2);
  if (rem !== "0") return reverse(sum + rem);
  return reverse(sum);
}
