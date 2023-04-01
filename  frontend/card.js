






fetch("https://639caf3c16d1763ab1516c20.mockapi.io/markets")
.then((res)=>{
  return res.json()
})
.then((actualData)=>{
    console.log(actualData)
    productData = actualData
    fetchedData = actualData;
    displayData(actualData)
  })
  .catch((err)=>{
     console.log(err)
  })

let cardItem = document.getElementById("cardItems")

let filter = document.getElementById("filter");

let fetchedData = []
filter.addEventListener("change",()=>{
   let filtered = fetchedData.filter((element)=>{
     if(element.brand === filter.value){
        return true;
     }else {
        return false;
     }
   })
   displayData(filtered)
})

function displayData(data){
  cardItem.innerHTML = null;
   data.forEach(element => {
       
        let card = document.createElement("div");
        card.className = "card";

        let cardImg = document.createElement("div");
        cardImg.className = "cardImg";

        let image = document.createElement("img");
        image.setAttribute("src",element.image)
        
        let brand = document.createElement("h3");
        brand.innerText = element.brand;

        let description = document.createElement("p");
        description.className = "description"
        description.innerText = element.dec;

        let price = document.createElement("p");
        price.className = "price"
        price.innerText =  element.price;

        let Add = document.createElement("button");
        Add.innerText = "Add To Card";
        Add.className = "Add";

        Add.addEventListener("click",()=>{
          let AddData = JSON.parse(localStorage.getItem("Add"));
          if(AddData === null) AddData = [];

          let IsAllready = false;
          for(let i=0 ; i<AddData.length;i++){
              if(AddData[i].id === element.id){
                  IsAllready = true;
                  break;
              }
          };
          if( IsAllready === true){
              swal("Already in Cart!", "Add Something else!", "warning")
          }else{
              AddData.push(element);
              localStorage.setItem("Add",JSON.stringify(AddData));
              swal("Successfully Added to Cart!", "See More!", "success")
          }
      })

      cardImg.append(image)
      card.append(cardImg,brand,description,price,Add)
      cardItem.append(card)
   });
}

let high = document.getElementById("high");
high.addEventListener("click",()=>{
  let highData = productData.sort((a,b)=>{
    return (b.price - a.price)
    
  })
  displayData(highData)
})



let low = document.getElementById("low")

low.addEventListener("click",()=>{
  let lowData = productData.sort((a,b)=>{
    return (a.price - b.price)
    
  })
  displayData(lowData)
})






YourCard.addEventListener("click",()=>{
  window.location.href = "./checkout.html" 
})


  let LoginBTN = document.getElementById("LoginBTN");
  LoginBTN.addEventListener("click",()=>{
    window.location.href = "./createAcc.html"
  })

  let Home = document.getElementById("Home");
  Home.addEventListener("click",()=>{
  window.location.href = "./index.html"
})