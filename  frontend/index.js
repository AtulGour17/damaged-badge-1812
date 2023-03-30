fetch("https://639caf3c16d1763ab1516c20.mockapi.io/markets")
.then((res)=>{
  return res.json()
})
.then((actualData)=>{
    console.log(actualData)
  })
  .catch((err)=>{
     console.log(err)
  })


  let LoginBTN = document.getElementById("LoginBTN");
  LoginBTN.addEventListener("click",()=>{
    window.location.href = "./createAcc.html"
  })