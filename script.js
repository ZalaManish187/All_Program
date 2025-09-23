let output = document.getElementById("output");
let colorPicker = document.getElementById("colorPicker");
let patt = document.getElementById("pattern");

 
 



  function isPrime(num){
    if(num < 2) return false;
    for(let i=2;i<num;i++){
      if(num % i === 0) return false;
      
    }
      return true;

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
      let number = 2;
    
      let count = 0;
     for(let i=1;i<=n;i++){
      for(let j=1;j<=n;j++){
        while(!isPrime(number)){
          number++;

        }
        result +=`<span style='color:${color}'>${number}</span>` + " ";
        number++;
        count++;

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
   else if(numbers.value === "Factorial"){
 let number = 1;
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n;j++){
        let fact = 1;
  for(let x=1;x<=n;x++){
    fact *= x;
  }
        result += `<span id='factSquare'  style='color:${color}'>${fact}</span>` + " ";
     number++;
      
       
      

    }
      result += "<br>";



  
   }
  }
   else if(numbers.value === "Palindrome"){
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n;j++){
        result += `<span style = 'color:${color}'>${j}</span>`
      }
      for(let j=n-1;j>=1;j--){
        result += `<span style = 'color:${color}'>${j}</span>`

      }
      result += "<br>";
    }
   }
   document.getElementById("output").innerHTML = result;

  }

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
    let number = 2;
    let count = 0;
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        while(!isPrime(number)){
          number ++;
        }
        result += `<span style='color:${color}'>${number}</span>` + " ";
        number ++;
        count ++;
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
   let number = 1;
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
      let fact = 1;
  for(let x=1;x<=number;x++){
    fact *= x;
  }
        result += `<span id='factPyramid'  style='color:${color}'>${fact}</span>` + "&nbsp;&nbsp;&nbsp;";
       
number++;
        
        
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Palindrome"){
  
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let j=1;j<=i;j++){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
      }
       for(let j=i-1;j>=1;j--){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
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
  else if(numbers.value === "Prime"){
    let number = 0;
    for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        while(!isPrime(number)){
          number ++;
        }
        result += `<span style='color:${color}'>${number}</span>` + " ";
        number ++;
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
  else if(numbers.value === "Palindrome"){
    for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let j=1;j<=i;j++){
        result += `<span  id='palindrome' style='color:${color}'>${j}</span>`;
      }
      for(let j=i-1;j>=1;j--){
     result += `<span  id='palindrome' style='color:${color}'>${j}</span>`;

      }
      result += "<br>";
    }
  }
   else if(numbers.value === "Factorial"){
   let number = 1;
    for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
      let fact = 1;
  for(let x=1;x<=number;x++){
    fact *= x;
  }
        result += `<span id='factPyramid'  style='color:${color}'>${fact}</span>` + "&nbsp;&nbsp;&nbsp;";
       
number++;
        
        
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
  else if(numbers.value === "Prime"){
    let number = 0;
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        while(!isPrime(number)){
          number ++;
        }
        result += `<span style='color:${color}'>${number}</span>` + " ";
        number ++;
      }
      result += "<br>";
    }
     for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        while(!isPrime(number)){
          number ++;
        }
        result += `<span style='color:${color}'>${number}</span>` + " ";
        number ++;
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
   else if(numbers.value === "Palindrome"){
  
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let j=1;j<=i;j++){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
      }
       for(let j=i-1;j>=1;j--){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
      }
      result += "<br>";
    }
     for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let j=1;j<=i;j++){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
      }
       for(let j=i-1;j>=1;j--){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
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
  else if(numbers.value === "Prime"){
    let number = 0;
    for(let i=1;i<=n;i++){
      for(let j=2*n-i;j>=i;j--){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        while(!isPrime(number)){
          number++;
        }
        result += `<span style='color:${color}'>${number}</span>` + " ";
        number ++;
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
      for(let k  =1;k<=i;k++){
        result += `<span id='rightFibo' style='color:${color}'>${a}</span>`;
        let c =  a +  b;
        a = b;
        b = c;
      }
      result += "<br>";
    }
  }
   else if(numbers.value === "Palindrome"){
    for(let i=1;i<=n;i++){
       for(let j=2*n-i;j>=i;j--){
        result += "&nbsp;&nbsp;";

       
      }
       for(let j=1;j<=i;j++){
              result += `<span id='palindrome' style='color:${color}'>${j}</span>`;


       
      }
       for(let j=i-1;j>=1;j--){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
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
  else if(numbers.value === "Prime"){
    let number = 0;
    for(let i=1;i<=n;i++){
      for(let j=1;j<=i;j++){
        while(!isPrime(number)){
          number++;
        }
        result += `<span style='color:${color}'>${number}</span>`;
        number ++;
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
  else if(numbers.value === "Palindrome"){
    for(let i=1;i<=n;i++){
       for(let j=1;j<=i;j++){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
      }
       for(let j=i-1;j>=1;j--){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
      }
      result += "<br>";
    }
  }
  else if(numbers.value === "Factorial"){
 let number = 1;
    for(let i=1;i<=n;i++){
      for(let j=1;j<=i;j++){
        let fact = 1;
  for(let x=1;x<=number;x++){
    fact *= x;
  }
        result += `<span id='factSquare'  style='color:${color}'>${fact}</span>` + " ";
     number++;
      
       
      

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
  else if(numbers.value === "Prime"){
    let number = 0;
    for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        while(!isPrime(number)){
          number++;
        }
        result += `<span style='color:${color}'>${number}</span>` + " ";
        number ++;
      }
      result += "<br>";
    }
     for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
        while(!isPrime(number)){
          number++;
        }
        result += `<span style='color:${color}'>${number}</span>` + " ";
        number ++;
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
  else if(numbers.value === "Palindrome"){
     for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let j=1;j<=i;j++){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
      }
       for(let j=i-1;j>=1;j--){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
      }
      result += "<br>";
    }
     for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let j=1;j<=i;j++){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
      }
       for(let j=i-1;j>=1;j--){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
      }
      result += "<br>";
    }
  }
    else if(numbers.value === "Factorial"){
   let number = 1;
    for(let i=n;i>=1;i--){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
      let fact = 1;
  for(let x=1;x<=number;x++){
    fact *= x;
  }
        result += `<span id='factPyramid'  style='color:${color}'>${fact}</span>` + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
       
number++;
        
        
      }
      result += "<br>";
    }
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n-i;j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k=1;k<=i;k++){
      let fact = 1;
  for(let x=1;x<=number;x++){
    fact *= x;
  }
        result += `<span id='factPyramid'  style='color:${color}'>${fact}</span>` + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
       
number++;
        
        
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
  else if(numbers.value === "Prime"){
    let number = 0;
    for(let i=n;i>=1;i--){
      for(let j=1;j<=i;j++){
        while(!isPrime(number)){
          number++;
        }
        result += `<span style = 'color:${color}'>${number}</span>` + " ";
        number ++;
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
   else if(numbers.value === "Palindrome"){
    for(let i=n;i>=1;i--){
       for(let j=1;j<=i;j++){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
      }
       for(let j=i-1;j>=1;j--){
        result += `<span id='palindrome' style='color:${color}'>${j}</span>`;

       
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

  
 




