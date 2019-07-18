document.addEventListener('DOMContentLoaded', function(){ 

  document.body.addEventListener('click', (e) => {
    dropListToggle(e)
    hideDropDown(e)
  });


  function dropListToggle(e) {
    //close all dropdown
    // let dropDown = document.querySelectorAll('.dropDown')
    // dropDown.forEach(function(item) {
    //   item.children[1].style.display = 'none'
    // })
    //---
    if(e.target.classList.contains('dropTarget')){
      
     const ul = e.target.parentElement.children[1];
     
     let btnHeight = e.target.offsetHeight+8;
     let btnBottom = e.target.offsetTop+btnHeight;
     let btnLeft = e.target.getBoundingClientRect().left + window.scrollX

      ul.style.top = btnBottom+'px'
      ul.style.left = btnLeft+'px'
      ul.style.display = (ul.style.display === 'none') ? 'block' : 'none' 
      
    }
  }

  //hide all dropdowns onClick somewhere else besides dropdown target
  function hideDropDown(e) {
    if( e.target.className !== 'dropTarget') {
      let dropDown = document.querySelectorAll('.dropDown')
      if(e.target.tagName === "INPUT" || e.target.tagName === "LABEL") {

      } else {
      dropDown.forEach(function(item) {
        item.children[1].style.display = 'none'
      })
    }
    }
  }


 
     
  

 
}

);