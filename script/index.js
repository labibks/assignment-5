function getElement(id){
 const element = document.getElementById(id)
 return element
}

// heart button count

getElement("service-box").addEventListener("click",function(e){
    if(e.target.closest(".heart-btn")){
    const heartCount = e.target;
    const navHeartBtn =
    heartCount.parentNode.parentNode.parentNode.parentNode.parentNode
    .parentNode.parentNode.parentNode.children[0].children[0].children[1]
    .children[0].innerText;
    console.log(navHeartBtn);
    const count = getElement("hrt-count").innerText;
        const totalCount = Number(count) + 1
        getElement("hrt-count").innerText = totalCount
    }

})

// call button featured

getElement("service-box").addEventListener("click",function(e){
    if(e.target.closest(".call-btn")){
        const callBtn = e.target
        const serviceName1 = callBtn.parentNode.parentNode.children[1].children[0].innerText
        console.log(serviceName1)
        const serviceName = callBtn.parentNode.parentNode.children[1].children[1].innerText
        // console.log(serviceName)
        const serviceNumber = callBtn.parentNode.parentNode.children[2].children[0].innerText
        // console.log(serviceNumber)
        const navCoinBtn = callBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[1].children[0];
        // console.log(navCoinBtn)
        let coins = Number(navCoinBtn.innerText)
       
        if(coins < 20){
            alert(" ❌ Not enough coins. At least 20 coins needed");
            return
        }

        alert("📞" + "Calling " + serviceName + "-" + serviceNumber)
        coins -= 20;
        navCoinBtn.innerText = coins;
        // new element creat
        const cartContainer = getElement("cart-container")

        const callHistoryCart = document.createElement("div")
        callHistoryCart.innerHTML = `
        <div class = " parent bg-gray-100 rounded-xl flex justify-between m-3 p-3 ">
        <div>
        <h2 class = " font-semibold">${serviceName1}</h2>
        <h2 class = " text-gray-500">${serviceNumber}</h2>
        </div>
        <h2 class="">${new Date().toLocaleTimeString()}</h2>
        </div>
        `;
        cartContainer.append(callHistoryCart)

    }
})
// clear button

getElement("clear-btn").addEventListener("click",function(){
    // console.log("ami achi ekhane")
    const cartContainer = getElement("cart-container")
    cartContainer.innerHTML = "";
})

// copy button featured

getElement("service-box").addEventListener("click", function (e) {
  if (e.target.closest(".copy-btn")) {
    const copyBtn = e.target;
    const navCopyBtn =
      copyBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[2].innerText;
        // console.log(navCopyBtn)
        const serviceNumber = copyBtn.parentNode.parentNode.children[2].children[0].innerText
          console.log(serviceNumber)
    
    // copy paste requiared
    navigator.clipboard.writeText(serviceNumber);
    // alert
    alert("Number copied"+ "-" + serviceNumber);
    const count = getElement("copy-count").innerText;
    const totalCount = Number(count) + 1;
    getElement("copy-count").innerText = totalCount;
  }
});
