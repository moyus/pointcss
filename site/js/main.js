(function () {

  var modalify = function (triggerEl) {
    var modalId = triggerEl.getAttribute('data-target')
    var modal = document.getElementById(modalId)
    var modalCloseEls = document.querySelectorAll('#' + modalId + ' .js-modal-close')
    triggerEl.addEventListener('click', function (e) {
      e.preventDefault()
      modal.classList.toggle('is-active');
    })
    modalCloseEls.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault()
        modal.classList.remove('is-active')
      })
    })
  }

  // cache selectors
  var $modalTriggers = document.querySelectorAll('.js-modal-trigger')
  $modalTriggers.forEach(function (el) {
    modalify(el)
  })

})()
