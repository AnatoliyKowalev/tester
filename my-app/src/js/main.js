document.addEventListener('DOMContentLoaded', function () {

  document.body.addEventListener('click', (e) => {
    dropListToggle(e)
    hideDropDown(e)
    // showModalWindow(e)
    // closeModalWindow(e)
    setTimeout(() => {
      tableResize()
    }, 200);
  });

  setTimeout(function () { tableResize() }, 1500)

  window.onresize = function () { tableResize() }

  function tableResize() {
    let tables = document.querySelectorAll('.dataTables_wrapper')
    tables.forEach(function (item, index) {
      let section = item.closest('.Section'),
        sectionName = section.querySelector('.Section__name'),
        sectionTop = section.querySelector('.Section__top'),
        scrollY = item.querySelector('.table-wrapper-scroll-y'),
        sortingTh = scrollY.parentElement.parentElement.querySelector('.sorting'),
        height
      if (sectionTop !== null && sortingTh !== null) {
        height = section.clientHeight - sectionName.clientHeight - sortingTh.clientHeight - sectionTop.clientHeight - 3 + 'px'
      }
      if (sectionTop === null && sortingTh !== null) {
        height = section.clientHeight - sectionName.clientHeight - sortingTh.clientHeight - 3 + 'px'
      }
      if (sectionTop !== null && sortingTh === null) {
        height = section.clientHeight - sectionName.clientHeight - sectionTop.clientHeight - 3 + 'px'
      }

      scrollY.style.maxHeight = height
      item.style.maxHeight = height
    })
  }

  let compareLastDropDown = []
  function dropListToggle(e) {
    //mobile screen dropdown show
    if (e.target.classList.contains('dropTarget')) {
      if (e.target.closest('.nav-item')) {
        const clear = document.getElementById('topMenu').children[1]
        if (document.body.clientWidth <= 481) {
          clear.style.height = '100vh'
        }
        clear.style.overflow = 'inherit'
        clear.children[0].style.overflow = 'inherit'
      }

      //set dropdown
      const ul = e.target.parentElement.children[1];
      let btnHeight = e.target.offsetHeight + 2;
      let btnBottom = e.target.offsetTop + btnHeight;
      // let btnLeft = e.target.getBoundingClientRect().left + window.scrollX
      let btnLeft = e.target.offsetLeft - e.target.offsetRight;
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
      if (e.target.tagName === "INPUT" || e.target.tagName === "LABEL" || e.target.classList.contains('ff')) { }
      else {
        const dropDown = document.querySelectorAll('.dropDown')
        dropDown.forEach(function (item) {
          item.children[1].style.display = 'none'
        })
        //mobile screen dropdown hide
        const clear = document.getElementById('topMenu').children[1]
        if (document.body.clientWidth <= 481) {
          clear.style.height = '88px'
        }
        clear.style.overflow = 'hidden'
        clear.children[0].style.overflow = 'hidden'
      }
    }
  }
})
