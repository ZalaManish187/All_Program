let output = document.getElementById("output");
let colorPicker = document.getElementById("colorPicker");
let pattern = document.getElementById("pattern");
let numbers = document.getElementById("numbers");
 

function generateFunction(){
  let n = document.getElementById("num").value;
  let result = "";
  let color = colorPicker.value;
 

  if(pattern.value === "asterisk"){
    for(let i = 1; i <= n; i++){
      for(let j = 1; j <= n - i; j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k = 1; k <= i; k++){
        result +=  ` <i class="fa-solid fa-asterisk ast" style='color:${color};'  ></i>` + " ";
      }
      result += "<br>";
    }
  }
  else if(pattern.value === "pyramid"){
    for(let i = 1; i <= n; i++){
      for(let j = 1; j <= n - i; j++){
        result += "&nbsp;&nbsp;";
      }
      for(let k = 1; k <= i; k++){
        result +=  ` <i class="fa-solid fa-caret-up" style='color:${color};' id='number' ></i>` + " ";
      }
      result += "<br>";
    }
  }
 else if(pattern.value === "Diamond"){
    for(let i = 1; i <= n ; i++){
      for(let j = 1 ; j <= n - i ; j ++){
        result += "&nbsp;&nbsp";
      }
      for(let k = 1 ; k <= i; k ++){
        result += `<i class="fa-solid fa-gem text-2xl gemPatt" style='color:${color}' ></i>` + " ";
      }
      result += "<br>";
    }
  }
 else if(pattern.value === "rectangle"){
    for(let i = 1; i <= n ; i++){
      for(let j = 1 ; j <= n - i ; j++){
        result += "&nbsp&nbsp";
      }
      for(let k = 1 ; k <= i ; k++){
        result += `<i class="fa-regular fa-square text-2xl rect" style='color:${color}'></i>` + " ";
      }
      result += "<br>"
    }
  }
 
  document.getElementById("output").innerHTML = result;

}

pattern.addEventListener("change",generateFunction);

function NumberFunction(){
   let n = document.getElementById("num").value;
  let result = "";
  let color = colorPicker.value;

   if(numbers.value === "Odd"){
    let e = 1;
    for(let i = 1; i <= n ; i ++){
      for(let j = 1; j <= n - i ; j++){
        result += "&nbsp;&nbsp;"
      }
      for(let k = 1; k <= i ; k++){
       result += `<span class='even' style = 'color:${color}' > ${e} </span>` + " ";
       e += 2;
      }
        result += "<br>";

    }
  }
 else if(numbers.value === "Even"){
  let m = 2;
    
    for(let i = 1; i <= n ; i ++){
      for(let j = 1; j <= n - i ; j++){
        result += "&nbsp;&nbsp;"
      }
      for(let k = 1; k <= i ; k++){
       result += `<span class='even' style = 'color:${color}' > ${m} </span>` + " ";
       m += 2;
        
      }
      result += "<br>";
    }
    
  }
  document.getElementById("output").innerHTML = result;

}
numbers.addEventListener("change",NumberFunction);
