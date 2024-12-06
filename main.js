document.addEventListener('DOMContentLoaded',()=>{

    const inputFld = document.getElementById("inputfield");
    const aplybtn = document.getElementById("Applybutton");
    const resultFeld = document.getElementById("resultinput");
    let divArray = [];
    let currentDiv = null;
    aplybtn.addEventListener('click',()=>{
   if (currentDiv) {
      const resultFld = currentDiv.querySelector("input");
      resultFld.value = inputFld.value;
      inputFld.value = "";
      aplybtn.textContent = "Apply";
      currentDiv = null;
   }
   else{
    const resultdiv = document.createElement('div');
    const resultFld = document.createElement("input");
    const modiffyBtn = document.createElement("button");
    const removeBtn = document.createElement("button");


    modiffyBtn.textContent = "modify"
    modiffyBtn.classList.add("buttonStyle");
    removeBtn.textContent = "Remove"
    removeBtn.classList.add("buttonStyle");
    resultFld.type = "text";
    resultFld.value = inputFld.value;
    inputFld.value="";
    resultFld.classList.add("inputStyle");


    resultdiv.appendChild(resultFld);
    resultdiv.appendChild(modiffyBtn);
    resultdiv.appendChild(removeBtn);
    resultFeld.appendChild(resultdiv);

    divArray.push(resultdiv);
    
    removeBtn.addEventListener('click',()=>{
        resultFeld.removeChild(resultdiv);
        divArray = divArray.filter(div => div!= resultdiv );
       
    });


    modiffyBtn.addEventListener('click',()=>{
        currentDiv = resultdiv;

        inputFld.value = resultFld.value;
        resultFld.value = "";
        aplybtn.textContent= "change";
       
    });
}
 });
 

});



