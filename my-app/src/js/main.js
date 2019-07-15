document.addEventListener('DOMContentLoaded', function(){ 

  document.body.addEventListener('click', closeElememnt);

  function closeElememnt(e) {
    if(e.target.classList.contains('bottomMenuClose')) {
      e.target.parentElement.parentElement.style.display = 'none'
    }

    if((e.target.tagName === 'path' && e.target.parentElement.parentElement.classList.contains('leftBarRollUp')) ||
       (e.target.tagName === 'svg' && e.target.parentElement.classList.contains('leftBarRollUp'))||
       (e.target.classList.contains('leftBarRollUp'))) {

          let leftBarTabs =  document.getElementsByClassName('tabs-wrapper')
          for (let i = 0; i < leftBarTabs.length; i++) {
            if( leftBarTabs[i].classList.contains('rolled')) {
              leftBarTabs[i].classList.remove('rolled')
              leftBarTabs[i].classList.add('unrolled')
            } else {
              leftBarTabs[i].classList.add('rolled')
              leftBarTabs[i].classList.remove('unrolled')
            }
          }
          e.target.closest(".tabs-wrapper").classList.remove('rolled')
          e.target.closest(".tabs-wrapper").classList.add('unrolled')
        }
  }
 

});