let output = document.getElementById("output");
let colorPicker = document.getElementById("colorPicker");
let patt = document.getElementById("pattern");



let printOutput = document.getElementById("printOutput");

printOutput.addEventListener("click", () => {
  if (output.classList.contains("hidden")) {
    // Show output
    output.classList.remove("hidden");
    output.classList.add("block");
  } else {
    // Hide output
    output.classList.remove("block");
    output.classList.add("hidden");
  }
});







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
  num.addEventListener("input", () => {
  let n = parseInt(num.value);

   if ( n < 1 || n > 20) {
     alert("Please enter a number between 1 and 20");
     output.classList.add("hidden"); 
     num.value = ""; 
     return;
   }
 })
 

function Square() {
  let n = document.getElementById("num").value;
  let numbers = document.getElementById("numbers");
  let result = " ";
  let color = colorPicker.value;


  if (numbers.value === "Odd") {
    let O = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        result += `<span  class= 'animation' id='SquareOdd' style='color:${color}'>${O}</span> `;
        O += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Even") {
    let E = 2;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {

        result += `<span class= 'animation' id='squareEven'  style='color:${color}'>${E}</span>` + " ";
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
        result += `<span id='squarePrime'  class= 'animation'  style='color:${color}'>${number}</span>` + " ";
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
          `<span id='fiboSquare' class= 'animation'  style='color:${color}'>${Math.floor(a)}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  }else if (numbers.value === "Factorial") {
    let number = 1n;  
    let fact = 1n;    
    let color = colorPicker.value;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (number === 1n) fact = 1n;
            else fact = fact * number;

            result += `<span id='factSquare' class='animation' style='color:${color};'>${fact.toString()}</span>`;
            number++;
        }
        result += "<br>";
    }
}
 else if (numbers.value === "Palindrome") {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        result += `<span class= 'animation' id='fiboPalindrome'  style = 'color:${color}'>${j}</span>`;
      }
      for (let j = n - 1; j >= 1; j--) {
        result += `<span class= 'animation'  id='fiboPalindrome' style = 'color:${color}'>${j}</span>`;
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
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='scaleAnimation' id='oddPyramid'  style='color:${color}'>${O}</span>` + " ";
        O += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Even") {
    let E = 2;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='scaleAnimation' id='EvenPyramid' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Prime") {
    let number = 2;
    let count = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span class='scaleAnimation' id='PrimePyramid' style='color:${color}'>${number}</span>` + " ";
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
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='scaleAnimation' id='fiboPyramid' style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Factorial") {
    let number = 1n;
     let fact = 1n;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        if(number == 1n)fact = 1n
        else fact = fact * number;
       
       
        result +=
          `<span id='factPyramid' class='scaleAnimation' id='factPyramid'  style='color:${color}'>${fact}</span>` +
          " ";

        number++;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Palindrome") {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let j = 1; j <= i; j++) {
        result += `<span  class='scaleAnimation' id='palindromePyramid' style='color:${color}'>${j}</span>` + " ";
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span  class='scaleAnimation' id='palindromePyramid' style='color:${color}'>${j}</span>` + " ";
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

//    num.addEventListener("input", () => {
//   let n = parseInt(num.value);

//   if ( n < 1 || n > 20) {
//     alert("Please enter a number between 1 and 20");
//     output.classList.add("hidden"); 
//     num.value = ""; 
//     return;
//   }
// })
  if (numbers.value === "Odd") {
    for (let i = n; i >= 1; i--) {
    
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='bounce' id='reverseOdd' style='color:${color}'>${O}</span>` + " ";
        O += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Even") {
    let E = 2;
    for (let i = n; i >= 1; i--) {
     
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='bounce' id='reverseEven' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Prime") {
    let number = 0;
    let count = 0;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span class='bounce' id='reversePrime' style='color:${color}'>${number}</span>` + " ";
        number++;
        count++;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Fibo") {
    let n = document.getElementById("num").value;

    let a = 1;
    let b = 1;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='bounce' id='fiboReversePyramid' style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Palindrome") {
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let j = 1; j <= i; j++) {
        result += `<span class='bounce'  id='reversePalindrome' style='color:${color}'>${j}</span>` + " ";
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span class='bounce'  id='reversePalindrome' style='color:${color}'>${j}</span>` + " ";
      }
      result += "<br>";
    }
  } else if (numbers.value === "Factorial") {
    let number = 1n;
     let fact = 1n;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
       
       if(number == 1n) fact =1n
       else fact = fact * number;
        result +=
          `<span id='reversefactPyramid' class='bounce'  style='color:${color}'>${fact}</span>` +
          " ";

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
//    num.addEventListener("input", () => {
//   let n = parseInt(num.value);

//   if ( n < 1 || n > 20) {
//     alert("Please enter a number between 1 and 20");
//     output.classList.add("hidden"); 
//     num.value = ""; 
//     return;
//   }
// })
  if (numbers.value === "Odd") {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='shake' id='oddDiamond' style='color:${color}'>${O}</span>` + " ";
        O += 2;
      }
      result += "<br>";
    }

    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='shake'  id='oddDiamond' style='color:${color}'>${O}</span>` + " ";
        O += 2;
      }
      result += "<br>";
    }
  }
  if (numbers.value === "Even") {
    let E = 2;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='shake' id='EvenDiamond' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }

    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span  class='shake' id='EvenDiamond' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Prime") {
    let number = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span class='shake' id='primeDiamond' style='color:${color}'>${number}</span>` + " ";
        number++;
      }
      result += "<br>";
    }
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span class='shake' id='primeDiamond' style='color:${color}'>${number}</span>` + " ";
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
        result += " ";
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
        result += " ";
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
    let number = 1n;
     let fact = 1n;
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += " ";
      }
      for(let k=1;k<=i;k++){
       if(number == 1n)fact = 1n
       else fact = fact * number;
        result += `<span id='factDiamond' class='shake' style='color:${color}'>${fact}</span>` + " ";
        number ++;
      }
      result += "<br>";
    }
     for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += " ";
      }
      for(let k=1;k<=i;k++){
       if(number == 1n)fact = 1n;
       else fact = fact * number;
        result += `<span id='factDiamond' class='shake' style='color:${color}'>${fact}</span>` + " ";
        number --;
      }
      result += "<br>";
    }
  }
  
  else if (numbers.value === "Palindrome") {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let j = 1; j <= i; j++) {
        result += `<span id='palindrome' class='shake' style='color:${color}'>${j}</span>` + " ";
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span id='palindrome' class='shake' style='color:${color}'>${j}</span>` + " ";
      }
      result += "<br>";
    }
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let j = 1; j <= i; j++) {
        result += `<span id='palindrome' class='shake' style='color:${color}'>${j}</span>` + " ";
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span id='palindrome' class='shake' style='color:${color}'>${j}</span>` + " ";
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
//    num.addEventListener("input", () => {
//   let n = parseInt(num.value);

//   if ( n < 1 || n > 20) {
//     alert("Please enter a number between 1 and 20");
//     output.classList.add("hidden"); 
//     num.value = ""; 
//     return;
//   }
// })
  if (numbers.value === "Odd") {
    for (let i = 1; i <= n; i++) {
      for (let j = 2 * n - i; j >= i; j--) {
        result += "&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='fade' id='OddrightTriangle'  style='color:${color}'>${O}</span>` + " ";
        O += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Even") {
    let E = 2;
    for (let i = 1; i <= n; i++) {
      for (let j = 2 * n - i; j >= i; j--) {
        result += "&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='fade' id='evenRightTriangle' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Prime") {
    let number = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = 2 * n - i; j >= i; j--) {
        result += "&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span class='fade' id='primeRightTriangle' style='color:${color}'>${number}</span>` + " ";
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
        result += "&nbsp;&nbsp;";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='fade' id='rightFibo' style='color:${color}'>${a}</span>` + " ";
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
    let number = 1n;
        let fact = 1n;


    for(let i=1;i<=n;i++){
      for (let j = 2 * n - i; j >= i; j--) {
        result += "&nbsp;&nbsp;";
      }
     
      for(let j=1;j<=i;j++){
       if(number == 1n)fact = 1n
       else fact = fact * number;
        result += `<span class='fade' id='facttriangle' style='color:${color}'>${fact}</span>` + " ";
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
 

  if (numbers.value === "Odd") {
    let O = 1;
    for (let i = 1; i <= n; i++) {
    for(let j=1;j<=i;j++){
      result += `<span class='flip' style='color:${color}'></span>` + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
     
      for (let j = 1; j <= i; j++) {
          result += `<span class='flip' id='leftTriangleOdd' style='color:${color}'>${O}</span>` + "&nbsp;&nbsp;";
          O += 2;
         
        
      }
      result += "<br>";
    }
  } else if (numbers.value === "Even") {
    let E = 2;
    for (let i = 1; i <= n; i++) {
       for(let j=1;j<=i-1;j++){
      result += `<span class='flip'  style='color:${color}'></span>` + " ";
    }
      for (let k = 1; k <= i; k++) {
        result += `<span class='flip' id='evenleftTriangle' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Prime") {
    let number = 1;
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
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='pulse' id='oddHourGlass' style='color:${color}'>${O}</span>` + " ";
        O += 2;
      }
      result += "<br>";
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='pulse'  id='oddHourGlass' style='color:${color}'>${O}</span>` + " ";
        O += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Even") {
    let E = 2;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='pulse' id='evenHourGlass' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        result += `<span class='pulse' id='evenHourGlass' style='color:${color}'>${E}</span>` + " ";
        E += 2;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Prime") {
    let number = 1;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span  class='pulse' id='primeHourGlass' style='color:${color}'>${number}</span>` + " ";
        number++;
      }
      result += "<br>";
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        while (!isPrime(number)) {
          number++;
        }
        result += `<span class='pulse' id='primeHourGlass' style='color:${color}'>${number}</span>` + " ";
        number++;
      }
      result += "<br>";
    }
  } else if (numbers.value === "Fibo") {
    let a = 1;
    let b = 1;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
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
        result += " ";
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
        result += " ";
      }
      for (let j = 1; j <= i; j++) {
        result += `<span  class='pulse' id='palindrome' style='color:${color}'>${j}</span>` + " ";
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span  class='pulse' id='palindrome' style='color:${color}'>${j}</span>` + " ";
      }
      result += "<br>";
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let j = 1; j <= i; j++) {
        result += `<span class='pulse' id='palindrome' style='color:${color}'>${j}</span>` + " ";
      }
      for (let j = i - 1; j >= 1; j--) {
        result += `<span class='pulse' id='palindrome' style='color:${color}'>${j}</span>` + " ";
      }
      result += "<br>";
    }
  } else if (numbers.value === "Factorial") {
    let number = 1n;
      let fact = 1n;
    for (let i = n; i >= 1; i--) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
       if(number == 1n)fact = 1n
       else fact = fact * number;
        result +=
          `<span id='facthour' class='pulse'  style='color:${color}'>${fact}</span>` +
          " ";

        number++;
      }
      result += "<br>";
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        result += " ";
      }
      for (let k = 1; k <= i; k++) {
        if(number == 1n)fact = 1n
       else fact = fact * number;
        result +=
          `<span id='facthour' class='pulse'  style='color:${color}'>${fact}</span>` +
          " ";

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
//    num.addEventListener("input", () => {
//   let n = parseInt(num.value);

//   if ( n < 1 || n > 20) {
//     alert("Please enter a number between 1 and 20");
//     output.classList.add("hidden"); 
//     num.value = ""; 
//     return;
//   }
// })  
  if (numbers.value === "Odd") {
    for (let i = n; i >= 1; i--) {
      result += "&nbsp;&nbsp;&nbsp;"
      for (let j = 1; j <= i; j++) {
        result += `<span class='wave'  style='color:${color}'>${O}</span>`;
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


