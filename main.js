function button_continue_quest_hover(){
   const button = document.querySelectorAll(".button")
   let activeelement
   let notactiveelement
  let flipped = true
   button.forEach(element => {
       element.addEventListener("mouseover",flip)
       element.addEventListener("mouseout",flip)
       console.log(element)
    
       if( element.classList.contains("active")){
        activeelement = element
        
       }else{
        notactiveelement =element
       }
   });
   function flip(){
    if(flipped){
        activeelement.classList.remove("active")
        notactiveelement.classList.add("active")
        flipped = false
    }else{
        activeelement.classList.add("active")
        notactiveelement.classList.remove("active")
        flipped= true
    }
   }
}
button_continue_quest_hover()

const button = document.querySelectorAll(".button")

button.forEach(element => {
    element.style.cursor ="pointer"
    element.addEventListener("click",popup)
})

function popup(ev){
    console.log("kkjkjk")
    const popup = document.querySelector(".section-popup") 
    console.log( "---------------------------")
    console.log( popup.style.visibility)
   popup.style.visibility = "visible"
   console.log( popup.style.visibility)
   console.log( "---------------------------")
   
   popup.classList.add('open');
}
