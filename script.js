let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let num = document.getElementById("num").value;
  let color = colorPicker.value;
  let asterisk = " ";


  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num - i; j++) {
      asterisk += "&nbsp;&nbsp;";
    }

    for (let k = 0; k <= i * 2 - 1; k++) {
      asterisk += ` <i class="fa-solid fa-asterisk ast" style='color:${color};  ></i>`;
     
    }

    asterisk += "<br>";
  }
  document.getElementById("output").innerHTML = asterisk;
});

let rec = document.getElementById("rec");

rec.addEventListener("click", function () {
  let num = document.getElementById("num").value;
  const color = colorPicker.value;

  let patt = " ";
 

  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num - i; j++) {
      patt += "&nbsp&nbsp";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      patt += ` <i class="fa-solid fa-caret-up" style='color:${color};' id='number' ></i>`;
    }
    patt += "<br>";
  }
  document.getElementById("output").innerHTML = patt;
});

let colorPicker = document.getElementById("colorPicker");

let odd = document.getElementById("odd");
odd.addEventListener("click", function () {
  let n = document.getElementById("num").value;
  const color = colorPicker.value;
  let odd = " ";
  let m = 1;
  let count = 0;

  for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n - i; j++){
        odd += "&nbsp;&nbsp;";
    }
    for(let k = 1; k <= i; k++){
        odd += `<span class='odd-number' style='color:${color};'>${m}</span>&nbsp;&nbsp;&nbsp;`
        m += 2;
        count++;
    }
    odd += "<br>";
  }
  document.getElementById("output").innerHTML = odd;
});

let even =document.getElementById("even");
even.addEventListener("click",function(){
    let n = document.getElementById("num").value;
      let m = 2;
  const color = colorPicker.value;

    let even = " ";
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n - i; j++){
            even += "&nbsp;&nbsp;";
        }
        for(let k = 1 ; k <= i; k++){
            even += `<span class='odd-number' style='color:${color};'>${m}</span>&nbsp;&nbsp;&nbsp;`
               m += 2;
        }
        even += "<br>";
    }
    document.getElementById('output').innerHTML = even;
})
