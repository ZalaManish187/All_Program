let output = document.getElementById("output");
let colorPicker = document.getElementById("colorPicker");
let patt = document.getElementById("pattern");

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isFact(num){
  let fact = 1;
  for(let i=1;i<=num;i++){
    fact *= i;
  }
  return fact;
}
 

function Square() {
  let n = document.getElementById("num").value;
  let numbers = document.getElementById("numbers");
  let result = " ";
  let color = colorPicker.value;

  if (numbers.value === "Odd") {
    let O = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        result += `<span  class= 'animation' style='color:${color}'>${O}</span> ` + "&nbsp;&nbsp;";
        O += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Even") {
    let E = 2;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {

        result += `<span class= 'animation'   style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Prime") {
    let number = 2;

    let count = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span  class= 'animation'  style='color:${color}'>${number}</span>` + " ";
        number++;
        count++;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Fibo") {
    let n = document.getElementById("num").value;
    let color = colorPicker.value;
    let a = 1;
    let b = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        result +=
          `<span id='fiboSquare' class= 'animation'  style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Factorial") {
    let number = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        let fact = 1;
        for (let x = 1; x <= number; x++) {
          fact *= x;
        }
        result +=
          `<span id='factSquare' class= 'animation'  style='color:${color}'>${Number(fact)}</span>` + "&nbsp;&nbsp;";
        number++;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Palindrome") {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        result += `<span class= 'animation'  style = 'color:${color}'>${j}</span>`;
      }
      for (let j = n - 1; j >= 1; j--) {
        result += `<span class= 'animation'  style = 'color:${color}'>${j}</span>`;
      }
      result += "<br>";
    }
  }
 


  document.getElementById("output").innerHTML = result;
}

function Pyramid() {
  let n = document.getElementById("num").value;
  let result = " ";
  let color = colorPicker.value;
  let O = 1;
  if (numbers.value === "Odd") {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='scaleAnimation'  style='color:${color}'>${O}</span>`;
        O += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Even") {
    let E = 2;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='scaleAnimation' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Prime") {
    let number = 2;
    let count = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span class='scaleAnimation' style='color:${color}'>${number}</span>` + " ";
        number++;
        count++;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Fibo") {
    let n = document.getElementById("num").value;

    let a = 1;
    let b = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='scaleAnimation' id='fibo' style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Factorial") {
    let number = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        let fact = 1;
        for (let x = 1; x <= number; x++) {
          fact *= x;
        }
        result +=
          `<span id='factPyramid' class='scaleAnimation'  style='color:${color}'>${fact}</span>` +
          "&nbsp;&nbsp;&nbsp;";

        number++;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Palindrome") {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;";
      }
      for (let j = 1; j <= i; j++) {
        result += `<span id='palindrome' class='scaleAnimation' style='color:${color}'>${j}</span>`;
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span id='palindrome' class='scaleAnimation' style='color:${color}'>${j}</span>`;
      }
      result += "<br>";
    }
  }
  document.getElementById("output").innerHTML = result;
}
function ReversePyramid() {
  let n = document.getElementById("num").value;
  let result = " ";
  let color = colorPicker.value;
  let O = 1;
  if (numbers.value === "Odd") {
    for (let i = n; i >= 1; i--) {
    
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='bounce' style='color:${color}'>${O}</span>` + " ";
        O += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Even") {
    let E = 2;
    for (let i = n; i >= 1; i--) {
      result += "&nbsp;";
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='bounce' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Prime") {
    let number = 0;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span class='bounce' style='color:${color}'>${number}</span>` + " ";
        number++;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Fibo") {
    let n = document.getElementById("num").value;

    let a = 1;
    let b = 1;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='bounce' id='fibo' style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Palindrome") {
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;";
      }
      for (let j = 1; j <= i; j++) {
        result += `<span class='bounce'  id='palindrome' style='color:${color}'>${j}</span>`;
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span class='bounce'  id='palindrome' style='color:${color}'>${j}</span>`;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Factorial") {
    let number = 1;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        let fact = 1;
        for (let x = 1; x <= number; x++) {
          fact *= x;
        }
        result +=
          `<span id='factPyramid' class='bounce'  style='color:${color}'>${fact}</span>` +
          "&nbsp;&nbsp;&nbsp;";

        number++;
      }
      result += "<br>";
    }
  }
  document.getElementById("output").innerHTML = result;
}
function Diamond() {
  let n = document.getElementById("num").value;
  let result = " ";
  let color = colorPicker.value;
  let O = 1;
  if (numbers.value === "Odd") {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='shake' style='color:${color}'>${O}</span>` + " ";
        O += 2;
      }
      result += "<br>";
    }

    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='shake' style='color:${color}'>${O}</span>` + " ";
        O += 2;
      }
      result += "<br>";
    }
  }
  if (numbers.value === "Even") {
    let E = 2;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='shake' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }

    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span  class='shake' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Prime") {
    let number = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span class='shake' style='color:${color}'>${number}</span>` + " ";
        number++;
      }
      result += "<br>";
    }
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span class='shake' style='color:${color}'>${number}</span>` + " ";
        number++;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Fibo") {
    let n = document.getElementById("num").value;

    let a = 1;
    let b = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += 
          `<span id='fiboDiamond' class='shake' style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result +=
          `<span id='fiboDiamond' class='shake' style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Factorial"){
    let number = " ";
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        let fact = 1;
        for(let x = 1;x<=number;x++){
          fact *= x;
        }
        result += `<span id='factPyramid' class='shake' style='color:${color}'>${fact}</span>` + "&nbsp;&nbsp;&nbsp;&nbsp;";
        number ++;
      }
      result += "<br>";
    }
     for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        let fact = 1;
        for(let x = 1;x<=number;x++){
          fact *= x;
        }
        result += `<span id='factPyramid' class='shake' style='color:${color}'>${fact}</span>` + "&nbsp;&nbsp;&nbsp;&nbsp;";
        number --;
      }
      result += "<br>";
    }
  }
  
  else if (numbers.value === "Palindrome") {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;";
      }
      for (let j = 1; j <= i; j++) {
        result += `<span id='palindrome' class='shake' style='color:${color}'>${j}</span>`;
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span id='palindrome' class='shake' style='color:${color}'>${j}</span>`;
      }
      result += "<br>";
    }
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;";
      }
      for (let j = 1; j <= i; j++) {
        result += `<span id='palindrome' class='shake' style='color:${color}'>${j}</span>`;
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span id='palindrome' class='shake' style='color:${color}'>${j}</span>`;
      }
      result += "<br>";
    }
  }

  document.getElementById("output").innerHTML = result;
}

function RightTriangle() {
  let n = document.getElementById("num").value;
  let result = " ";
  let color = colorPicker.value;
  let O = 1;
  if (numbers.value === "Odd") {
    for (let i = 1; i <= n; i++) {
      for (let j = 2 * n - i; j >= i; j--) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='fade'  style='color:${color}'>${O}</span>` + " ";
        O += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Even") {
    let E = 2;
    for (let i = 1; i <= n; i++) {
      for (let j = 2 * n - i; j >= i; j--) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='fade' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Prime") {
    let number = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = 2 * n - i; j >= i; j--) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span class='fade' style='color:${color}'>${number}</span>` + " ";
        number++;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Fibo") {
    let n = document.getElementById("num").value;
    let a = 1;
    let b = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 2 * n - i; j >= i; j--) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='fade' id='rightFibo' style='color:${color}'>${a}</span>`;
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Palindrome") {
    for (let i = 1; i <= n; i++) {
      for (let j = 2 * n - i; j >= i; j--) {
        result += "&nbsp;&nbsp;";
      }
      for (let j = 1; j <= i; j++) {
        result += `<span class='fade' id='palindrome' style='color:${color}'>${j}</span>`;
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span class='fade' id='palindrome' style='color:${color}'>${j}</span>`;
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Factorial"){
    let number = 1;
    for(let i=1;i<=n;i++){
      for (let j = 2 * n - i; j >= i; j--) {
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
     
      for(let j=1;j<=i;j++){
        let fact = 1;
        for(let x = 1;x<=number;x++){
          fact *= x;
        }
        result += `<span class='fade' id='facttriangle' style='color:${color}'>${fact}</span>` + "&nbsp;";
        number ++;
      }
      result += "<br>";
    }
  }
  document.getElementById("output").innerHTML = result;
}
function LeftTriangle() {
  let n = document.getElementById("num").value;
  let result = " ";
  let color = colorPicker.value;
  let O = 1;
  if (numbers.value === "Odd") {
    for (let i = 1; i <= n; i++) {
      for (let k = 1; k <= i; k++) {
        if (O % 2 === 1) {
          result += `<span class='flip' style='color:${color}'>${O}</span>` + " ";
          O += 2;
        }
      }
      result += "<br>";
    }
  } else if (numbers.value === "Even") {
    let E = 2;
    for (let i = 1; i <= n; i++) {
      for (let k = 1; k <= i; k++) {
        result += `<span class='flip' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Prime") {
    let number = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span class='flip' style='color:${color}'>${number}</span>`;
        number++;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Fibo") {
    let n = document.getElementById("num").value;
    let a = 1;
    let b = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        result += `<span class='flip' style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Palindrome") {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        result += `<span class='flip' id='palindrome' style='color:${color}'>${j}</span>`;
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span class='flip' id='palindrome' style='color:${color}'>${j}</span>`;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Factorial") {
    let number = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        let fact = 1;
        for (let x = 1; x <= number; x++) {
          fact *= x;
        }
        result +=
          `<span id='factSquare' class='flip'  style='color:${color}'>${fact}</span>` + "&nbsp;";
        number++;
      }
      result += "<br>";
    }
  }
  document.getElementById("output").innerHTML = result;
}
function HourGlass() {
  let n = document.getElementById("num").value;
  let result = " ";
  let color = colorPicker.value;
  if (numbers.value === "Odd") {
    let O = 1;

    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='pulse' style='color:${color}'>${O}</span>` + " ";
        O += 2;
      }
      result += "<br>";
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='pulse' style='color:${color}'>${O}</span>` + " ";
        O += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Even") {
    let E = 2;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='pulse' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='pulse' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Prime") {
    let number = 0;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span  class='pulse' style='color:${color}'>${number}</span>` + " ";
        number++;
      }
      result += "<br>";
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span class='pulse' style='color:${color}'>${number}</span>` + " ";
        number++;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Fibo") {
    let a = 1;
    let b = 1;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result +=
          `<span id='fiboHour' class='pulse' style = 'color:${color}'> ${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result +=
          `<span id='fiboHour' class='pulse' style = 'color:${color}'> ${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Palindrome") {
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;";
      }
      for (let j = 1; j <= i; j++) {
        result += `<span  class='pulse' id='palindrome' style='color:${color}'>${j}</span>`;
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span  class='pulse' id='palindrome' style='color:${color}'>${j}</span>`;
      }
      result += "<br>";
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;";
      }
      for (let j = 1; j <= i; j++) {
        result += `<span class='pulse' id='palindrome' style='color:${color}'>${j}</span>`;
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span class='pulse' id='palindrome' style='color:${color}'>${j}</span>`;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Factorial") {
    let number = 1;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        let fact = 1;
        for (let x = 1; x <= number; x++) {
          fact *= x;
        }
        result +=
          `<span id='factPyramid' class='pulse'  style='color:${color}'>${fact}</span>` +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

        number++;
      }
      result += "<br>";
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        let fact = 1;
        for (let x = 1; x <= number; x++) {
          fact *= x;
        }
        result +=
          `<span id='factPyramid' class='pulse'  style='color:${color}'>${fact}</span>` +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

        number--;
      }
      result += "<br>";
    }
  }

  document.getElementById("output").innerHTML = result;
}

function invertedRight() {
  let n = document.getElementById("num").value;
  let result = " ";
  let O = 1;
  let color = colorPicker.value;
  if (numbers.value === "Odd") {
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        result += `<span class='wave'  style='color:${color}'>${O}</span>` + " ";
        O += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Even") {
    let E = 2;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        result += `<span class='wave' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Prime") {
    let number = 0;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span class='wave' style = 'color:${color}'>${number}</span>` + " ";
        number++;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Fibo") {
    let a = 1;
    let b = 1;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        result +=
          `<span id="FiboRight" class='wave' style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Palindrome") {
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        result += `<span class='wave' id='palindrome' style='color:${color}'>${j}</span>`;
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span class='wave' id='palindrome' style='color:${color}'>${j}</span>`;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Factorial") {
    let number = 1;
    for (let i = n; i >= 1; i--) {
    
      for (let j = 1; j <= i; j++) {
       
         result +=
          `<span id='isfact' class='wave'  style='color:${color}'>${isFact(number)}</span>` + "&nbsp;";
        number++;
      
      }
      result += "<br>";

     
    }

  }
  document.getElementById("output").innerHTML = result;

}
let checkbox = document.getElementById("check"); 
  

 checkbox.addEventListener("change", () => {
  let spans = document.querySelectorAll(".animation");

  spans.forEach(span=>{
if(checkbox.checked){
        span.classList.add("animate");

     }else{
      span.classList.remove("animate");
     }
  })
     
    })
  checkbox.addEventListener("change", () => {
  let spans = document.querySelectorAll(".scaleAnimation");

  spans.forEach(span=>{
if(checkbox.checked){
        span.classList.add("scalePyramid");

     }else{
      span.classList.remove("scalePyramid");
     }
  });
     
    });
  
 checkbox.addEventListener("change", () => {
  let spans = document.querySelectorAll(".bounce");

  spans.forEach(span=>{
if(checkbox.checked){
        span.classList.add("bounceReversePyramid");

     }else{
      span.classList.remove("bounceReversePyramid");
     }
  });
     
    });
  
 checkbox.addEventListener("change", () => {
  let spans = document.querySelectorAll(".shake");

  spans.forEach(span=>{
if(checkbox.checked){
        span.classList.add("shakeDiamond");

     }else{
      span.classList.remove("shakeDiamond");
     }
  });
     
    });

 checkbox.addEventListener("change", () => {
  let spans = document.querySelectorAll(".shake");

  spans.forEach(span=>{
if(checkbox.checked){
        span.classList.add("shakeDiamond");

     }else{
      span.classList.remove("shakeDiamond");
     }
  });
     
    });

checkbox.addEventListener("change", () => {
  let spans = document.querySelectorAll(".fade");

  spans.forEach(span=>{
if(checkbox.checked){
        span.classList.add("fadeTriangle");

     }else{
      span.classList.remove("fadeTriangle");
     }
  });
     
    });

checkbox.addEventListener("change", () => {
  let spans = document.querySelectorAll(".flip");

  spans.forEach(span=>{
if(checkbox.checked){
        span.classList.add("flipTriangle");

     }else{
      span.classList.remove("flipTriangle");
     }
  });
     
    });
checkbox.addEventListener("change", () => {
  let spans = document.querySelectorAll(".pulse");

  spans.forEach(span=>{
if(checkbox.checked){
        span.classList.add("swingHourglass");

     }else{
      span.classList.remove("swingHourglass");
     }
  });
     
    });
checkbox.addEventListener("change", () => {
  let spans = document.querySelectorAll(".wave");

  spans.forEach(span=>{
if(checkbox.checked){
        span.classList.add("waveTriangle");

     }else{
      span.classList.remove("waveTriangle");
     }
  });
     
    });


