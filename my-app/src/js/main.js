document.addEventListener('DOMContentLoaded', function () {

  document.body.addEventListener('click', (e) => {
    dropListToggle(e)
    hideDropDown(e)
  });

  window.onresize = function () {
    let tables = document.querySelectorAll('.table-wrapper-scroll-y')
    
    tables.forEach(function (item, index) {
      let parentBody = item.closest('.Section__bottom').clientHeight
    
    item.style.maxHeight = parentBody+'px'
    console.log('p'+parentBody)
    console.log('el'+item.style.maxHeight)
    
    })
  }


  let compareLastDropDown = []

  function dropListToggle(e) {
    //close all dropdown
    if (e.target.classList.contains('dropTarget')) {
      //set dropdown
      const ul = e.target.parentElement.children[1];
      let btnHeight = e.target.offsetHeight + 6;
      let btnBottom = e.target.offsetTop + btnHeight;
      let btnLeft = e.target.getBoundingClientRect().left + window.scrollX
      let currentDropDown = btnBottom + btnLeft;
      compareLastDropDown.push(currentDropDown)
      //comparing previous dropdown & current dropdown
      if (currentDropDown !== compareLastDropDown[compareLastDropDown.length - 2]) {
        const dropDown = document.querySelectorAll('.dropDown')
        dropDown.forEach(function (item) {
          item.children[1].style.display = 'none'
        })
      }
      //set dropdown position
      ul.style.top = btnBottom + 'px'
      ul.style.opacity = 1
      ul.style.left = btnLeft + 'px'
      ul.style.display = (ul.style.display === 'none') ? 'block' : 'none'
      //clear extra data from array
      if (compareLastDropDown.length > 3) {
        compareLastDropDown.shift(1)
      }
    }
  }

  //hide all dropdowns onClick somewhere else besides dropdown target,input,label
  function hideDropDown(e) {
    if (e.target.className !== 'dropTarget') {
      if (e.target.tagName === "INPUT" || e.target.tagName === "LABEL") { }
      else {
        const dropDown = document.querySelectorAll('.dropDown')
        dropDown.forEach(function (item) {
          item.children[1].style.display = 'none'
        })
      }
    }
  }
}
);


