const inp1 = document.querySelector("#inp1")
const inp2 = document.querySelector("#inp2")
const inp3 = document.querySelector("#inp3")
const result1 = document.querySelector("#result1")
const result2 = document.querySelector("#result2")
const result3 = document.querySelector("#result3")
const form = document.querySelector("form")
const year = document.querySelector(".year")
const month = document.querySelector(".Month")
const btn = document.querySelectorAll(".btn")
const lab1 = document.querySelector("#lab1")
const lab2 = document.querySelector("#lab2")
const lab3 = document.querySelector("#lab3")
const input = document.querySelectorAll(".input")
const res1 = document.querySelector(".res1")
const res2 = document.querySelector(".res2")
const res3 = document.querySelector(".res3")
const range = document.querySelectorAll(".range")




const ranges = document.querySelectorAll("#range")




for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click",(e)=>{
    const tar = e.target
    if(tar.innerText == "Personal Loan"){
        btn[i].className = "colorses"
        btn[0].className = "colorss"
        btn[2].className = "colorss"
        // ranges[0].classList.add("rangees")
        // ranges[1].classList.remove("rangees")

    }
    if(tar.innerText == "Car Loan"){

      btn[i].className = "colorses"
        btn[0].className = "colorss"
        btn[1].className = "colorss"
  }
  if(tar.innerText == "Home Loan"){
      btn[i].className = "colorses"
      btn[1].className = "colorss"
      btn[2].className = "colorss"

}
  })
  
}

console.log(range);

for (let y = 0; y < range.length; y++) {
    range[y].addEventListener("click",()=>{
            inp1.value = range[0].value  
            inp2.value = range[1].value  
            inp3.value = range[2].value  
    })
    
}


inp1.addEventListener("keyup",()=>{
  range[0].value = inp1.value
})
inp2.addEventListener("keyup",()=>{
  range[1].value = inp2.value

})
inp3.addEventListener("keyup",()=>{
  range[2].value = inp3.value

})






year.classList.add("colors")

month.addEventListener("click",()=>{
  if(year.classList.contains("colors")){
    inp3.value = Math.round(inp3.value*12)
    month.classList.add("colors")
    year.classList.remove("colors")
  }
  

})
  year.addEventListener("click",()=>{
if(month.classList.contains("colors")){
    inps = inp3.value/12
    inp3.value = inps
    year.classList.add("colors")
    month.classList.remove("colors")
  
}

  })
  


  form.addEventListener("click",(e)=>{
    e.preventDefault();

    const P = Number(inp1.value);
    const r = Number(inp2.value)/12/100;
    const n = Number(inp3.value*12)

  if(year.classList.contains("colors")){


    let EMI = (P*r* Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
    let totalInterest =(EMI * n) - P;
    let totalPayment  = totalInterest + parseFloat(P);
    result1.innerText ="₹" + String(Math.round(EMI).toLocaleString());
    result2.innerText= "₹" +String(Math.round(totalInterest).toLocaleString());
  result3.innerText="₹" + String(Math.round(totalPayment).toLocaleString());

  }
  if(month.classList.contains("colors")){
    const P = Number(inp1.value);
    const r = Number(inp2.value)/12/100;
    const n = Number(inp3.value)

    let EMI = (P*r* Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
    let totalInterest =(EMI * n) - P;
    let totalPayment  = totalInterest + parseFloat(P);
    result1.innerText ="₹"+ String(Math.round(EMI).toLocaleString());
    result2.innerText= "₹"+String(Math.round(totalInterest).toLocaleString());
  result3.innerText="₹"+ String(Math.round(totalPayment).toLocaleString());
  }
    

});


  
inp1.value = 500000;
inp2.value=3;
inp3.value= 2;

  const P = Number(inp1.value);
    const r = Number(inp2.value)/12/100;
    const n = Number(inp3.value*12)

    let EMI = (P*r* Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
    let totalInterest =(EMI * n) - P;
    let totalPayment  = totalInterest + parseFloat(P);
    result1.innerText ="₹"+ String(Math.round(EMI).toLocaleString());
    result2.innerText= "₹"+String(Math.round(totalInterest).toLocaleString());
  result3.innerText="₹"+ String(Math.round(totalPayment).toLocaleString());
