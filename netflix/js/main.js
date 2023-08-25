var accordionElements = document.getElementsByClassName("accordion");

for (let index = 0; index < accordionElements.length; index++) {
  accordionElements[index].addEventListener("click" ,function(){

    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    }else {
      panel.style.maxHeight = panel.scrollHeight +"px"
    }
  });
  
}