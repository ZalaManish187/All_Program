let output = document.getElementById("output");
let colorPicker = document.getElementById("colorPicker");
let patt = document.getElementById("pattern");

 
 function fact(n){
let f = 1;
   for(let i=1;i<=n;i++){
    f *= i;
   }
   return f;
    }

 
 function Square(){
    let n = document.getElementById("num").value;
let numbers = document.getElementById("numbers");
     let result = " ";


    
     let color = colorPicker.value;
    if(numbers.value === "Odd") {
        let O = 1; 
        for(let i = 1; i <= n; i++){
            for(let j = 1; j <= n; j++){
                result += `<span style='color:${color}'>${O}</span> `;
                O += 2;
            }
            result += "<br>";
        }
    }
    else if(numbers.value === "Even"){
      let E = 2;
      for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
             result += `<span style='color:${color}'>${E}</span>` + " ";
          E += 2;
        }
        result += "<br>";

      }



     }
     else if(numbers.value === "Prime"){
      let primes = [];
      let n = document.getElementById("num").value;
      let color = colorPicker.value;
      
      for(let i=2;i<=n*n;i++){
        let isPrime = true;
        for(let j=2;j<i;j++){
          if(i% j === 0){
            isPrime = false;
            break;
          }
        }
        if(isPrime){
          primes.push(i);
          
       
        
      }
     }
     let k = 0;
     for(let i=1;i<=n;i++){
      for(let j=1;j<=n;j++){
        if(k < primes.length){
        result += `<span id='SquarePattern' style='color:${color}'>${primes[k]}</span>` + " ";
        k++;
        }
        
    }
      result += "<br>";

     }


   }
   else if(numbers.value === "Fibo"){
      let n = document.getElementById("num").value;
      let color = colorPicker.value;
      let a = 1;
      let b = 1;
      for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
          result += `<span id='fiboSquare' style='color:${color}'>${a}</span>` + " ";
          let c = a + b;
          a = b;
          b = c;
        }
      result += "<br>";

      }
   }
  //  else if(numbers.value === "Factorial"){
   
    
   
  //   let k=1;

  //  for(let i=1;i<=n;i++){
  //   for(let j=1;j<=n;j++){
  //     result += fact(k) + " ";
  //     k+=2;
  //   }
  //   result += "<br>";
  //  }
  //  }
  //  document.getElementById("output").innerHTML = result;

  // }

   function Pyramid(){
    let n = document.getElementById("num").value;
    let result = " ";
    let color = colorPicker.value;
    let O = 1;
    if(numbers.value === "Odd"){
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
           result += `<span style='color:${color}'>${O}</span>`;
          O+=2;
        
      }
      result += "<br>";
    }
  }
 else  if(numbers.value === "Even"){
    let E = 2;
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
           result += `<span style='color:${color}'>${E}</span>` + " ";
          E += 2;
        
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Prime"){
   if(n < 2)return false;
   for(let i=1;i<=n;i++){

   }
    for(let i=1;i<=prime.length;i++){
      for(let j=1;j<=prime.length-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        if(P < prime.length){
        result += `<span style='color:${color}'>${prime[P]}</span>`;
        P++;
        }
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Fibo"){
    let n = document.getElementById("num").value;
   
    let a = 1;
    let b = 1;
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n - i;j++){
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        
        result += `<span id='fibo' style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
       
      }
    result += "<br>";

    }
  }
  else if(numbers.value === "Factorial"){
    let Fact = 1;
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        result *= `<span style='color:${color}'>${i} = ${Fact}</span>`
      }
      result += "<br>";
    }
  }
   document.getElementById("output").innerHTML = result;

   }
   function ReversePyramid(){
    let n = document.getElementById("num").value;
    let result = " ";
    let color = colorPicker.value;
    let O = 1;
    if(numbers.value === "Odd"){
    for(let i=n;i>=1;i--){
      result += "&nbsp;"
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
           result += `<span style='color:${color}'>${O}</span>` + " ";
          O+=2;
        
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Even"){
    let E = 2;
    for(let i=n;i>=1;i--){

      result += "&nbsp;"
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
           result += `<span style='color:${color}'>${E}</span>` + " ";
          E += 2;
        
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Fibo"){
    let n = document.getElementById("num").value;
   
    let a = 1;
    let b = 1;
    for(let i=n;i>=1;i--){
      for(let j=1;j<=n - i;j++){
        result += "&nbsp;&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        
        result += `<span id='fibo' style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
       
      }
    result += "<br>";

    }
  }
    document.getElementById("output").innerHTML = result;
   }
   function Diamond(){
    let n = document.getElementById("num").value;
     let result = " ";
     let color = colorPicker.value;
    let O = 1;
    if(numbers.value === "Odd"){
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
           result += `<span style='color:${color}'>${O}</span>` + " ";
          O+=2;
        
      }
      result += "<br>";
    }
  
     for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
           result += `<span style='color:${color}'>${O}</span>` + " ";
          O+=2;
        
      }
      result += "<br>";
    }
  }
   if(numbers.value === "Even"){
    let E = 2;
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
           result += `<span style='color:${color}'>${E}</span>` + " ";
          E += 2;
        
      }
      result += "<br>";
    }
  
     for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
           result += `<span style='color:${color}'>${E}</span>` + " ";
          E += 2;
        
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Fibo"){
    let n = document.getElementById("num").value;
   
    let a = 1;
    let b = 1;
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n - i;j++){
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        
        result += `<span id='fiboDiamond' style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
       
      }
    result += "<br>";

    }
    for(let i=n;i>=1;i--){
      for(let j=1;j<=n - i;j++){
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        
        result += `<span id='fiboDiamond' style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
       
      }
    result += "<br>";

    }
  
  }
  
    
   document.getElementById("output").innerHTML = result;

   }

   function RightTriangle(){
    let n = document.getElementById("num").value;
     let result = " ";
     let color = colorPicker.value;
    let O = 1;
    if(numbers.value === "Odd"){
    for(let i=1;i<=n;i++){
      for(let j=2*n-i;j>=i;j--){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
           result += `<span style='color:${color}'>${O}</span>` + " ";
          O+=2;
      }
      result += "<br>";
   }
  }
  else if(numbers.value === "Even"){
    let E = 2;
     for(let i=1;i<=n;i++){
      for(let j=2*n-i;j>=i;j--){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
           result += `<span style='color:${color}'>${E}</span>` + " ";
          E += 2;
      }
      result += "<br>";
   }
  }
  else if(numbers.value === "Fibo"){
    let n = document.getElementById("num").value;
    let a = 1;
    let b = 1;
    for(let i=1;i<=n;i++){
      for(let j=2*n-i;j>=i;j--){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        result += `<span id='rightFibo' style='color:${color}'>${a}</span>`;
        let c =  a +  b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  }
   document.getElementById("output").innerHTML = result;

  }
  function LeftTriangle(){
    let n = document.getElementById("num").value;
    let result = " ";
    let color = colorPicker.value;
    let O = 1;
    if(numbers.value === "Odd"){
    for(let i=1;i<=n;i++){
     
      for(let k=1;k<=i;k++){
        if(O % 2 === 1){
        result += `<span style='color:${color}'>${O}</span>` + " ";
          O+=2;
        }
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Even"){
    let E = 2;
     for(let i=1;i<=n;i++){
     
      for(let k=1;k<=i;k++){
        result += `<span style='color:${color}'>${E}</span>` + " ";
          E += 2;
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Fibo"){
    let n = document.getElementById("num").value;
    let a = 1;
    let b = 1;
    for(let i=1;i<=n;i++){
      for(let j=1;j<i;j++){
        result += `<span style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  }
    document.getElementById("output").innerHTML = result;

  }
  function HourGlass(){
    let n = document.getElementById("num").value;
    let result = " ";
    let color = colorPicker.value;
    if(numbers.value === "Odd"){
    let O = 1;

    for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";

      }
      for(let k=1;k<=i;k++){
          result += `<span style='color:${color}'>${O}</span>` + " "; 
          O+=2;
      }
      result += "<br>";
    }
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
         result += `<span style='color:${color}'>${O}</span>` + " "; 
          O+=2;
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Even"){
    let E = 2;
    for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";

      }
      for(let k=1;k<=i;k++){
          result += `<span style='color:${color}'>${E}</span>` + " "; 
          E += 2;
      }
      result += "<br>";
    }
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
         result += `<span style='color:${color}'>${E}</span>` + " "; 
          E += 2;
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Fibo"){
    let a = 1;
    let b = 1;
    for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        result += `<span id='fiboHour' style = 'color:${color}'> ${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
     for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        result += `<span id='fiboHour' style = 'color:${color}'> ${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  }
  
    document.getElementById("output").innerHTML = result;
  }

  function invertedRight(){
    let n = document.getElementById("num").value;
    let result = " ";
    let O = 1;
    let color = colorPicker.value;
    if(numbers.value === "Odd"){
    for(let i=n;i>=1;i--){
      for(let j=1;j<=i;j++){
          result += `<span style='color:${color}'>${O}</span>` + " "; 
          O+=2;
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Even"){
    let E = 2;
    for(let i=n;i>=1;i--){
      for(let j=1;j<=i;j++){
          result += `<span style='color:${color}'>${E}</span>` + " "; 
          E += 2;
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Fibo"){
    let a = 1;
    let b = 1;
    for(let i=n;i>=1;i--){
      for(let j=1;j<=i;j++){
        result += `<span id="FiboRight" style='color:${color}'>${a}</span>` + " ";
        let c = a + b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  }
    document.getElementById("output").innerHTML = result;
  }

  let offers = document.getElementById("offers");

  offers.addEventListener("change",function(){
    if(offers.checked){
      output += `<span class='ani'>${output}</span>`;
    }
  })

  
 




