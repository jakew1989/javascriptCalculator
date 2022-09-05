const topDisplay = document.querySelector("[data-top-display]");
const bottomDisplay = document.querySelector("[data-bottom-display]");
const buttons = document.querySelectorAll("[data-number]");
const funcs = document.querySelectorAll("[data-func]")
const equals = document.querySelector("[data-equals]");
const deletes = document.querySelector("[data-delete]");
const allClear = document.querySelector("[data-all-clear]")


 function activateNums() {
   for (let i = 0; i < buttons.length; i++) {
         buttons[i].addEventListener("click", function() {
           bottomDisplay.innerText += (buttons[i].innerText)
         }); 
   };
   activateFuncs();
 };

 function activateFuncs() {
      for (let j = 0; j < funcs.length; j++) {
        funcs[j].addEventListener("click", function() {
        bottomDisplay.innerText += (funcs[j].value);           
        });     
  };
};

activateNums();


//adds numbers and operations to screen as they are pressed and computes answer
equals.addEventListener("click", function() {
  let num = eval(bottomDisplay.innerText);
  topDisplay.innerText = bottomDisplay.innerText + "=";
  bottomDisplay.innerText = num;
})

deletes.addEventListener("click", function() {
  let deletedVal = bottomDisplay.innerText.slice(0, -1);
  bottomDisplay.innerText = deletedVal;
})

allClear.addEventListener("click", function() {
  topDisplay.innerText = "";
  bottomDisplay.innerText = "";
})



